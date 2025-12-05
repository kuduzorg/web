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

interface DataDisclaimerProps {
    compact?: boolean;
}

export function DataDisclaimer({ compact = false }: DataDisclaimerProps) {
    const [open, setOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);
    const [reportText, setReportText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock submission
        console.log("Report submitted:", reportText);
        setOpen(false);
        setReportText("");
        setSuccessOpen(true);
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
                        <strong>Yasal Uyarı:</strong> Bu harita yalnızca bilgilendirme amaçlıdır. "Yüksek Risk" ibaresi, ilgili ilde son dönemde karantina tedbiri uygulandığını gösterir, tüm ilin tehlikede olduğu anlamına gelmez. Veriler anlık olarak değişebilir.
                    </div>
                </div>
                <ReportDialog
                    open={open}
                    onOpenChange={setOpen}
                    reportText={reportText}
                    setReportText={setReportText}
                    onSubmit={handleSubmit}
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
    variant?: "link" | "outline";
}

function ReportDialog({ open, onOpenChange, reportText, setReportText, onSubmit, variant = "link" }: ReportDialogProps) {
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
                    <DialogFooter>
                        <Button type="submit">Gönder</Button>
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
