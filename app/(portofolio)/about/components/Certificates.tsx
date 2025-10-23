import React from 'react';
import { certificatesData } from '@/lib/certificatesData';
import MeCard from '@/components/about/MeCard';
import { Certificate } from '@/lib/types';


interface CertificateProps{
    certificates: Certificate[]
}

const Certificates = ( { certificates } : CertificateProps) => {
    return (
      <>
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left"> Certificate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {certificates.map((certificate, index) => (
              // <MeCard key={index} imageUrl={certificate.imageUrl} title={certificate.title} desc={certificate.dateIssued} slug={certificate.slug} />
            ))} */}
          </div>
        </section>
      </>
    );
}

export default Certificates;
