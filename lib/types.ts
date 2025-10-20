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

export type Certificate = {
  id: number;
  slug: string;
  title: string;
  from: string;
  complited: string;
  expired: string;
  serialNumber: string;
  description: string;
  certificatesImage: CertificateImage[];
};
