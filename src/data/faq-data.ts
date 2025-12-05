export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category: "genel" | "bulasma" | "asi-tedavi" | "hayvanlar" | "yasal";
  source: string;
  sourceUrl: string;
};

export const faqData: FAQItem[] = [
  // Genel Bilgiler
  {
    id: "g1",
    category: "genel",
    question: "Kuduz tam olarak nedir ve neden öldürücüdür?",
    answer: "Kuduz, merkezi sinir sistemini (beyin ve omurilik) hedef alan viral bir hastalıktır. Virüs beyne ulaştığında geri dönüşü olmayan bir iltihaplanmaya neden olur. Belirtiler başladıktan sonra ölüm oranı %99.9'dur.",
    source: "DSÖ (WHO)",
    sourceUrl: "https://www.who.int/health-topics/rabies"
  },
  {
    id: "g2",
    category: "genel",
    question: "Türkiye'de kuduz riski yüksek mi?",
    answer: "Türkiye, kuduz açısından 'orta riskli' ülkeler grubundadır. Özellikle yaban hayatı ile temasın olduğu kırsal bölgelerde ve aşısız sokak hayvanlarının yoğun olduğu yerlerde risk mevcuttur.",
    source: "T.C. Sağlık Bakanlığı",
    sourceUrl: "https://hsgm.saglik.gov.tr/tr/zoonoz-hastaliklar/kuduz"
  },
  // Bulaşma Riskleri
  {
    id: "b1",
    category: "bulasma",
    question: "Tırmalama ile kuduz bulaşır mı?",
    answer: "Evet. Hayvanlar pençelerini yaladıkları için tırnaklarında salya ve virüs bulunabilir. Tırmalanma, Dünya Sağlık Örgütü tarafından riskli temas olarak kabul edilir.",
    source: "CDC",
    sourceUrl: "https://www.cdc.gov/rabies/transmission/index.html"
  },
  {
    id: "b2",
    category: "bulasma",
    question: "Kan yoluyla veya hayvana dokunarak bulaşır mı?",
    answer: "Hayır. Kuduz virüsü kanda bulunmaz, sadece sinir dokusu ve salyada bulunur. Enfekte bir hayvanı sadece sevmekle veya kanına temas etmekle bulaşmaz. Bulaşma için salyanın açık yaraya veya mukozaya (göz, ağız) değmesi gerekir.",
    source: "WHO Fact Sheet",
    sourceUrl: "https://www.who.int/news-room/fact-sheets/detail/rabies"
  },
  {
    id: "b3",
    category: "bulasma",
    question: "Fare, sincap veya tavşan ısırdı, aşı gerekir mi?",
    answer: "Genellikle hayır. Fare, sıçan, sincap, hamster, tavşan gibi kemirgenlerin kuduz taşıdığına ve insanlara bulaştırdığına dair vaka neredeyse yoktur. Ancak yine de hekime danışılmalıdır.",
    source: "CDC Small Mammals",
    sourceUrl: "https://www.cdc.gov/rabies/exposure/animals/other.html"
  },
  {
    id: "b4",
    category: "bulasma",
    question: "Yarasa ısırığı riskli midir?",
    answer: "Evet, çok yüksek risklidir. Yarasa ısırıkları iğne ucu kadar küçük olabilir ve fark edilmeyebilir. Yarasa ile temas durumunda derhal aşı prosedürü başlatılmalıdır.",
    source: "Sağlık Bakanlığı Rehberi",
    sourceUrl: "https://hsgm.saglik.gov.tr/"
  },
  {
    id: "b5",
    category: "bulasma",
    question: "Köpeğin salyası kıyafetime değdi, risk var mı?",
    answer: "Virüs kurumaya karşı dayanıksızdır. Kıyafet üzerindeki salya kuruduğunda virüs ölür. Ancak kıyafet ıslakken açık bir yaranıza değerse teorik olarak risk vardır.",
    source: "WHO",
    sourceUrl: "#"
  },
  // Aşı ve Tedavi
  {
    id: "t1",
    category: "asi-tedavi",
    question: "Isırıldıktan ne kadar süre sonra aşı olmalıyım?",
    answer: "Mümkün olan 'en kısa sürede'. İdeal olanı ilk 24 saattir. Ancak aylar geçmiş olsa bile belirtiler başlamadıysa aşı yapılabilir.",
    source: "T.C. Sağlık Bakanlığı Kuduz Profilaksi Rehberi",
    sourceUrl: "https://hsgm.saglik.gov.tr/depo/birimler/zoonotik-vektorel-hastaliklar-db/dokumanlar/rehberler/Kuduz_Profilaksi_Rehberi.pdf"
  },
  {
    id: "t2",
    category: "asi-tedavi",
    question: "Hamileler kuduz aşısı olabilir mi?",
    answer: "Evet. Kuduz aşısı ölü (inaktif) bir aşıdır ve hamilelikte veya emzirme döneminde yapılmasında hiçbir sakınca yoktur. Kuduz riski, aşı riskinden çok daha hayati olduğu için ertelenmez.",
    source: "CDC Vaccine Safety",
    sourceUrl: "https://www.cdc.gov/rabies/medical_care/vaccine.html"
  },
  {
    id: "t3",
    category: "asi-tedavi",
    question: "Aşı olurken alkol alabilir miyim?",
    answer: "Alkolün kuduz aşısının etkinliğini azalttığına dair bilimsel bir kanıt yoktur. Ancak bağışıklık sistemini zayıflatmaması için aşırı tüketimden kaçınılması önerilir.",
    source: "Medical News Today",
    sourceUrl: "#"
  },
  {
    id: "t4",
    category: "asi-tedavi",
    question: "Tetanoz aşısı da olmam gerekir mi?",
    answer: "Evet. Hayvan ısırıkları kirli yaralar grubundadır ve tetanoz riski taşır. Doktorunuz kuduz aşısıyla birlikte tetanoz takviyesi de yapacaktır.",
    source: "NHS",
    sourceUrl: "https://www.nhs.uk/conditions/animal-and-human-bites/"
  },
  {
    id: "t5",
    category: "asi-tedavi",
    question: "Aşı dozunu bir gün kaçırırsam ne olur?",
    answer: "Aşı takvimine (0, 3, 7, 14. günler) uymak çok önemlidir. Bir gün gecikirse hemen ertesi gün yaptırmalı ve yeni takvimi doktorunuzla düzenlemelisiniz. Çok uzun gecikmelerde süreç baştan başlayabilir.",
    source: "WHO",
    sourceUrl: "#"
  },
  // Evcil Hayvanlar
  {
    id: "h1",
    category: "hayvanlar",
    question: "Ev kedileri kuduz olur mu?",
    answer: "Eğer kedi hiç dışarı çıkmıyorsa risk çok düşüktür. Ancak eve giren bir yarasa veya açık pencereden temas riski nedeniyle ev kedilerinin de aşılanması yasal zorunluluktur.",
    source: "Veteriner Hekimler Birliği",
    sourceUrl: "#"
  },
  {
    id: "h2",
    category: "hayvanlar",
    question: "Yavru köpekler ne zaman aşılanmalı?",
    answer: "Yavru kedi ve köpekler 3 aylık (12 hafta) olduklarında ilk kuduz aşılarını olmalıdırlar. Bundan sonra her yıl tekrar edilmelidir.",
    source: "Tarım ve Orman Bakanlığı",
    sourceUrl: "#"
  },
  // Yasal Süreçler
  {
    id: "y1",
    category: "yasal",
    question: "Isıran hayvanı öldürmek suç mudur?",
    answer: "Evet. 5199 sayılı kanuna göre hayvanı öldürmek suçtur. Ayrıca hayvanın öldürülmesi, beynin incelenmesini zorlaştırabilir veya imkansız kılabilir. Hayvanın canlı olarak 10 gün gözlem altında tutulması esastır.",
    source: "5199 Sayılı Kanun",
    sourceUrl: "https://www.mevzuat.gov.tr/"
  },
  {
    id: "y2",
    category: "yasal",
    question: "Sahipsiz bir hayvan tarafından ısırıldım, nereye şikayet edebilirim?",
    answer: "Önce hastaneye başvurmalısınız. Hastane polise/jandarmaya 'Adli Vaka' bildirimi yapar. Hayvanın takibi için ise İl/İlçe Tarım Müdürlüğü'ne veya Belediyeye haber verilmelidir.",
    source: "İçişleri Bakanlığı",
    sourceUrl: "#"
  }
  // Ek sorular buraya eklenebilir
];

export const categories = [
  { id: "all", label: "Tüm Sorular" },
  { id: "genel", label: "Genel Bilgiler" },
  { id: "bulasma", label: "Bulaşma Riski" },
  { id: "asi-tedavi", label: "Aşı ve Tedavi" },
  { id: "hayvanlar", label: "Evcil Hayvanlar" },
  { id: "yasal", label: "Yasal Süreç" },
];