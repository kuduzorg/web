export interface CityRabiesData {
    id: string;
    name: string;
    riskLevel: "high" | "medium" | "low";
    confirmedCases: number;
    riskContactCount: number;
    hospitals: number;
    vets: number;
    lastCase: string;
}

// Risk seviyesi belirleme kriterleri:
// 0 Vaka: Düşük (Low)
// 1-9 Vaka: Orta (Medium)
// 10+ Vaka: Yüksek (High)

export const rabiesData: Record<string, CityRabiesData> = {
    "TR01": { id: "TR01", name: "Adana", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR02": { id: "TR02", name: "Adıyaman", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR03": { id: "TR03", name: "Afyonkarahisar", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR04": { id: "TR04", name: "Ağrı", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR05": { id: "TR05", name: "Amasya", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR06": { id: "TR06", name: "Ankara", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR07": { id: "TR07", name: "Antalya", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR08": { id: "TR08", name: "Artvin", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR09": { id: "TR09", name: "Aydın", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR10": { id: "TR10", name: "Balıkesir", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR11": { id: "TR11", name: "Bilecik", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR12": { id: "TR12", name: "Bingöl", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR13": { id: "TR13", name: "Bitlis", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR14": { id: "TR14", name: "Bolu", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR15": { id: "TR15", name: "Burdur", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR16": { id: "TR16", name: "Bursa", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR17": { id: "TR17", name: "Çanakkale", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR18": { id: "TR18", name: "Çankırı", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR19": { id: "TR19", name: "Çorum", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR20": { id: "TR20", name: "Denizli", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR21": { id: "TR21", name: "Diyarbakır", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR22": { id: "TR22", name: "Edirne", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR23": { id: "TR23", name: "Elazığ", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR24": { id: "TR24", name: "Erzincan", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR25": { id: "TR25", name: "Erzurum", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR26": { id: "TR26", name: "Eskişehir", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR27": { id: "TR27", name: "Gaziantep", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR28": { id: "TR28", name: "Giresun", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR29": { id: "TR29", name: "Gümüşhane", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR30": { id: "TR30", name: "Hakkari", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR31": { id: "TR31", name: "Hatay", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR32": { id: "TR32", name: "Isparta", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR33": { id: "TR33", name: "Mersin", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR34": { id: "TR34", name: "İstanbul", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR35": { id: "TR35", name: "İzmir", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR36": { id: "TR36", name: "Kars", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR37": { id: "TR37", name: "Kastamonu", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR38": { id: "TR38", name: "Kayseri", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR39": { id: "TR39", name: "Kırklareli", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR40": { id: "TR40", name: "Kırşehir", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR41": { id: "TR41", name: "Kocaeli", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR42": { id: "TR42", name: "Konya", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR43": { id: "TR43", name: "Kütahya", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR44": { id: "TR44", name: "Malatya", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR45": { id: "TR45", name: "Manisa", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR46": { id: "TR46", name: "Kahramanmaraş", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR47": { id: "TR47", name: "Mardin", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR48": { id: "TR48", name: "Muğla", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR49": { id: "TR49", name: "Muş", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR50": { id: "TR50", name: "Nevşehir", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR51": { id: "TR51", name: "Niğde", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR52": { id: "TR52", name: "Ordu", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR53": { id: "TR53", name: "Rize", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR54": { id: "TR54", name: "Sakarya", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR55": { id: "TR55", name: "Samsun", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR56": { id: "TR56", name: "Siirt", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR57": { id: "TR57", name: "Sinop", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR58": { id: "TR58", name: "Sivas", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR59": { id: "TR59", name: "Tekirdağ", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR60": { id: "TR60", name: "Tokat", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR61": { id: "TR61", name: "Trabzon", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR62": { id: "TR62", name: "Tunceli", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR63": { id: "TR63", name: "Şanlıurfa", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR64": { id: "TR64", name: "Uşak", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR65": { id: "TR65", name: "Van", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR66": { id: "TR66", name: "Yozgat", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR67": { id: "TR67", name: "Zonguldak", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR68": { id: "TR68", name: "Aksaray", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR69": { id: "TR69", name: "Bayburt", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR70": { id: "TR70", name: "Karaman", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR71": { id: "TR71", name: "Kırıkkale", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR72": { id: "TR72", name: "Batman", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR73": { id: "TR73", name: "Şırnak", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR74": { id: "TR74", name: "Bartın", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR75": { id: "TR75", name: "Ardahan", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR76": { id: "TR76", name: "Iğdır", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR77": { id: "TR77", name: "Yalova", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR78": { id: "TR78", name: "Karabük", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR79": { id: "TR79", name: "Kilis", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR80": { id: "TR80", name: "Osmaniye", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" },
    "TR81": { id: "TR81", name: "Düzce", riskLevel: "low", confirmedCases: 0, riskContactCount: 0, hospitals: 0, vets: 0, lastCase: "-" }
};
