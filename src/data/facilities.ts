export interface Facility {
  id: string;
  name: string;
  description: string;
  icon: string;
  needsValidation?: boolean;
}

export const facilities: Facility[] = [
  {
    id: "gerbang-akses",
    name: "Gerbang dan Akses Masuk",
    description:
      "Gerbang dan jalur akses masuk kawasan menjadi salah satu titik informasi yang disajikan dalam Virtual Tour.",
    icon: "DoorOpen",
  },
  {
    id: "jalan-lingkungan",
    name: "Jalan Lingkungan",
    description:
      "Berdasarkan data penelitian, jalan lingkungan di kawasan ini telah dibeton dan disajikan sebagai bagian dari pengenalan kawasan.",
    icon: "Route",
  },
  {
    id: "drainase",
    name: "Drainase",
    description:
      "Saluran drainase kawasan termasuk informasi infrastruktur lingkungan yang ditampilkan dalam media Virtual Tour.",
    icon: "Waves",
  },
  {
    id: "jaringan-listrik",
    name: "Jaringan Listrik",
    description:
      "Jaringan listrik kawasan menjadi salah satu informasi utilitas yang disampaikan kepada calon konsumen.",
    icon: "Zap",
  },
  {
    id: "jaringan-air-bersih",
    name: "Jaringan / Sumber Air Bersih",
    description:
      "Ketersediaan jaringan atau sumber air bersih disajikan sebagai bagian dari informasi utilitas kawasan.",
    icon: "Droplets",
  },
  {
    id: "ruang-terbuka",
    name: "Ruang Terbuka",
    description:
      "Area ruang terbuka di dalam kawasan ditampilkan dalam Virtual Tour untuk memberi gambaran lingkungan hunian.",
    icon: "Trees",
  },
  {
    id: "keamanan-lingkungan",
    name: "Keamanan Lingkungan",
    description:
      "Keamanan lingkungan menjadi salah satu informasi kawasan dalam Virtual Tour. Rincian sistem dan jam operasional perlu dikonfirmasi kepada pihak pemasaran.",
    icon: "ShieldCheck",
    needsValidation: true,
  },
  {
    id: "rumah-contoh",
    name: "Rumah Contoh",
    description:
      "Rumah contoh digunakan sebagai acuan tata ruang dan tampilan hunian, dan menjadi objek utama dalam Virtual Tour.",
    icon: "Home",
  },
  {
    id: "fasilitas-umum-sekitar",
    name: "Fasilitas Umum Sekitar",
    description:
      "Terdapat akses menuju fasilitas pendidikan, kesehatan, dan tempat ibadah di sekitar kawasan. Jarak dan waktu tempuh perlu diukur / dikonfirmasi.",
    icon: "Building2",
    needsValidation: true,
  },
];

export const nearbyPoints = [
  {
    label: "Fasilitas Kesehatan",
    value: "Akses menuju Puskesmas Karangpawitan dan layanan kesehatan di sekitar kecamatan.",
    icon: "Stethoscope",
  },
  {
    label: "Fasilitas Pendidikan",
    value: "Terdapat akses menuju sekolah di sekitar kawasan Karangpawitan.",
    icon: "GraduationCap",
  },
  {
    label: "Perdagangan & Pasar",
    value: "Akses menuju pasar dan area perdagangan di sekitar Karangpawitan.",
    icon: "Store",
  },
  {
    label: "Tempat Ibadah",
    value: "Tersedia tempat ibadah di sekitar kawasan.",
    icon: "Landmark",
  },
  {
    label: "Transportasi Umum",
    value: "Kawasan terhubung dengan jalur transportasi umum di sekitar Karangpawitan.",
    icon: "Bus",
  },
] as const;
