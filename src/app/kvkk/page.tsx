import { LegalLayout } from "@/components/legal-layout";

export default function KvkkPage() {
  return (
    <LegalLayout title="KVKK Aydınlatma Metni" active="kvkk">
      <p><strong>Veri Sorumlusu:</strong> Kuduz.org Platformu Gönüllüleri</p>
      <p>6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz aşağıda açıklanan kapsamda işlenebilecektir.</p>

      <h3>1. Kişisel Verilerin İşlenme Amacı</h3>
      <p>Toplanan kişisel verileriniz (Kimlik, İletişim, Lokasyon, Görsel Kayıtlar);</p>
      <ul>
        <li>Kuduz risk haritasının istatistiksel olarak oluşturulması (Anonim olarak),</li>
        <li>Kamu sağlığını tehdit eden durumların yetkili kamu kurumlarına bildirilmesi,</li>
        <li>İletişim faaliyetlerinin yürütülmesi,</li>
      </ul>
      <p>amaçlarıyla, KVKK’nın 5. ve 6. maddelerinde belirtilen şartlara uygun olarak işlenmektedir.</p>

      <h3>2. İşlenen Kişisel Verilerin Kimlere Aktarılabileceği</h3>
      <p>Toplanan veriler; yalnızca yasal yükümlülüklerimizi yerine getirmek amacıyla <strong>T.C. Sağlık Bakanlığı, Tarım ve Orman Bakanlığı, ilgili Belediyeler</strong> ve kanunen yetkili kamu kurumları ile paylaşılabilecektir. Herhangi bir reklam/pazarlama amacı güdülmemektedir.</p>

      <h3>3. Veri Toplamanın Yöntemi ve Hukuki Sebebi</h3>
      <p>Kişisel verileriniz, web sitemiz üzerindeki formlar aracılığıyla elektronik ortamda toplanmaktadır. Hukuki sebep olarak KVKK Madde 5/2-ç (Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi) ve Madde 5/2-e (Bir hakkın tesisi, kullanılması veya korunması) maddelerine dayanılmaktadır.</p>

      <h3>4. İlgili Kişinin Hakları</h3>
      <p>KVKK’nın 11. maddesi uyarınca, <strong>iletisim@kuduz.org</strong> adresine başvurarak:</p>
      <ul>
        <li>Kişisel verinizin işlenip işlenmediğini öğrenme,</li>
        <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
        <li>Verilerin silinmesini veya yok edilmesini isteme haklarına sahipsiniz.</li>
      </ul>
    </LegalLayout>
  );
}