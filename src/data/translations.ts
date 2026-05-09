export const translations = {
  id: {
    personal: {
      description:
        "Fullstack Developer dari Yogyakarta. Membangun sistem produksi menggunakan Go, React, Next.js, dan Laravel — dari desain API hingga deployment.",

      summary:
        "Saya membangun sistem yang benar-benar berjalan di production. Go untuk backend, React untuk frontend, Docker untuk deployment — dan cukup paham arsitektur untuk desain database-nya juga. Dua tahun terakhir: platform e-commerce, sistem rekrutmen, dashboard penjualan, dan POS yang dipakai bisnis nyata setiap hari. Saat ini bekerja di dua perusahaan sekaligus sambil mengelola kontrak freelance jangka panjang. Kalau butuh developer yang beneran deliver, mari ngobrol.",
    },
    nav: {
      home: "Beranda",
      blog: "Blog",
      language: "Bahasa",
    },
    hero: {
      greeting: "Hai, saya",
    },
    about: {
      title: "Tentang",
    },
    work: {
      title: "Pengalaman Kerja",
    },
    education: {
      title: "Pendidikan",
    },
    skills: {
      title: "Keahlian",
    },
    projects: {
      title: "Proyek Saya",
      subtitle: "Lihat karya terbaru saya",
      description:
        "Saya telah mengerjakan berbagai proyek, mulai dari website sederhana hingga aplikasi web yang kompleks. Berikut beberapa favorit saya.",
      loadMore: "Tampilkan Lebih Banyak",
      showLess: "Tampilkan Lebih Sedikit",
      moreProjects: "proyek lagi",
    },
    contact: {
      title: "Hubungi Saya",
      subtitle: "Mari terhubung",
      description: "Ingin mengobrol? Kirim saja dm saya",
      linkText: "dengan pertanyaan langsung di Whatsapp",
      afterLinkText:
        " dan saya akan membalas jika memungkinkan. Saya akan mengabaikan semua penawaran.",
    },
    projectDescriptions: {
      flut: "Platform perekrutan kerja berbasis video di mana kandidat melamar dengan video pendek, mempercepat proses hiring bagi perusahaan teknologi.",
      roconal:
        "Platform e-commerce modern dengan fitur pelacakan inventaris real-time, manajemen pesanan, dan sistem pembayaran yang aman.",
      adibayuGroup:
        "Website profil perusahaan untuk Adibayu Group dengan desain modern yang menampilkan layanan dan portofolio perusahaan.",
      mosque:
        "Sistem manajemen masjid terintegrasi dengan fitur donasi online, jadwal sholat, dan manajemen kegiatan masjid.",
      azhar:
        "Platform pembelajaran digital untuk materi pendidikan dengan sistem langganan, kemajuan pelacakan, dan dukungan multi-bahasa.",
      adibayuPms:
        "Sistem manajemen proyek perusahaan dengan fitur pelacakan tugas, manajemen tim, dan pelaporan kemajuan waktu nyata.",
      pos: "Sistem Point of Sale untuk distribusi material dengan manajemen inventaris, analitik penjualan, dan pencetakan struk thermal.",
      salesDashboard:
        "Dasbor analitik penjualan interaktif dengan visualisasi data real-time, laporan yang dapat dikustomisasi, dan metrik kinerja.",
      portfolio:
        "Portofolio pengembang profesional dengan desain modern, dukungan multi-bahasa, dan animasi yang halus.",
      aksamala:
        "Sistem verifikasi sertifikat online untuk Aksamala dengan pemindaian QR code dan validasi database real-time.",
    },
  },
  en: {
    personal: {
      description:
        "Fullstack Developer from Yogyakarta. I build production systems using Go, React, Next.js, and Laravel — from API design to deployment.",
      summary:
        "I build systems that actually run in production. Go on the backend, React on the front, Docker for deployment — and enough context to design the database too. Two years in: e-commerce platforms, recruitment systems, sales dashboards, and a POS that a real business runs daily. Currently working across two companies while maintaining a long-term freelance contract. If you need someone who ships, let's talk.",
    },
    nav: {
      home: "Home",
      blog: "Blog",
      language: "Language",
    },
    hero: {
      greeting: "Hi, I'm",
    },
    about: {
      title: "About",
    },
    work: {
      title: "Work Experience",
    },
    education: {
      title: "Education",
    },
    skills: {
      title: "Skills",
    },
    projects: {
      title: "My Projects",
      subtitle: "Check out my latest work",
      description:
        "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
      loadMore: "Load More",
      showLess: "Show Less",
      moreProjects: "more projects",
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Let's connect",
      description: "Want to chat? Just shoot me a dm",
      linkText: "with a direct question on Whatsapp",
      afterLinkText:
        " and I'll respond whenever I can. I will ignore all soliciting.",
    },
    projectDescriptions: {
      flut: "A video-first job hiring platform where candidates apply with short videos, streamlining the hiring process for tech companies.",
      roconal:
        "Modern e-commerce platform with real-time inventory tracking, order management, and secure payment gateway integration.",
      adibayuGroup:
        "Professional company profile website for Adibayu Group featuring modern design and comprehensive service showcase.",
      mosque:
        "Integrated mosque management system with online donation features, prayer times, and community event management.",
      azhar:
        "Digital learning platform for educational materials with subscription system, progress tracking, and multi-language support.",
      adibayuPms:
        "Corporate project management system with task tracking, team collaboration, and real-time progress reporting.",
      pos: "Point of Sale system for material distribution with inventory management, sales analytics, and thermal receipt printing.",
      salesDashboard:
        "Interactive sales analytics dashboard with real-time data visualization, customizable reports, and performance metrics.",
      portfolio:
        "Professional developer portfolio with modern design, multi-language support, and smooth animations.",
      aksamala:
        "Online certificate verification system for Aksamala with QR code scanning and real-time database validation.",
    },
  },
};

export type Language = "id" | "en";
export type TranslationKey = keyof typeof translations.id;
