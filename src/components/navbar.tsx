"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  Menu,
  ShieldAlert,
  BookOpen,
  Newspaper,
  HelpCircle,
  ChevronRight,
  Phone,
  Map,
  Navigation,
  Building2,
  Users,
  FileText,
  ShieldCheck,
  Mail,
  ChevronDown,
  FlaskConical,
  Sun,
  Moon,
  Plane,
  Library,
  Edit
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { EmergencyModal } from "@/components/emergency-modal";

// 1. ANA NAVİGASYON (Öncelikli)
const mainNavItems = [
  { href: "/rehber", label: "Ne Yapmalıyım?", icon: <ShieldAlert className="w-5 h-5" />, desc: "Acil durum rehberi" },
  { href: "/risk-haritasi", label: "Risk Haritası", icon: <Map className="w-5 h-5" />, desc: "İl bazlı risk durumu" },
  { href: "/acil-noktalar", label: "Acil Noktalar", icon: <Navigation className="w-5 h-5" />, desc: "Nöbetçi veteriner & hastane" },
];

// 2. BİLGİ & KAYNAKLAR (Dropdown)
const resourceItems = [
  { href: "/bilgi", label: "Kuduz Hakkında", icon: <BookOpen className="w-4 h-4" /> },
  { href: "/seyahat", label: "Seyahat Rehberi", icon: <Plane className="w-4 h-4" /> },
  { href: "/kaynakca", label: "Kaynakça", icon: <Library className="w-4 h-4" /> },
  { href: "/haberler", label: "Haberler", icon: <Newspaper className="w-4 h-4" /> },
  { href: "/sss", label: "SSS", icon: <HelpCircle className="w-4 h-4" /> },
  { href: "/katkida-bulun", label: "Katkıda Bulun", icon: <Edit className="w-4 h-4" /> },
];

// 3. KURUMSAL LİNKLER
const corporateItems = [
  { href: "/hakkimizda", label: "Hakkımızda", icon: <Users className="w-4 h-4" /> },
  { href: "/iletisim", label: "İletişim", icon: <Mail className="w-4 h-4" /> },
  { href: "/gizlilik", label: "Gizlilik Politikası", icon: <ShieldCheck className="w-4 h-4" /> },
  { href: "/kvkk", label: "KVKK Aydınlatma", icon: <FileText className="w-4 h-4" /> },
  { href: "/kullanim-sartlari", label: "Kullanım Şartları", icon: <FileText className="w-4 h-4" /> },
  { href: "/yasal-uyari", label: "Yasal Uyarı", icon: <AlertTriangle className="w-4 h-4" /> },
];

