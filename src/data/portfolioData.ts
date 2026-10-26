export interface Project {
  id: string;
  title: string;
  category: 'Pulsa & Kuota' | 'Listrik PLN' | 'E-Wallet & Transfer' | 'Tagihan Bulanan';
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  image: string;
  metrics: string;
  deliverables: string[];
  tools: string[];
  year: string;
  client: string;
  nominalPilihan: string[];
}

export interface SkillItem {
  name: string;
  level: number;
  description: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  technologies: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface ProfileData {
  name: string;
  nickname: string;
  title: string;
  bio: string;
  aboutText: string;
  email: string;
  phone: string;
  location: string;
  experienceYears: string;
  completedProjects: string;
  clientSatisfaction: string;
  socials: {
    behance: string;
    dribbble: string;
    instagram: string;
    linkedin: string;
    github: string;
  };
}

export const defaultProfile: ProfileData = {
  name: "Aan Maryani",
  nickname: "Aan",
  title: "Agen Pulsa & Pembayaran Listrik PPOB",
  bio: "Pusat isi pulsa & kuota internet all operator, token listrik PLN, pembayaran tagihan bulanan (BPJS, PDAM, cicilan), top-up saldo e-wallet (DANA, OVO, GoPay), dan transfer antar bank cepat, aman, dan harga bersahabat.",
  aboutText: "Berpengalaman melayani ribuan transaksi sejak tahun 2021, gerai layanan digital Aan Maryani berkomitmen memberikan kemudahan pembayaran digital bagi masyarakat dan pelanggan setia di mana pun berada. Transaksi otomatis hitungan detik, konfirmasi struk resmi langsung dikirim via WhatsApp, dan siap melayani setiap hari dengan sepenuh hati.",
  email: "aanmaryani053@gmail.com",
  phone: "+62 823-2294-2034",
  location: "Salem, Brebes & Layanan Online Se-Indonesia",
  experienceYears: "4+ Tahun",
  completedProjects: "18.500+",
  clientSatisfaction: "99.8%",
  socials: {
    behance: "https://wa.me/6282322942034",
    dribbble: "https://instagram.com/aanmaryani",
    instagram: "https://instagram.com/aanmaryani",
    linkedin: "https://facebook.com/aanmaryani",
    github: "https://t.me/aanmaryani"
  }
};

export const skillsList: SkillItem[] = [
  { name: "Kecepatan Kirim Token PLN & Pulsa", level: 99, description: "Server otomatis multi-gateway, nomor token dan pulsa masuk dalam 5–30 detik" },
  { name: "Ketersediaan Stok Semua Operator", level: 98, description: "Telkomsel, Indosat, XL Axiata, Tri, Smartfren, dan Axis selalu siap 24 jam" },
  { name: "Top-Up E-Wallet & Transfer Bank Instan", level: 97, description: "Isi saldo DANA, OVO, GoPay, ShopeePay, LinkAja & kirim uang ke semua bank nasional" },
  { name: "Pembayaran Tagihan Bulanan (PDAM, BPJS)", level: 95, description: "Cek tagihan gratis sebelum bayar, struk PDF resmi langsung dikirimkan ke WhatsApp" },
  { name: "Layanan Pelanggan & Respons Admin WhatsApp", level: 99, description: "Admin ramah dan cepat tanggap jika terjadi gangguan jaringan atau butuh pengecekan" }
];

export const serviceCards: ServiceCard[] = [
  {
    title: "Pulsa & Paket Data Kuota",
    description: "Pengisian pulsa reguler, paket data internet harian/bulanan, paket telepon & SMS untuk semua operator di Indonesia.",
    iconName: "Smartphone",
    features: ["Semua Operator (Telkomsel, Indosat, XL, Tri)", "Pilihan Masa Aktif Panjang", "Harga Hemat & Masuk Cepat"]
  },
  {
    title: "Token & Tagihan Listrik PLN",
    description: "Beli token listrik prabayar 24 jam non-stop dan pembayaran tagihan listrik bulanan pascabayar dengan struk sah resmi PLN.",
    iconName: "Zap",
    features: ["Token Mulai Rp 20.000 s/d Rp 1.000.000", "20 Digit Kode Token Langsung Dikirim", "Gratis Cek Tagihan Listrik Bulanan"]
  },
  {
    title: "Tagihan PDAM, BPJS & Cicilan",
    description: "Bayar tagihan air PDAM berbagai daerah, iuran BPJS Kesehatan, Telkom IndiHome, dan cicilan multifinance tanpa repot antre.",
    iconName: "Receipt",
    features: ["PDAM Seluruh Kota & Kabupaten", "Iuran BPJS Kesehatan Keluarga", "Bukti Pembayaran Sah Format PDF/Cetak"]
  },
  {
    title: "Top-Up E-Wallet & Transfer Bank",
    description: "Isi saldo dompet digital favorit dan kirim uang tunai ke seluruh rekening bank di Indonesia tanpa perlu punya rekening bank sendiri.",
    iconName: "Wallet",
    features: ["DANA, OVO, GoPay, ShopeePay, LinkAja", "Transfer ke BCA, BRI, BNI, Mandiri, dll", "Biaya Admin Terjangkau & Bukti Struk"]
  }
];

export const projectsList: Project[] = [
  {
    id: "layanan-pulsa",
    title: "Pulsa & Paket Kuota Internet All Operator",
    category: "Pulsa & Kuota",
    tagline: "Telkomsel, Indosat Ooredoo, XL Axiata, Tri, Smartfren, Axis",
    description: "Tersedia pulsa reguler mulai dari nominal Rp 5.000 hingga Rp 1.000.000, paket internet unlimited, kuota besar tanpa pembagian waktu, serta paket telepon dan SMS hemat. Transaksi diproses otomatis oleh server terintegrasi dalam hitungan detik.",
    challenge: "Pelanggan sering kehabisan pulsa atau kuota di saat darurat atau tengah malam saat toko fisik di sekitar sudah tutup.",
    solution: "Gerai Aan Maryani menyediakan layanan transaksi 24 jam siap respon via WhatsApp dengan proses server otomatis dan metode pembayaran QRIS yang sangat praktis.",
    image: "/src/assets/images/ppob_pulsa_payment_1792897982278.jpg",
    metrics: "Mulai Rp 5.000 · Masuk dalam 5–15 Detik",
    deliverables: ["Pulsa Reguler All Operator", "Paket Data Internet 24 Jam", "Masa Aktif Kartu", "Paket Nelpon & SMS"],
    tools: ["Server Multi-Payment", "QRIS Nasional", "WhatsApp Otomatis", "Struk Digital"],
    year: "Layanan Aktif",
    client: "Pelanggan Umum & Pelajar",
    nominalPilihan: ["Rp 5.000", "Rp 10.000", "Rp 20.000", "Rp 25.000", "Rp 50.000", "Rp 100.000"]
  },
  {
    id: "layanan-pln",
    title: "Token Listrik PLN & Bayar Tagihan Listrik",
    category: "Listrik PLN",
    tagline: "Token prabayar 24 jam & bayar tagihan listrik bulanan resmi PLN",
    description: "Meteran listrik Anda bunyi saat malam hari? Cukup pesan di Aan Maryani, sebutkan nomor meter / ID pelanggan PLN, dan 20 digit nomor token listrik akan langsung dikirimkan ke WhatsApp Anda dalam sekejap. Juga melayani pembayaran tagihan pascabayar PLN resmi.",
    challenge: "Antrean panjang di loket pembayaran konvensional dan meteran listrik yang mendadak mati di malam hari tanpa peringatan.",
    solution: "Sistem cek ID pelanggan otomatis untuk memastikan nama pemilik meteran sesuai sebelum token dibeli, meminimalisir kesalahan input dan menghindari gagal isi.",
    image: "/src/assets/images/ppob_pln_electricity_1792897984233.jpg",
    metrics: "Struk 20 Digit Sah · Bebas Antre & Cek Gratis",
    deliverables: ["Token Listrik Prabayar (Semua Daya)", "Tagihan Listrik Pascabayar", "Cek Tagihan Listrik Gratis", "Struk Cetak / PDF Resmi"],
    tools: ["Gateway Resmi PLN", "Sistem Validasi ID Pelanggan", "WhatsApp Business", "Struk Termal & PDF"],
    year: "Layanan Aktif",
    client: "Rumah Tangga & Pelaku Usaha",
    nominalPilihan: ["Rp 20.000", "Rp 50.000", "Rp 100.000", "Rp 200.000", "Rp 500.000", "Rp 1.000.000"]
  },
  {
    id: "layanan-ewallet",
    title: "Top-Up E-Wallet & Transfer Uang Antar Bank",
    category: "E-Wallet & Transfer",
    tagline: "Isi saldo DANA, GoPay, OVO, ShopeePay & transfer uang ke seluruh bank",
    description: "Kemudahan mengisi saldo dompet digital untuk belanja online, bayar transportasi, atau keperluan harian. Selain itu, Anda juga dapat mengirim uang tunai ke seluruh rekening bank nasional (BCA, BRI, Mandiri, BNI, BSI, dll) tanpa perlu repot pergi ke mesin ATM.",
    challenge: "Jarak ke mesin ATM yang jauh, biaya transfer antar bank yang mahal, atau kesulitan top-up saldo e-wallet saat darurat.",
    solution: "Menyediakan layanan transfer instan real-time dengan biaya admin hemat bersahabat, disertai bukti transfer sah berstempel digital yang langsung dikirim ke WhatsApp Anda.",
    image: "/src/assets/images/ppob_ewallet_transfer_1792897984067.jpg",
    metrics: "Biaya Admin Hemat · Real-Time 24 Jam",
    deliverables: ["Top-Up Saldo DANA & ShopeePay", "Top-Up GoPay & OVO", "Transfer Uang ke Semua Bank", "Bukti Transfer Resmi"],
    tools: ["BI-FAST & Realtime Switch", "QRIS Multi-Payment", "WhatsApp Notifikasi", "Struk Transfer Resmi"],
    year: "Layanan Aktif",
    client: "Pengguna E-Commerce & Pelaku Usaha",
    nominalPilihan: ["Rp 25.000", "Rp 50.000", "Rp 100.000", "Rp 200.000", "Rp 500.000", "Rp 1.000.000+"]
  }
];

export const experienceTimeline: ExperienceItem[] = [
  {
    period: "2024 — Sekarang",
    role: "Agen Utama PPOB & Pembayaran Digital Terverifikasi",
    company: "Gerai Aan Maryani Digital",
    location: "Salem, Brebes & Layanan Online Se-Indonesia",
    summary: "Mengelola lebih dari 18.000+ transaksi sukses tahunan, melayani transaksi pulsa all operator, token listrik PLN, top-up e-wallet dan pembayaran tagihan bulanan dengan sistem server ganda berkecepatan tinggi.",
    technologies: ["Server Multi-Payment", "QRIS Statis & Dinamis", "Validasi ID Pelanggan", "WhatsApp Auto-Struk"]
  },
  {
    period: "2022 — 2024",
    role: "Mitra Loket Pembayaran Tagihan Lingkungan & Pulsa",
    company: "Jaringan Kemitraan Digital Terpadu",
    location: "Salem, Brebes, Jawa Tengah",
    summary: "Melayani ratusan warga dan pelanggan daring untuk kebutuhan pembayaran tagihan PDAM, BPJS Kesehatan, paket kuota internet murah, dan pengiriman uang antar bank.",
    technologies: ["Aplikasi PPOB Terpadu", "Printer Struk Termal", "Mobile Banking", "Rekap Transaksi Otomatis"]
  },
  {
    period: "2021 — 2022",
    role: "Penyedia Pulsa & Token Listrik Komunitas",
    company: "Konter Pulsa Aan Maryani",
    location: "Salem, Brebes, Jawa Tengah",
    summary: "Memulai dedikasi melayani pengisian pulsa darurat dan token listrik PLN bagi keluarga, tetangga sekitar, dan rekan kerja dengan pelayanan ramah dan tepat waktu.",
    technologies: ["Distributor Pulsa Nasional", "SMS Gateway", "WhatsApp Pembukuan", "Buku Kas Digital"]
  }
];

export const testimonialsList: Testimonial[] = [
  {
    quote: "Alhamdulillah jam 11 malam meteran listrik rumah saya bunyi menjerit, langsung chat Bu Aan via WhatsApp. Tidak sampai 2 menit nomor token listriknya langsung dikirim dan lampunya bisa langsung diisi. Sangat penyelamat!",
    author: "Ibu Siti Rahmawati",
    role: "Pelanggan Token Listrik Tetap",
    company: "Warga Komplek Perumahan",
    avatar: "SR",
    rating: 5
  },
  {
    quote: "Sudah langganan isi kuota Telkomsel dan top-up saldo DANA di Mbak Aan. Harganya jauh lebih hemat dari minimarket, responnya ramah banget, dan tiap transaksi selalu dikasih struk digital resmi.",
    author: "Dimas Aditya Pratama",
    role: "Mahasiswa & Content Creator",
    company: "Pelanggan Paket Data & E-Wallet",
    avatar: "DA",
    rating: 5
  },
  {
    quote: "Tiap awal bulan bayar tagihan listrik toko, iuran BPJS sekeluarga, dan air PDAM selalu lewat konter Bu Aan. Enak tidak perlu antre panjang, bukti bayarnya rapi bisa disimpan di HP untuk laporan pembukuan toko.",
    author: "Pak Joko Wahyudi",
    role: "Pemilik Toko Kelontong Berkah",
    company: "Pelanggan Pembayaran Tagihan Bulanan",
    avatar: "JW",
    rating: 5
  }
];
