export const siteConfig = {
  brandName: "SAS Residence",
  projectName: "SAS Residence Sindangpalay",
  name: "SAS Residence Sindangpalay",
  shortName: "SAS Residence",
  tagline: "Sindangpalay · Karangpawitan · Garut",
  description:
    "Media informasi interaktif SAS Residence Sindangpalay dengan Virtual Tour 360° dan narasi Text-to-Speech untuk mengenal lingkungan, fasilitas, dan hunian secara virtual.",
  developer: "PT SAS Amanah Sentosa",
  association: "APERSI",
  status: "Perumahan subsidi",
  location: "Sindangpalay, Karangpawitan, Kabupaten Garut, Jawa Barat",
  marketingAddress:
    "Jl. Raya Karangpawitan / Kp. Nyalindung, Desa Sindangpalay, Kecamatan Karangpawitan, Kabupaten Garut, Jawa Barat",
  phone: "+62 812-2228-2545",
  phoneDisplay: "0812-2228-2545",
  whatsapp: "6281222282545",
  email: "sasgroup.ptsasamanahsentosa@gmail.com",
  officialWebsite: "https://www.sasresidence.com",
  instagram: "https://instagram.com/sasresidence",
  projectId: "GRT0220122023T002",
  research: {
    title:
      "Pengembangan Virtual Tour sebagai Media Informasi Interaktif dengan Integrasi Text-to-Speech pada Perumahan SAS Karangpawitan Garut",
    researcher: "Julia Herlina",
    institution: "Institut Teknologi Garut",
    year: "2026",
  },
  researchSnapshotDate: "30 Juli 2026",
  tourUrl: "",
  mapEmbedUrl: "",
} as const;

export const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Virtual Tour", href: "/virtual-tour" },
  { label: "Tipe Rumah", href: "/tipe-rumah" },
  { label: "Fasilitas", href: "/fasilitas" },
  { label: "Lokasi", href: "/lokasi" },
  { label: "Tentang", href: "/tentang" },
] as const;

export const waLink = (text = "Halo, saya ingin bertanya tentang SAS Residence Sindangpalay.") =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;

export const highlights = [
  { value: "34/60", label: "Tipe hunian subsidi", hint: "2 kamar tidur · 1 kamar mandi" },
  { value: "360°", label: "Virtual Tour interaktif", hint: "Panorama + hotspot navigasi" },
  { value: "5%", label: "Bunga KPR FLPP", hint: "Fixed selama masa kredit" },
  { value: "20 th", label: "Tenor maksimal", hint: "Uang muka mulai 1%" },
] as const;
