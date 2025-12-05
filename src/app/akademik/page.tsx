import { Construction, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AcademyPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-8 animate-in fade-in zoom-in duration-500">

                {/* Icon */}
                <div className="mx-auto w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-blue-200 dark:shadow-none rotate-3 hover:rotate-6 transition-transform duration-300">
                    <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground">
                        Kuduz.org <span className="text-blue-600 dark:text-blue-400">Akademi</span>
                    </h1>
                    <p className="text-xl text-muted-foreground font-medium max-w-lg mx-auto leading-relaxed">
                        Bilimsel veriler, detaylı analizler ve eğitim materyalleri ile dolu kapsamlı bir kaynak hazırlıyoruz.
                    </p>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-bold text-sm border border-amber-200 dark:border-amber-800/50">
                    <Construction className="w-4 h-4" />
                    <span>Çok Yakında Sizlerle</span>
                </div>

                {/* Action */}
                <div className="pt-8">
                    <Button asChild size="lg" className="h-12 px-8 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all">
                        <Link href="/">
                            Ana Sayfaya Dön <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>

            </div>
        </div>
    );
}
