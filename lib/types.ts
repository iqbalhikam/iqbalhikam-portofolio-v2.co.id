export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  tech: string[];
};

export type CertificateImage = {
  id: number;
  url: string;
};

export interface Certificate {
  id: string;
  created_at: string;
  title: string;
  issuedBy: string;
  dateIssued: string; // Tipe 'date' akan dibaca sebagai string
  imageUrl: string;
  url: string | null; // Bisa jadi null (ingat kita centang 'Is Nullable')
}

// export type Certificate = {
//   id: number;
//   slug: string;
//   title: string;
//   from: string;
//   complited: string;
//   expired: string;
//   serialNumber: string;
//   description: string;
//   certificatesImage: CertificateImage[];
// };
