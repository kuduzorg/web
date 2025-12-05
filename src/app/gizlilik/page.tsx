import { LegalLayout } from "@/components/legal-layout";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Gizlilik Politikası" active="gizlilik">
      <h3>1. Veri Toplama İlkeleri</h3>
      <p>Kuduz.org olarak gizliliğinize önem veriyoruz. Platformumuzu ziyaret ettiğinizde aşağıdaki veriler işlenebilir:</p>
      <ul>
        <li><strong>Otomatik Veriler:</strong> IP adresi, tarayıcı türü, ziyaret süresi (Google Analytics vb. çerezler aracılığıyla).</li>
        <li><strong>Gönüllü Veriler:</strong> "İletişim Formu" veya "Bildirim Formu" aracılığıyla kendi rızanızla girdiğiniz ad, e-posta, konum bilgisi ve fotoğraflar.</li>
      </ul>

      <h3>2. Konum ve Fotoğraf Verilerinin Kullanımı</h3>
      <p>Bildirim modülünde talep edilen hassas veriler (GPS konumu ve fotoğraflar) hakkında şeffafız:</p>
      <ul>
        <li>Bu veriler, halka açık bir harita üzerinde (Havrita vb. uygulamalarda olduğu gibi) <strong>kesinlikle yayınlanmaz.</strong></li>
        <li>Veriler, yalnızca risk analizi yapmak ve gerekirse ilgili Belediyenin Veteriner İşleri Müdürlüğü veya Tarım İl Müdürlüğü ile paylaşılmak üzere saklanır.</li>
        <li>İşleme amacı sona erdiğinde (bildirim yetkiliye iletildiğinde) veriler sistemlerimizden anonimleştirilerek silinir.</li>
      </ul>

      <h3>3. Çerezler (Cookies)</h3>
      <p>Site deneyimini iyileştirmek (örn: Dark Mode tercihinizi hatırlamak) için zorunlu ve analitik çerezler kullanılmaktadır. Tarayıcı ayarlarınızdan bunları engelleyebilirsiniz.</p>

      <h3>4. Üçüncü Taraflarla Paylaşım</h3>
      <p>Verileriniz, yasal zorunluluklar (Savcılık talebi vb.) veya açıkça belirtilen kamu sağlığı durumu (Yetkili Kurumlar) haricinde üçüncü şahıslarla ticari amaçla paylaşılmaz.</p>
    </LegalLayout>
  );
}