"use client";

import { useState } from "react";
import { AlertTriangle, Info, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Turnstile } from "@marsidev/react-turnstile";

interface DataDisclaimerProps {
    compact?: boolean;
}

export function DataDisclaimer({ compact = false }: DataDisclaimerProps) {
    const [open, setOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);
    const [reportText, setReportText] = useState("");
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!turnstileToken) return setError("Lütfen güvenlik doğrulamasını tamamlayın.");
        setIsSubmitting(true);
        setError("");
        const formData = new FormData();
        formData.set("type", "correction");
        formData.set("subject", "Risk haritası veri bildirimi");
        formData.set("content", reportText);
        formData.set("source", "");
        formData.set("name", "");
        formData.set("email", "");
        formData.set("token", turnstileToken);
        try {
            const response = await fetch("/api/contributions", { method: "POST", body: formData });
            const body = await response.json();
            if (!response.ok) throw new Error(body.error || "Bildirim gönderilemedi.");
            setOpen(false);
            setReportText("");
            setTurnstileToken(null);
            setSuccessOpen(true);
        } catch (submitError) {
            setError(submitError instanceof Error ? submitError.message : "Bildirim gönderilemedi.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (compact) {
        return (
            <>
                <div className="mt-6 p-3 bg-muted/20 rounded-lg border border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2 leading-tight">
                        <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>Veriler temsilidir. Kesin bilgi için yerel makamlara başvurunuz.</span>
                    </div>
                    <ReportDialog
                        open={open}
                        onOpenChange={setOpen}
                        reportText={reportText}
                        setReportText={setReportText}
                        onSubmit={handleSubmit}
                        onTurnstileSuccess={setTurnstileToken}
                        isSubmitting={isSubmitting}
                        error={error}
                        variant="outline"
                    />
                </div>
                <SuccessDialog open={successOpen} onOpenChange={setSuccessOpen} />
            </>
        );
    }

    return (
        <>
            <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex gap-3">
                    <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                        <strong>Yasal Uyarı:</strong> Bu harita yalnızca bilgilendirme amaçlıdır. &quot;Yüksek Risk&quot; ibaresi, ilgili ilde son dönemde karantina tedbiri uygulandığını gösterir, tüm ilin tehlikede olduğu anlamına gelmez. Veriler anlık olarak değişebilir.
                    </div>
                </div>
                <ReportDialog
                    open={open}
                    onOpenChange={setOpen}
                    reportText={reportText}
                    setReportText={setReportText}
                    onSubmit={handleSubmit}
                    onTurnstileSuccess={setTurnstileToken}
                    isSubmitting={isSubmitting}
                    error={error}
                    variant="outline"
                />
            </div>
            <SuccessDialog open={successOpen} onOpenChange={setSuccessOpen} />
        </>
    );
}

interface ReportDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    reportText: string;
    setReportText: (text: string) => void;
    onSubmit: (e: React.FormEvent) => void;
    onTurnstileSuccess: (token: string) => void;
    isSubmitting: boolean;
    error: string;
    variant?: "link" | "outline";
}

function ReportDialog({ open, onOpenChange, reportText, setReportText, onSubmit, onTurnstileSuccess, isSubmitting, error, variant = "link" }: ReportDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button variant={variant} size="sm" className={variant === "link" ? "h-auto p-0 text-xs text-red-500 hover:text-red-600" : "shrink-0 gap-2 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 border-red-200"}>
                    {variant === "outline" && <AlertTriangle className="w-4 h-4" />}
                    Yanlış Veri Bildir
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Yanlış Veri Bildirimi</DialogTitle>
                    <DialogDescription>
                        Hatalı olduğunu düşündüğünüz veriyi ve kaynağını lütfen aşağıda belirtiniz.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={onSubmit} className="space-y-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="report">Açıklama</Label>
                        <Textarea
                            id="report"
                            placeholder="Örn: Ankara verisi güncel değil, Sağlık Bakanlığı son raporuna göre..."
                            value={reportText}
                            onChange={(e) => setReportText(e.target.value)}
                            className="min-h-[100px]"
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <Turnstile
                            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                            onSuccess={onTurnstileSuccess}
                        />
                    </div>
                    {error && <p className="text-sm text-red-600">{error}</p>}
                    <DialogFooter>
                        <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Gönderiliyor..." : "Gönder"}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

function SuccessDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[360px] text-center p-6">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-500" />
                    </div>
                    <div className="space-y-2">
                        <DialogTitle className="text-lg font-semibold">Bildiriminiz Alındı</DialogTitle>
                        <DialogDescription className="text-sm text-muted-foreground">
                            Geri bildiriminiz için teşekkür ederiz. İlettiğiniz veriler ekibimiz tarafından incelenecektir.
                        </DialogDescription>
                    </div>
                    <Button onClick={() => onOpenChange(false)} className="w-full mt-2">
                        Tamam
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
