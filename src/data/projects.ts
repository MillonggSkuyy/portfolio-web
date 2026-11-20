export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  highlights: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    title: "Web Lumbung Pangan",
    description: "Platform berbasis website yang dikembangkan untuk mempermudah pengguna memperoleh informasi dan mengenal berbagai produk pangan dengan fitur rekomendasi produk dan informasi ketahanan pangan.",
    image: "/projects/lumbung-pangan-web.png",
    tags: ["Front-End", "UI/UX Design", "HTML/CSS", "JavaScript", "Responsive Web"],
    highlights: [
      "Merancang antarmuka modern, responsif, informatif, dan mudah digunakan.",
      "Mengembangkan navigasi intuitif serta halaman rekomendasi produk pangan."
    ]
  },
  {
    title: "UI/UX Design App Lumbung Desa Indonesia",
    description: "Perancangan UI/UX aplikasi mobile menggunakan Figma yang berfokus pada digitalisasi layanan lumbung desa untuk memberikan pengalaman pengguna yang optimal.",
    image: "/projects/lumbung-desa-ui.png",
    tags: ["Figma", "UI/UX Design", "Mobile App Design", "Prototyping"],
    highlights: [
      "Mengembangkan konsep visual, pemilihan palet warna, dan tipografi aplikasi mobile.",
      "Menyusun tata letak (layout) dan merancang alur antarmuka halaman Welcome serta Login."
    ]
  },
  {
    title: "IoT Smart Safe Security System",
    description: "Sistem keamanan brankas pintar berbasis Internet of Things (IoT) yang terintegrasi dengan website monitoring dan notifikasi Telegram secara real-time.",
    image: "/projects/iot-brankas.jpg",
    tags: ["IoT", "ESP32-CAM", "Telegram Bot", "Web Dashboard", "Sensors"],
    highlights: [
      "Mengintegrasikan sensor deteksi aktivitas mencurigakan dan kamera ESP32-CAM untuk dokumentasi foto/video.",
      "Mengirimkan notifikasi peringatan otomatis secara real-time melalui Telegram.",
      "Membangun website dashboard untuk riwayat akses, dokumentasi aktivitas, pengelolaan isi brankas, serta pengaturan PIN."
    ]
  }
];