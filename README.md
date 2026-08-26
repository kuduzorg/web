# Kuduz.org Web

Kuduz.org; kuduz hakkında doğrulanmış bilgi, temas sonrası yönlendirme, risk haritası, haberler ve güvenli vatandaş bildirimleri sunan açık kaynaklı bir Next.js uygulamasıdır. Platform erken erişimdedir; il bazlı veriler doğrulanana kadar ilgili alanlar **Veri Yok** olarak gösterilir.

> Bu proje T.C. Sağlık Bakanlığı, T.C. Tarım ve Orman Bakanlığı veya başka bir resmî kurumun sitesi değildir. Sağlık hizmeti, tanı veya kişisel tedavi önerisi sunmaz. Şüpheli temasta vakit kaybetmeden bir sağlık kuruluşuna başvurun; acil durumda 112’yi arayın.

## Özellikler

- İl bazlı kuduz risk verisi ve yanlış veri bildirimi
- Temas sonrası ilk yardım ve sağlık kuruluşuna başvuru rehberi
- OpenStreetMap tabanlı, API anahtarı gerektirmeyen acil nokta haritası
- Kaynak bağlantılı Türkiye ve dünya haberleri
- Turnstile korumalı vatandaş bildirimi ve katkı formları
- PostgreSQL üzerinde haber, harita verisi, bildirim ve iletişim kayıtları
- Ayrı `admin` uygulamasıyla aynı veritabanının yönetimi

## Teknoloji

- Next.js 16, React 19 ve TypeScript
- Tailwind CSS ve shadcn/ui
- PostgreSQL 17 ve Docker Compose
- Leaflet / OpenStreetMap
- Zod, React Hook Form ve Cloudflare Turnstile

## Yerel kurulum

Gereksinimler: Node.js 20+, npm ve Docker Compose.

```bash
npm install
cp .env.example .env
```

`.env` içindeki tüm alanları kendiniz doldurun. `DATABASE_URL`, `POSTGRES_PASSWORD` ve `TURNSTILE_SECRET_KEY` gizlidir; `NEXT_PUBLIC_` önekli değişkenlerin tarayıcıya açık olduğunu unutmayın. Üretimde uzun ve benzersiz bir PostgreSQL parolası kullanın.

```bash
docker compose up -d postgres
npm run dev
```

Uygulama varsayılan olarak `http://localhost:3000` adresinde açılır. Şema ve başlangıçtaki 81 il kaydı ilk veritabanı bağlantısında oluşturulur.

## Ortam değişkenleri

| Değişken | Gerekli | Açıklama |
| --- | --- | --- |
| `DATABASE_URL` | Evet | PostgreSQL bağlantı adresi; yalnızca sunucu tarafında kullanılır. |
| `WEB_ORIGIN` | Üretimde | Web uygulamasının tam dış adresi; örneğin `https://example.org`. |
| `POSTGRES_DB` | Docker için | Compose tarafından oluşturulacak veritabanı adı. |
| `POSTGRES_USER` | Docker için | PostgreSQL kullanıcısı. |
| `POSTGRES_PASSWORD` | Docker için | Güçlü ve gizli PostgreSQL parolası. |
| `POSTGRES_PORT` | Hayır | Host portu; boşsa Compose `5432` kullanır. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Üretimde | Cloudflare Turnstile site anahtarı; herkese açıktır. |
| `TURNSTILE_SECRET_KEY` | Üretimde | Turnstile sunucu anahtarı; kesinlikle commit edilmemelidir. |
| `NEXT_PUBLIC_MAP_CDN_URL` | Seyahat haritası için | Tarayıcıdan erişilebilen ülke haritası veri kaynağı. |

## Komutlar

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Güvenlik ve veri sorumluluğu

- `.env`, anahtarlar, sertifikalar, veritabanı dökümleri ve yerel veri klasörleri Git tarafından yok sayılır.
- `.env.example` yalnızca değişken adlarını içerir; gerçek değer eklemeyin.
- Vatandaş bildirimleri kişisel veri içerebilir. Veritabanını internete doğrudan açmayın, en az yetkili kullanıcı kullanın ve yedekleri şifreleyin.
- Üretimde TLS, güvenli çerezler, ters proxy güvenlik başlıkları, erişim logları ve düzenli bağımlılık taraması kullanın.
- Güvenlik açığını herkese açık issue yerine proje yöneticilerine özel kanaldan bildirin.

## İçerik ve kaynaklar

Sağlık içeriği resmî ve kurumsal kaynaklara dayandırılmalıdır. İl bazında yayımlanmış, güncel ve doğrulanabilir veri yoksa sayı veya risk seviyesi tahmin edilmemelidir. Haber kayıtları kaynak URL’si ve gerçek yayın tarihiyle girilmelidir.

## Lisans

Lisans koşulları için repository içindeki `LICENSE` dosyasına bakın.
