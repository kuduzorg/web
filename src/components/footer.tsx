import { ShieldAlert, Github, Instagram, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">

      {/* YASAL UYARI ŞERİDİ (DISCLAIMER) */}
      <div className="bg-slate-900 border-b border-slate-800 py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <ShieldAlert className="w-8 h-8 text-yellow-500 flex-shrink-0" />
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            <strong className="text-white">YASAL UYARI:</strong> Bu web sitesi (Kuduz.org), sadece bilgilendirme ve farkındalık yaratma amacı taşımaktadır.
            Sitede yer alan bilgiler <span className="text-white decoration-yellow-500 underline">tıbbi tavsiye niteliğinde değildir</span> ve profesyonel hekim muayenesinin yerini tutamaz.
            Acil durumlarda derhal en yakın sağlık kuruluşuna başvurunuz veya 112'yi arayınız.
            Platformumuz resmi bir devlet kurumu değildir; toplanan bildirimler ilgili makamlara iletilmek üzere aracı olarak kullanılır.
            <Link href="/yasal-uyari" className="ml-2 text-yellow-500 hover:text-yellow-400 underline font-medium">
              Devamını gör &rarr;
            </Link>
          </p>
        </div>
      </div>

      {/* ANA FOOTER İÇERİĞİ */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Kolon 1: Marka */}
        <div className="space-y-4">
          <span className="text-2xl font-bold text-white">
            KUDUZ<span className="text-red-500">.ORG</span>
          </span>
          <p className="text-sm text-slate-400">
            Türkiye'de kuduz riskine karşı bilimsel verilerle savaşan, toplum destekli bağımsız bilgi platformu.
          </p>
          <div className="flex gap-4 pt-2">
            {/* X Logo */}
            <a href="https://x.com/kuduzorg" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current hover:text-white cursor-pointer transition-colors">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
            <a href="https://github.com/kuduzorg/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            </a>
            <a href="https://www.instagram.com/kuduzorg/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            </a>
          </div>
        </div>

        {/* Kolon 2: Hızlı Linkler */}
        <div>
          <h4 className="text-white font-semibold mb-4">Hızlı Erişim</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/rehber" className="hover:text-red-400 transition-colors">Ne Yapmalıyım?</Link></li>
            <li><Link href="/risk-haritasi" className="hover:text-red-400 transition-colors">Risk Haritası</Link></li>
            <li><Link href="/bildir" className="hover:text-red-400 transition-colors">Vaka Bildir</Link></li>
            <li><Link href="/seyahat" className="hover:text-red-400 transition-colors">Seyahat Rehberi</Link></li>
            <li><Link href="/katkida-bulun" className="hover:text-red-400 transition-colors">Katkıda Bulun</Link></li>
          </ul>
        </div>

        {/* Kolon 3: Kurumsal & Yasal */}
        <div>
          <h4 className="text-white font-semibold mb-4">Kurumsal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link></li>
            <li><Link href="/iletisim" className="hover:text-white transition-colors">İletişim</Link></li>
            <li><Link href="/gizlilik" className="hover:text-white transition-colors">Gizlilik Politikası</Link></li>
            <li><Link href="/kullanim-sartlari" className="hover:text-white transition-colors">Kullanım Şartları</Link></li>
            <li><Link href="/yasal-uyari" className="hover:text-white transition-colors">Yasal Uyarı</Link></li>
            <li><Link href="/kvkk" className="hover:text-white transition-colors">KVKK Aydınlatma</Link></li>
          </ul>
        </div>

        {/* Kolon 4: Acil İletişim */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold mb-4">Acil Durumlar</h4>
          <div className="flex items-center gap-3 text-red-400 font-bold text-lg">
            <Phone className="w-6 h-6" />
            112 ACİL
          </div>
          <p className="text-xs text-slate-500">
            Şüpheli hayvan ihbarları için Tarım ve Orman Bakanlığı veya Belediye hatlarını arayabilirsiniz.
          </p>
        </div>
      </div>

      {/* ALT ŞERİT */}
      <div className="border-t border-slate-900 py-6 text-center text-xs text-slate-600">
        <p>&copy; 2025 Kuduz.org - Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
}