export type CountryData = {
    code: string;
    name: string;
    riskLevel: "high" | "medium" | "low" | "free";
    emergency: {
        police: string;
        ambulance: string;
    };
    vectors: string[]; // Taşıyıcı hayvanlar
    advice: string;
};

export const travelData: CountryData[] = [
    {
        code: "TH",
        name: "Tayland",
        riskLevel: "high",
        emergency: { police: "191", ambulance: "1669" },
        vectors: ["Sokak Köpekleri", "Maymunlar"],
        advice: "Özellikle tapınak bölgelerinde maymun ısırıkları yaygındır. Gitmeden aşı önerilir."
    },
    {
        code: "ID",
        name: "Endonezya (Bali)",
        riskLevel: "high",
        emergency: { police: "110", ambulance: "118" },
        vectors: ["Sokak Köpekleri", "Maymunlar"],
        advice: "Bali'de kuduz endemiktir. Isırılma durumunda derhal aşılanma şarttır."
    },
    {
        code: "TR",
        name: "Türkiye",
        riskLevel: "medium",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Köpekler", "Tilki", "Çakal"],
        advice: "Kırsal bölgelerde ve sahipsiz hayvan yoğunluğunun olduğu yerlerde dikkatli olunmalı."
    },
    {
        code: "IN",
        name: "Hindistan",
        riskLevel: "high",
        emergency: { police: "100", ambulance: "102" },
        vectors: ["Sokak Köpekleri"],
        advice: "Dünyadaki kuduz ölümlerinin %36'sı buradadır. Kesinlikle temas öncesi aşı önerilir."
    },
    {
        code: "DE",
        name: "Almanya",
        riskLevel: "free",
        emergency: { police: "110", ambulance: "112" },
        vectors: ["Yarasalar (Nadir)"],
        advice: "Karasal kuduzdan arındırılmış ülkedir. Sadece yarasalarla temastan kaçının."
    },
    {
        code: "US",
        name: "ABD",
        riskLevel: "low",
        emergency: { police: "911", ambulance: "911" },
        vectors: ["Rakun", "Kokarca", "Yarasa"],
        advice: "Köpek kaynaklı kuduz yoktur. Vahşi yaşam (kamp vb.) alanlarında dikkatli olun."
    },
    {
        code: "AF",
        name: "Afganistan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "AD",
        name: "Andorra",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "AO",
        name: "Angola",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "AG",
        name: "Antigua ve Barbuda",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "AR",
        name: "Arjantin",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "AL",
        name: "Arnavutluk",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "AU",
        name: "Avustralya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "AT",
        name: "Avusturya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "AZ",
        name: "Azerbaycan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "BS",
        name: "Bahamalar",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "BH",
        name: "Bahreyn",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "BD",
        name: "Bangladeş",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "BB",
        name: "Barbados",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "BY",
        name: "Belarus",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "BZ",
        name: "Belize",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "BE",
        name: "Belçika",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "BJ",
        name: "Benin",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "AE",
        name: "Birleşik Arap Emirlikleri",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "GB",
        name: "Birleşik Krallık",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "BO",
        name: "Bolivya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "BA",
        name: "Bosna Hersek",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "BW",
        name: "Botsvana",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "BR",
        name: "Brezilya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "BN",
        name: "Brunei",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "BG",
        name: "Bulgaristan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "BF",
        name: "Burkina Faso",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "BI",
        name: "Burundi",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "BT",
        name: "Butan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "CV",
        name: "Cabo Verde",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "DZ",
        name: "Cezayir",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "DJ",
        name: "Cibuti",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "DK",
        name: "Danimarka",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "DO",
        name: "Dominik Cumhuriyeti",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "DM",
        name: "Dominika",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "TL",
        name: "Doğu Timor",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "EC",
        name: "Ekvador",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "GQ",
        name: "Ekvator Ginesi",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "SV",
        name: "El Salvador",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "ER",
        name: "Eritre",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "AM",
        name: "Ermenistan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "EE",
        name: "Estonya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "SZ",
        name: "Esvatini",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "ET",
        name: "Etiyopya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "MA",
        name: "Fas",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "FJ",
        name: "Fiji",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "CI",
        name: "Fildişi Sahili",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "PH",
        name: "Filipinler",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "FI",
        name: "Finlandiya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "FR",
        name: "Fransa",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "GA",
        name: "Gabon",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "GM",
        name: "Gambiya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "GH",
        name: "Gana",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "GN",
        name: "Gine",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "GW",
        name: "Gine-Bissau",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "GD",
        name: "Grenada",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "GT",
        name: "Guatemala",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "GY",
        name: "Guyana",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "ZA",
        name: "Güney Afrika",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "KR",
        name: "Güney Kore",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "SS",
        name: "Güney Sudan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "GE",
        name: "Gürcistan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "HT",
        name: "Haiti",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "NL",
        name: "Hollanda",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "HN",
        name: "Honduras",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "HR",
        name: "Hırvatistan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "IQ",
        name: "Irak",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "JM",
        name: "Jamaika",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "JP",
        name: "Japonya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "KH",
        name: "Kamboçya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "CM",
        name: "Kamerun",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "CA",
        name: "Kanada",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "ME",
        name: "Karadağ",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "QA",
        name: "Katar",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "KZ",
        name: "Kazakistan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "KE",
        name: "Kenya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "KI",
        name: "Kiribati",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "CO",
        name: "Kolombiya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "KM",
        name: "Komorlar",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "CG",
        name: "Kongo Cumhuriyeti",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "CD",
        name: "Kongo Demokratik Cumhuriyeti",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "CR",
        name: "Kosta Rika",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "KW",
        name: "Kuveyt",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "KP",
        name: "Kuzey Kore",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "MK",
        name: "Kuzey Makedonya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "CU",
        name: "Küba",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "CY",
        name: "Kıbrıs",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "KG",
        name: "Kırgızistan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "LA",
        name: "Laos",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "LS",
        name: "Lesotho",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "LV",
        name: "Letonya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "LR",
        name: "Liberya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "LY",
        name: "Libya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "LI",
        name: "Lihtenştayn",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "LT",
        name: "Litvanya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "LB",
        name: "Lübnan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "LU",
        name: "Lüksemburg",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "HU",
        name: "Macaristan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "MG",
        name: "Madagaskar",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "MW",
        name: "Malavi",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "MV",
        name: "Maldivler",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "MY",
        name: "Malezya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "ML",
        name: "Mali",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "MT",
        name: "Malta",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "MH",
        name: "Marshall Adaları",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "MU",
        name: "Mauritius",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "MX",
        name: "Meksika",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "FM",
        name: "Mikronezya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "MD",
        name: "Moldova",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "MC",
        name: "Monako",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "MR",
        name: "Moritanya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "MZ",
        name: "Mozambik",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "MN",
        name: "Moğolistan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "MM",
        name: "Myanmar",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "EG",
        name: "Mısır",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "NA",
        name: "Namibya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "NR",
        name: "Nauru",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "NP",
        name: "Nepal",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "NE",
        name: "Nijer",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "NG",
        name: "Nijerya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "NI",
        name: "Nikaragua",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "NO",
        name: "Norveç",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "CF",
        name: "Orta Afrika Cumhuriyeti",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "PK",
        name: "Pakistan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "PW",
        name: "Palau",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "PA",
        name: "Panama",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "PG",
        name: "Papua Yeni Gine",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "PY",
        name: "Paraguay",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "PE",
        name: "Peru",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "PL",
        name: "Polonya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "PT",
        name: "Portekiz",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "RO",
        name: "Romanya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "RW",
        name: "Ruanda",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "RU",
        name: "Rusya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "KN",
        name: "Saint Kitts ve Nevis",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "LC",
        name: "Saint Lucia",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "VC",
        name: "Saint Vincent ve Grenadinler",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "WS",
        name: "Samoa",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "SM",
        name: "San Marino",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "ST",
        name: "Sao Tome ve Principe",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "SN",
        name: "Senegal",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "SC",
        name: "Seyşeller",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "SL",
        name: "Sierra Leone",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "SG",
        name: "Singapur",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "SK",
        name: "Slovakya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "SI",
        name: "Slovenya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "SB",
        name: "Solomon Adaları",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "SO",
        name: "Somali",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "LK",
        name: "Sri Lanka",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "SD",
        name: "Sudan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "SR",
        name: "Surinam",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "SY",
        name: "Suriye",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "SA",
        name: "Suudi Arabistan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "RS",
        name: "Sırbistan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "TJ",
        name: "Tacikistan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "TZ",
        name: "Tanzanya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "TG",
        name: "Togo",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "TO",
        name: "Tonga",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "TT",
        name: "Trinidad ve Tobago",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "TN",
        name: "Tunus",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "TV",
        name: "Tuvalu",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "TM",
        name: "Türkmenistan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "UG",
        name: "Uganda",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "UA",
        name: "Ukrayna",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "OM",
        name: "Umman",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "UY",
        name: "Uruguay",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "VU",
        name: "Vanuatu",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "VE",
        name: "Venezuela",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "VN",
        name: "Vietnam",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "YE",
        name: "Yemen",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "NZ",
        name: "Yeni Zelanda",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "GR",
        name: "Yunanistan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "ZM",
        name: "Zambiya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "ZW",
        name: "Zimbabve",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "TD",
        name: "Çad",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "CZ",
        name: "Çekya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "CN",
        name: "Çin",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "UZ",
        name: "Özbekistan",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "JO",
        name: "Ürdün",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "IR",
        name: "İran",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "IE",
        name: "İrlanda",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "ES",
        name: "İspanya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "IL",
        name: "İsrail",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "SE",
        name: "İsveç",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "CH",
        name: "İsviçre",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "IT",
        name: "İtalya",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "IS",
        name: "İzlanda",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
    {
        code: "CL",
        name: "Şili",
        riskLevel: "low",
        emergency: { police: "112", ambulance: "112" },
        vectors: ["Bilinmiyor"],
        advice: "Seyahat öncesi güncel sağlık verilerini kontrol ediniz."
    },
];
