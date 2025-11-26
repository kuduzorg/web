# Kuduz.org 🛡️

**"Bilgiyle Koru, Bilinçle Yaşa."**

Kuduz.org; Türkiye'deki kuduz riskine karşı toplumu bilimsel verilerle bilgilendirmek, risk analizi sunmak ve güvenli bir veri tabanı oluşturmak amacıyla geliştirilmiş açık kaynaklı (open-source) bir sosyal sorumluluk platformudur.

<img width="14337" height="4737" alt="x-banner@4x" src="https://github.com/user-attachments/assets/5d9a9ad7-999b-42e7-bf62-323473dbee8e" />

## 🚀 Özellikler

* **İnteraktif Risk Haritası:** İl bazlı risk durumlarını gösteren detaylı harita.
* **Acil Durum Sihirbazı:** Isırılma/Temas durumunda adım adım (Step-by-step) yönlendirme.
* **Acil Noktalar:** Konuma dayalı en yakın nöbetçi veteriner ve hastane bulucu (Google Maps).
* **Seyahat Sağlığı:** Gidilecek ülkeye göre kuduz risk analizi.
* **Güvenli Bildirim Sistemi:** Vatandaşların riskli durumları anonim olarak bildirebildiği veri toplama modülü.
* **Akademik (LABS):** Sağlık profesyonelleri için veri ve literatür merkezi. (Yakında eklenecek.)

## 🛠️ Teknolojiler

Bu proje modern web teknolojileri kullanılarak geliştirilmiştir:

* **Framework:** [Next.js 16.0.4](https://nextjs.org/) (App Router)
* **Dil:** TypeScript
* **Stil:** [Tailwind CSS](https://tailwindcss.com/)
* **UI Kütüphanesi:** [shadcn/ui](https://ui.shadcn.com/)
* **Harita:** Google Maps API
* **Animasyon:** Framer Motion
* **Form & Validasyon:** React Hook Form + Zod

## 📦 Kurulum (Local Development)

Projeyi kendi bilgisayarınızda çalıştırmak için:

1.  **Repoyu klonlayın:**
    ```bash
    git clone https://github.com/kuduzorg/web.git
    cd kuduz-org
    ```

2.  **Paketleri yükleyin:**
    ```bash
    npm install
    # veya
    yarn install
    ```

3.  **Çevre Değişkenlerini (.env) Ayarlayın:**
    `.env.example` dosyasını `.env.local` olarak kopyalayın ve gerekli anahtarları girin.

4.  **Projeyi Başlatın:**
    ```bash
    npm run dev
    ```
    Tarayıcınızda `http://localhost:3000` adresine gidin.

## 🤝 Katkıda Bulunma (Contributing)

Bu proje topluluk desteğiyle büyümektedir. Her türlü katkıya (kod, tasarım, içerik, çeviri) açığız. Lütfen önce `CONTRIBUTING.md` dosyasını okuyunuz (Yakında eklenecek).

1.  Bu repoyu Fork'layın.
2.  Yeni bir özellik dalı (branch) oluşturun (`git checkout -b feature/yeni-ozellik`).
3.  Değişikliklerinizi commit'leyin (`git commit -m 'Yeni özellik eklendi'`).
4.  Dalı Push'layın (`git push origin feature/yeni-ozellik`).
5.  Bir Pull Request (PR) oluşturun.

## ⚖️ Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır.

---
*Bu proje T.C. Sağlık Bakanlığı veya herhangi bir resmi kurumun resmi web sitesi değildir. Gönüllü bir inisiyatiftir.*
