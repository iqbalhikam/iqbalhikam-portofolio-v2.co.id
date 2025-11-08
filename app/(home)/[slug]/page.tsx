import PageTransition from '@/components/animation/PageTransition';
import { ZoomImage } from '@/components/animation/ZoomImage';
import { Badge } from '@/components/ui/badge';
import { projectsData } from '@/lib/projectsData';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdArrowRoundBack } from 'react-icons/io';

type detailProjectsProps = {
  params: {
    slug: string;
  };
};

const getProjectDetails = (slug: string) => {
  return projectsData.find((project) => project.slug === slug);
};

const DetailProjects = ({ params }: detailProjectsProps) => {
  const { slug } = params;
  const project = getProjectDetails(slug);

  return (
    <PageTransition>
      <main className="flex-1 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-12">
        <div className="max-w-4xl mx-auto">
          <Link className="inline-flex items-center gap-2 text-primary mb-8 group" href="/">
            <span className="material-symbols-outlined transform group-hover:-translate-x-1 transition-transform">
              {' '}
              <IoMdArrowRoundBack />{' '}
            </span>
            <span className="text-sm font-bold">Back to Portfolio</span>
          </Link>

          <div className="space-y-10">
            <section>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{project?.title}</h1>

              <Badge variant={'outline'} className="rounded-full px-5">
                <p className="text-xs text-gray-400">{project?.app}</p>
              </Badge>
            </section>
            <div className="border-t border-gray-200/50 dark:border-gray-800/50"></div>
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">Description</h2>
              <p className="text-gray-600 dark:text-gray-400">{project?.description}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">project Details</h2>
              <div className="flex flex-col gap-4">
                {project?.projectImage.map((image) => (
                  <div className="w-full aspect-video rounded-xl overflow-hidden " key={image.id}>
                    <Image className="w-full h-full bg-center bg-no-repeat bg-cover aspect-square" src={image.url} alt={''} width={500} height={500} style={{ objectFit: 'cover' }}/>
                  </div>
                ))}
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

export default DetailProjects;
