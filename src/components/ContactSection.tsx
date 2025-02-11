import Link from "next/link";
import { HiMail } from "react-icons/hi";
import { RiGithubFill, RiGitlabFill, RiLinkedinBoxFill } from "react-icons/ri";
import { AiFillFilePdf } from "react-icons/ai";

function ContactSection() {
  const contacts = [
    {
      name: "Linkedin",
      icon: <RiLinkedinBoxFill size={40} fillRule='nonzero' />,
      link: "https://linkedin.com/in/nurulhuda-jombang",
      download: false,
    },
    {
      name: "Github",
      icon: <RiGithubFill size={40} fillRule='nonzero' />,
      link: "https://github.com/rulhuda",
      download: false,
    },
    {
      name: "Gitlab",
      icon: <RiGitlabFill size={40} fillRule='nonzero' />,
      link: "https://gitlab.com/rulhuda",
      download: false,
    },
    {
      name: "Mail",
      icon: <HiMail size={40} fillRule='nonzero' />,
      link: "mailto:nurulhuda.unhasy@gmail.com",
      download: false,
    },
    {
      name: "Resume",
      icon: <AiFillFilePdf size={40} fillRule='nonzero' />,
      link: "/resume/Nurul-Huda_CV.pdf",
      download: false,
    },
  ];
  return (
    <section id='contact'>
      <div className='w-full my-12'>
        <h1 className='text-center font-bold text-4xl'>Contacts</h1>
        <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-o rounded' />
        <div className='flex flex-row flex-wrap justify-center space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16'>
          {contacts.map((contact, idx) => {
            return (
              <div key={idx}>
                <Link
                  className='py-3 px-5 font-semibold text-lg text-center rounded-lg text-stone-900 dark:text-slate-100 hover:opacity-70'
                  href={contact.link}
                  rel='noopener noreferrer'
                  target='_blank'
                  title={`Link of ${contact.name}`}
                  download={contact.download}
                >
                  {contact?.icon}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
