export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  tech: string[];
};

export interface CertificateImage {
  id: string;
  created_at: string;
  imageUrl: string;
  caption: string | null;
  certificate_id: string;
}

export type Certificate = {
  id : string;  
  createdAt: Date;
  slug: string;
  title: string;
  issuedBy: string;
  dateissued: Date;
  expierd: Date;
  thumbnailUrl: string;
  description: string;
  sn: string;
};
