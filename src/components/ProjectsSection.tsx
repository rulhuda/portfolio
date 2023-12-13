import Image from "next/image";
import Link from "next/link";
import { RiGithubFill } from "react-icons/ri";
import { HiRocketLaunch } from "react-icons/hi2";

function ProjectsSection() {
  const projects = [
    {
      name: "Putra Mandiri Harmonika",
      image: "/projects/putra-mandiri-harmonika.PNG",
      description:
        "Pada project ini saya membuat sebuah web UMKM yang bidang usahanya adalah Pintu Harmonika. Web ini memiliki fitur login/register, add to cart, checkout, CTA (Call to Action) WhatsApp, dan sudah memiliki fitur PWA (Progressive Web Apps). Web ini dibangun menggunakan teknologi Wordpress dan plugin pendukung lainnya.",
      github: null,
      demo: "https://putramandiriharmonika.com",
    },
    {
      name: "Notes App",
      image: "/projects/notes-app.png",
      description:
        "Notes App adalah web app catatan yang dibangun menggunakan teknologi React JS yang terhubung dengan API.",
      github: "https://github.com/rulhuda/react-fundamental-notesapp",
      demo: "https://notesapp-rulhuda.vercel.app",
    },
    {
      name: "Rekompus",
      image: "/projects/rekompus.png",
      description:
        "Rekompus adalah project capstone(project akhir) untuk menyelesaikan Magang Studi Independen Bersertifikat(MSIB) Batch 2 di Dicoding. Project ini pada Front-Endnya dibuat menggunakan JS SPA dan library npm pendukung lainnya juga mengusung fitur Progressive Web Apps(PWA), untuk bagian Back-Endnya dibuat menggunakan Express JS, Type ORM, dan MySQL sebagai Database.",
      github: "https://github.com/rulhuda/rekompus",
      demo: null,
    },
    {
      name: "Games: Setak",
      image: "/projects/setak-games.png",
      description:
        "Setak merupakan games senam otak teka-teki yang terinspirasi dari game Hangman. Project ini pada Front-Endnya dibuat menggunakan React JS kemudian untuk Back-Endnya dibuat menggunakan Express JS dan Prisma ORM dengan database SQLite",
      github: "https://github.com/rulhuda/FE-Setak",
      demo: null,
    },
    {
      name: "Youtube Downloader",
      image: "/projects/yt-downloader.png",
      description:
        "Project ini terinspirasi dari sebuah situs download video atau musik yang berasal dari youtube, Situs tersebut yaitu y2mate. Project ini dibuat menggunakan React JS dan Chakra UI sebagai Framework CSSnya.",
      github: "https://github.com/rulhuda/rulhuda-ytdownloader",
      demo: "https://rulhuda-ytdownloader.vercel.app/",
    },
    {
      name: "SERESTA",
      image: "/projects/seresta.png",
      description:
        "Project ini dibuat menggunakan JavaScript yang dikombinasikan dengan library-library npm lainnya. Pada project ini juga mengusung fitur Progressive Web Apps (PWA) dan juga memanfaatkan indexedDB sebagai penyimpanan sementara untuk penambahan favorit restoran.",
      github: "https://github.com/rulhuda/restaurant-apps",
      demo: "https://seresta.rulhuda.com",
    },
    {
      name: "ENHA RECIPES",
      image: "/projects/enha-recipes.png",
      description:
        "Project ini menampilkan list resep-resep internasional. Project ini terbuat JavaScript yang dikombinasikan dengan library-library npm lainnya. Pada project ini juga memanfaatkan API untuk pengambilan data.",
      github: "https://github.com/rulhuda/enha-recipes",
      demo: "https://rulhuda.github.io/enha-recipes/dist/",
    },
    {
      name: "BOOKSHELF APPS",
      image: "/projects/bookshelf-app.png",
      description:
        "Project ini menggunakan JavaScript. Pada project ini pengguna dapat menambah, mengedit, menghapus, buku apa saja yang dibaca ataupun belum dibaca. Pada project ini penyimpanan yang digunakan ialah Web Storage, web storage yang dipakai ialah local storage.",
      github: "https://github.com/rulhuda/bookshelf-apps",
      demo: "https://rulhuda.github.io/bookshelf-apps/",
    },
  ];
  return (
    <section id='projects'>
      <h1 className='text-center font-bold text-4xl'>Projects</h1>
      <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-o rounded' />
      <div className='flex flex-col space-y-26 px-4'>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className='flex flex-col md:flex-row md:space-x-12 my-5'>
                <div className='md:w-1/2'>
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1000}
                    height={1000}
                    className='rounded-xl shadow-xl hover:opacity-70'
                  />
                </div>
                <div className='md:w-1/2'>
                  <h2 className='text-3xl font-bold mt-5 md:mt-0 mb-4'>
                    {project.name}
                  </h2>
                  <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                    {project.description}
                  </p>
                  <div className='flex flex-row flex-wrap justify-start space-x-4'>
                    {project.github && (
                      <Link
                        className='bg-teal-500 py-3 px-5 font-semibold text-lg text-center rounded-lg text-slate-100 hover:opacity-70'
                        href={project.github}
                        rel='noopener noreferrer'
                        target='_blank'
                        title={`Github of ${project.name}`}
                      >
                        <RiGithubFill size={25} />
                      </Link>
                    )}
                    {project.demo && (
                      <Link
                        className='bg-indigo-500 py-3 px-5 font-semibold text-lg text-center rounded-lg text-slate-100 hover:opacity-70'
                        href={project.demo}
                        rel='noopener noreferrer'
                        target='_blank'
                        title={`Demo of ${project.name}`}
                      >
                        <HiRocketLaunch size={25} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;
