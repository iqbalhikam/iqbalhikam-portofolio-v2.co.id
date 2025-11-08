// Definisikan tipe Project (mirip dengan tipe Certificate Anda)
export interface Project {
  id: number;
  slug: string;
  title: string;
  app: string; // Saya gunakan 'app' sebagai 'kategori'
  complited: string; // Saya isi '-' karena tidak ada data tanggal
  expired: string; // Saya isi '-'
  serialNumber: string; // Saya isi '-'
  description: string;
  projectImage: {
    id: number;
    url: string;
  }[];
}

// Data proyek Anda
export const projectsData: Project[] = [
  {
    id: 1,
    slug: 'task-flow',
    title: 'Task Flow',
    app: 'Web App', // Kategori
    complited: '-', // Status bisa juga dimasukkan di sini, misal: 'In Progress'
    expired: '-',
    serialNumber: '-',
    description: 'Projek ini sedang dalam progres development',
    projectImage: [
      {
        id: 1,
        url: 'https://raw.githubusercontent.com/iqbalhikam/task-flow/main/Screenshot%202025-11-09%20001041.png',
      },
    ],
  },
  {
    id: 2,
    slug: 'app-desktop-inventory',
    title: 'App Desktop Inventory',
    app: 'Desktop App', // Kategori
    complited: '-',
    expired: '-',
    serialNumber: '-',
    description: 'Solusi Manajemen Inventaris Modern untuk Bisnis Anda',
    projectImage: [
      {
        id: 1,
        url: 'https://raw.githubusercontent.com/iqbalhikam/INVENTORYKU/main/Register.png',
      },
    ],
  },
  {
    id: 3,
    slug: 'web-kasir',
    title: 'Web Kasir',
    app: 'Web App', // Kategori
    complited: '-',
    expired: '-',
    serialNumber: '-',
    description: 'Projek ini di buat untuk memenuhi tugas UAS',
    projectImage: [
      {
        id: 1,
        url: 'assets/projects/webApp/Kasir.png',
      },
    ],
  },
  {
    id: 4,
    slug: 'design-ui-ux-dokter-pintar',
    title: 'DESIGN UI/UX Dokter Pintar',
    app: 'UI/UX Design', // Kategori
    complited: '-',
    expired: '-',
    serialNumber: '-',
    description: 'Projek ini di buat untuk memenuhi tugas akhir',
    projectImage: [
      {
        id: 1,
        url: 'assets/projects/design/dokterPintar.png',
      },
    ],
  },
  {
    id: 5,
    slug: 'boot-wa-back-end-app',
    title: 'Boot Wa (Back End APP)',
    app: 'Back-End App', // Kategori
    complited: '-',
    expired: '-',
    serialNumber: '-',
    description: 'Projek ini di bangun menggunakan nodejs',
    projectImage: [
      {
        id: 1,
        url: 'assets/projects/webApp/bootWa.png',
      },
    ],
  },
];
