import { ZoomImage } from '@/components/animation/ZoomImage';
import { certificatesData } from '@/lib/certificatesData';
import { Certificate } from '@/lib/types';
import Link from 'next/link';
import { IoMdArrowRoundBack } from 'react-icons/io';
import PageTransition from '@/components/animation/PageTransition';


type CertificatePageProps = {
  params: {
    slug: string;
  };
};

function getCertificateDetails(slug: string): Certificate | undefined {
  return certificatesData.find((cert) => cert.slug === slug);
}

const DetailCertificatesPage = ({ params }: CertificatePageProps) => {
  const { slug } = params;
  const certificate = getCertificateDetails(slug);
  // console.log('certificate img: ', certificate?.certificatesImage[0].url);

  return (
    <PageTransition>
      <main className="flex-1 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-12">
        <div className="max-w-4xl mx-auto">
          <Link className="inline-flex items-center gap-2 text-primary mb-8 group" href="/aboutMe">
            <span className="material-symbols-outlined transform group-hover:-translate-x-1 transition-transform">
              {' '}
              <IoMdArrowRoundBack />{' '}
            </span>
            <span className="text-sm font-bold">Back to Portfolio</span>
          </Link>
          {/* <div className="mb-12 grid lg:grid-cols-2 sm:grid-cols-1 gap-4">{certificate && certificate?.certificatesImage.map((image) => <ZoomImage key={image.id} imageUrl={image.url} />)}</div> */}

          <div className="space-y-10">
            <section>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{certificate?.title}</h1>
              {/* <p className="text-lg font-bold text-white mb-1">from {certificate?.from}</p>
              <p className="text-sm text-gray-400">
                Complited : {certificate?.complited}
                <br />
                Expired : {certificate?.expired}
              </p> */}
            </section>
            <div className="border-t border-gray-200/50 dark:border-gray-800/50"></div>
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Description</h2>
              <p className="text-gray-600 dark:text-gray-400">{certificate?.description}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Certificate Details</h2>
              <div className="flex flex-col gap-4">
                {/* {certificate?.certificatesImage.map((image) => (
                  <div className="w-full aspect-video rounded-xl overflow-hidden " key={image.id}>
                    <div className="w-full h-full bg-center bg-no-repeat bg-cover aspect-square" style={{ backgroundImage: `url("${image.url}");` }}></div>
                  </div>
                ))} */}
              </div>
            </section>
            <div className="flex justify-center pt-8">
              <Link
                className="inline-flex items-center justify-center rounded-lg h-12 px-8 bg-primary text-white text-sm font-bold tracking-wide shadow-lg hover:bg-primary/90 transition-all focus:outline-none focus:ring-4 focus:ring-primary/30"
                href="/aboutMe">
                Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default DetailCertificatesPage;
