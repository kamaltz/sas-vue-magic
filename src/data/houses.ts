export interface HouseType {
  id: string;
  name: string;
  category: string;
  buildingArea: string;
  landArea: string;
  bedrooms: number;
  bathrooms: number;
  electricity: string;
  certificate: string;
  description: string;
  layout: { label: string; needsValidation?: boolean }[];
  specs: { label: string; value: string; needsValidation?: boolean }[];
  price: { from: number; display: string; note: string };
  financing: { label: string; value: string; indicative?: boolean }[];
  financingNote: string;
}

export const houses: HouseType[] = [
  {
    id: "tipe-34-60",
    name: "Tipe 34/60",
    category: "Rumah Subsidi",
    buildingArea: "34 m²",
    landArea: "60 m²",
    bedrooms: 2,
    bathrooms: 1,
    electricity: "900 watt",
    certificate: "SHGB",
    description:
      "Hunian subsidi satu lantai dengan luas bangunan 34 m² di atas tanah 60 m². Tipe ini memiliki 2 kamar tidur dan 1 kamar mandi dengan daya listrik 900 watt dan sertifikat SHGB.",
    layout: [
      { label: "2 kamar tidur" },
      { label: "1 kamar mandi" },
      { label: "Ruang keluarga" },
      { label: "Dapur" },
      { label: "Carport / area parkir", needsValidation: true },
      { label: "Taman", needsValidation: true },
    ],
    specs: [
      { label: "Rangka atap", value: "Baja ringan", needsValidation: true },
      { label: "Penutup atap", value: "Metal roof", needsValidation: true },
      { label: "Plafon", value: "GRC", needsValidation: true },
      { label: "Dinding", value: "Bata merah, plester, aci, dan cat", needsValidation: true },
      { label: "Lantai", value: "Keramik 40×40 cm", needsValidation: true },
      { label: "Lantai kamar mandi", value: "Keramik 15×15 cm", needsValidation: true },
      {
        label: "Pondasi",
        value: "Batu kali dan sloof beton bertulang",
        needsValidation: true,
      },
    ],
    price: {
      from: 162000000,
      display: "Rp162.000.000*",
      note: "*Harga, ketersediaan unit, promo, dan ketentuan pembiayaan dapat berubah. Konfirmasikan informasi terbaru kepada pihak pemasaran SAS Residence.",
    },
    financing: [
      { label: "Skema", value: "KPR bersubsidi FLPP" },
      { label: "Suku bunga FLPP", value: "5% fixed selama masa kredit" },
      { label: "Tenor", value: "Hingga 20 tahun" },
      { label: "Uang muka", value: "Mulai dari 1%" },
      {
        label: "Angsuran indikatif",
        value: "± Rp869.412 / bulan (contoh listing BTN)",
        indicative: true,
      },
    ],
    financingNote:
      "Informasi FLPP di atas merupakan ketentuan program yang berlaku dan tunduk pada aturan program serta persetujuan bank. Angsuran indikatif, uang muka aktual, dan promo pengembang bersifat dinamis — konfirmasikan ke pihak pemasaran / bank penyalur.",
  },
];
