import { LegalLayout } from "@/components/legal-layout";

export default function TermsPage() {
  return (
    <LegalLayout title="Kullanım Koşulları" active="sartlar">
      <p><strong>Son Güncelleme:</strong> 25 Kasım 2025</p>
      
      <h3>1. Giriş ve Kabul</h3>
      <p>Kuduz.org ("Platform") web sitesine erişerek veya kullanarak, aşağıda belirtilen Kullanım Koşullarını ("Koşullar") kabul etmiş sayılırsınız. Eğer bu koşulları kabul etmiyorsanız, lütfen platformu kullanmayınız.</p>

      <h3>2. Platformun Amacı ve Hukuki Sınırlar</h3>
      <p>Kuduz.org, Türkiye'deki kuduz riski hakkında toplumu bilgilendirmek ve bilimsel veriler ışığında farkındalık yaratmak amacıyla kurulmuş bağımsız bir bilgi platformudur.</p>
      <ul>
        <li><strong>Tıbbi Tavsiye Değildir:</strong> Sitede yer alan hiçbir içerik (yazı, görsel, grafik, hesaplama araçları vb.) profesyonel tıbbi tavsiye, teşhis veya tedavi yerine geçmez. Acil durumlarda derhal 112 Acil Çağrı Merkezi aranmalı veya en yakın sağlık kuruluşuna başvurulmalıdır.</li>
        <li><strong>Resmi Kurum Değildir:</strong> Platformumuz, T.C. Sağlık Bakanlığı veya Tarım ve Orman Bakanlığı'nın resmi web sitesi değildir. Sunulan veriler, bu kurumların halka açık raporlarından derlenmektedir.</li>
      </ul>

      <h3>3. "Yetkililere Bildir" Özelliği ve Sorumluluklar</h3>
      <p>Platform üzerinden yapılan "Şüpheli Durum Bildirimleri" konusunda kullanıcılar şu hususları kabul eder:</p>
      <ul>
        <li>Kullanıcı, bildirdiği konum, fotoğraf ve açıklama verilerinin doğru olduğunu taahhüt eder.</li>
        <li><strong>Hedef Gösterme Yasağı:</strong> Hayvanları kasten hedef gösteren, itlaf edilmesine veya zarar görmesine yönelik teşvik içeren, 5199 Sayılı Hayvanları Koruma Kanunu'na aykırı bildirimlerde bulunmak yasaktır.</li>
        <li>Platform, kullanıcı bildirimlerini anlık olarak yayınlamaz. Bu bildirimler, yalnızca yetkili yerel yönetimlere veya ilgili bakanlık birimlerine iletilmek üzere toplanır.</li>
      </ul>

      <h3>4. Fikri Mülkiyet</h3>
      <p>Sitedeki tasarımlar, logolar, metinler ve kodlar Kuduz.org'a aittir. İndirilebilir materyaller (posterler vb.) sadece "bilinçlendirme amacıyla" ve "değiştirilmeden" kullanılmak şartıyla ücretsizdir.</p>

      <h3>5. Değişiklikler</h3>
      <p>Yönetim, bu koşulları önceden haber vermeksizin değiştirme hakkını saklı tutar.</p>
    </LegalLayout>
  );
}