export function Navbar() {
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-colors duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* LOGO ALANI */}
        <Link href="/" className="flex items-center space-x-3 group shrink-0 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 h-7 md:w-8 md:h-8 shrink-0">
            <rect width="512" height="512" rx="100" className="fill-primary" />
            <path fill="white" d="M110 380V130h65v105l95-105h80L235 255l125 125h-80l-95-100v100h-75z" />
            <path fill="white" d="M390 110v30h-30v20h30v30h20v-30h30v-20h-30v-30h-20z" />
          </svg>
          <span className="text-xl md:text-2xl font-bold tracking-tighter text-foreground whitespace-nowrap">
            KUDUZ.ORG
          </span>
        </Link>

        {/* DESKTOP MENÜ */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {mainNavItems.map(item => (
            <Link key={item.href} href={item.href} className="hover:text-primary transition-colors flex items-center gap-2">
              {item.label}
            </Link>
          ))}

          {/* Bilgi & Kaynaklar Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors focus:outline-none data-[state=open]:text-primary">
              Bilgi & Kaynaklar <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56">
              {resourceItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="cursor-pointer flex items-center gap-2 py-2">
                    {item.icon} {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Kurumsal Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors focus:outline-none data-[state=open]:text-primary">
              Kurumsal <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {corporateItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="cursor-pointer flex items-center gap-2">
                    {item.icon} {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* SAĞ ALAN */}
        <div className="flex items-center gap-1 md:gap-3 shrink-0">

          {/* LABS Butonu */}
          <Button variant="ghost" size="sm" className="hidden sm:flex gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20" asChild>
            <Link href="/akademik">
              <FlaskConical className="w-4 h-4" />
              <span className="hidden lg:inline font-bold">LABS</span>
            </Link>
          </Button>

          {/* Desktop Araçları */}
          <div className="hidden xl:flex items-center gap-2">
            <ModeToggle />
            <EmergencyModal>
              <Button variant="destructive" className="font-bold shadow-md shadow-red-500/20 flex gap-2 px-4">
                <AlertTriangle className="h-4 w-4" />
                ACİL YARDIM
              </Button>
            </EmergencyModal>
          </div>

          {/* MOBİL MENÜ */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="xl:hidden focus-visible:ring-0 -mr-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menüyü aç</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85vw] sm:w-[400px] flex flex-col p-0 border-l-border overflow-y-auto h-full z-[100]">

              <SheetHeader className="p-5 border-b border-border/40 bg-muted/20 shrink-0 flex-row items-center justify-between space-y-0 text-left">
                <div className="flex items-center space-x-2 whitespace-nowrap overflow-hidden">
                  <SheetTitle className="text-lg font-bold tracking-tighter text-foreground flex items-center">
                    KUDUZ<span className="text-primary">.ORG</span>
                  </SheetTitle>
                </div>

                <div className="flex items-center gap-1 pr-8">
                  <Button variant="ghost" size="icon" className="h-9 w-9 text-blue-600 hover:bg-blue-100/50 rounded-full" asChild>
                    <Link href="/akademik"><FlaskConical className="w-5 h-5" /></Link>
                  </Button>

                  <div className="xl:hidden">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-full"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Temayı Değiştir</span>
                    </Button>
                  </div>
                </div>
              </SheetHeader>

              <div className="flex-1 overflow-y-auto py-4 px-4 space-y-2">

                {/* Ana Menü Öğeleri */}
                {mainNavItems.map(item => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-accent group transition-all duration-200 border border-transparent hover:border-border/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          {item.icon}
                        </div>
                        <span className="font-medium text-sm text-foreground">{item.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                    </Link>
                  </SheetClose>
                ))}

                {/* Bilgi & Kaynaklar (Collapsible) */}
                <Collapsible open={isResourcesOpen} onOpenChange={setIsResourcesOpen} className="border-t border-border/50 pt-2">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between p-3 h-auto font-normal hover:bg-accent group rounded-lg border border-transparent hover:border-border/50">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-sm text-foreground">Bilgi & Kaynaklar</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-muted-foreground/50 transition-transform duration-200 ${isResourcesOpen ? "rotate-180" : ""}`} />
                    </Button>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="pl-4 space-y-1 mt-1 border-l-2 border-blue-500/10 ml-5">
                    {resourceItems.map(item => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-center justify-between p-2.5 rounded-md hover:bg-accent group transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1 rounded bg-muted/50 text-muted-foreground group-hover:text-foreground">
                              {item.icon}
                            </div>
                            <span className="text-sm text-muted-foreground group-hover:text-foreground font-medium">{item.label}</span>
                          </div>
                          <ChevronRight className="w-3 h-3 text-muted-foreground/30 group-hover:text-foreground" />
                        </Link>
                      </SheetClose>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Kurumsal Menü (Collapsible) */}
                <Collapsible open={isCorporateOpen} onOpenChange={setIsCorporateOpen} className="border-t border-border/50 pt-2">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between p-3 h-auto font-normal hover:bg-accent group rounded-lg border border-transparent hover:border-border/50">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-sm text-foreground">Kurumsal</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-muted-foreground/50 transition-transform duration-200 ${isCorporateOpen ? "rotate-180" : ""}`} />
                    </Button>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="pl-4 space-y-1 mt-1 border-l-2 border-primary/10 ml-5">
                    {corporateItems.map(item => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-center justify-between p-2.5 rounded-md hover:bg-accent group transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1 rounded bg-muted/50 text-muted-foreground group-hover:text-foreground">
                              {item.icon}
                            </div>
                            <span className="text-sm text-muted-foreground group-hover:text-foreground font-medium">{item.label}</span>
                          </div>
                          <ChevronRight className="w-3 h-3 text-muted-foreground/30 group-hover:text-foreground" />
                        </Link>
                      </SheetClose>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

              </div>

              {/* FOOTER */}
              <div className="p-5 bg-muted/30 border-t border-border shrink-0 mt-auto">
                <EmergencyModal>
                  <Button variant="destructive" className="w-full flex items-center justify-center gap-2 font-bold h-12 text-base shadow-lg shadow-red-500/20 rounded-xl mb-3">
                    <AlertTriangle className="h-4 w-4" />
                    ACİL YARDIM HATTI
                  </Button>
                </EmergencyModal>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Phone className="w-3 h-3" />
                  <span>Acil Durumlarda: <strong>112</strong></span>
                </div>
              </div>

            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
}