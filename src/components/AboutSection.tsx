import Image from "next/image";

function AboutSection() {
  const skills = [
    {
      skill: "Web Development",
    },
    {
      skill: "Figma",
    },
    {
      skill: "HTML",
    },
    {
      skill: "CSS",
    },
    {
      skill: "JavaScript",
    },
    {
      skill: "PHP",
    },
    {
      skill: "React JS",
    },
    {
      skill: "Next JS",
    },
    {
      skill: "Vue JS",
    },
    {
      skill: "Nuxt JS",
    },
    {
      skill: "Tailwind CSS",
    },
    {
      skill: "Material UI",
    },
    {
      skill: "Daisy UI",
    },
    {
      skill: "Bootstrap",
    },
    {
      skill: "Git",
    },
    {
      skill: "GitHub",
    },
    {
      skill: "GitLab",
    },
    {
      skill: "Laravel",
    },
    {
      skill: "Codeigniter",
    },
    {
      skill: "Node JS",
    },
    {
      skill: "Express JS",
    },
    {
      skill: "Prisma ORM",
    },
    {
      skill: "Sequelize ORM",
    },
    {
      skill: "PostgreSQL",
    },
    {
      skill: "MySQL",
    },
    {
      skill: "SQLite",
    },
  ];

  return (
    <section id='about'>
      <div className='my-12 pb-12 px-4 md:pt-16 md:pb-48'>
        <h1 className='text-center font-bold text-4xl'>About Me</h1>
        <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded' />
        <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:space-x-2 md:space-y-0'>
          <div className='md:w-1/2'>
            <h1 className='font-bold text-2xl py-2'>
              Ingin tahu mengenai saya?
            </h1>
            <p>
              Hai, nama saya Huda. Saya seorang Programmer yang mudah
              beradaptasi, mempelajari hal baru terkait teknologi, dan
              memotivasi diri sendiri yang bertempat tinggal di Jombang, Jawa
              Timur, Indonesia.
            </p>
            <br />

            <p>
              Lulusan S1 Teknik Informatika dengan pengalaman lebih dari satu
              tahun sebagai Programmer di salah satu Rumah Sakit, berkontribusi
              mengembangkan dan memelihara sistem IT untuk meningkatkan
              efisiensi operasional dan sesuai standar kebutuhan administratif.
            </p>
            <br />

            <p>
              Memiliki pengalaman magang dan studi independen di Dicoding,
              dengan fokus pada pengembangan software dan implementasi project
              nyata, termasuk pembuatan sistem berbasis website. Menguasai
              teknologi terkini, serta memiliki kemampuan problem-solving yang
              kuat. Saya siap berkontribusi dengan solusi IT inovatif untuk
              mendukung pertumbuhan dan efisiensi perusahaan.
            </p>
            <br />

            {/* <p>
              Saya lulus dari Universitas Hasyim Asy{"'"}ari, Jombang pada tahun
              2023 dengan predikat Cumlaude jurusan S1 Teknik Informatika.
            </p>
            <br />

            <p>
              Saya memiliki berbagai macam hobi dan minat yang membuat saya
              sibuk, mulai dari membaca, menulis, coding, saya selalu mencari
              pengalaman dan pengetahuan baru untuk membuat diri saya tetap
              terlibat dan mempelajari hal-hal baru.
            </p>
            <br /> */}

            <p>
              Saya percaya bahwa kita tidak boleh berhenti bertumbuh dan itulah
              yang saya perjuangkan, saya antusias terhadap perkembangan
              teknologi dan keinginan untuk selalu mendorong batas dari apa yang
              mungkin. Saya senang melihat ke mana karir saya membawa saya dan
              selalu terbuka untuk peluang baru.
            </p>
          </div>
          <div className='md:w-1/2'>
            <h1 className='font-bold text-2xl py-2'>My Skills</h1>
            <div className='flex flex-wrap flex-row justify-center md:justify-start'>
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className='bg-gray-200 font-semibold dark:text-stone-900 px-4 py-2 mt-2 mr-2 rounded-md'
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            {/* <div className='flex justify-center my-5'>
              <Image
                className='rounded-full'
                src={"/programming.png"}
                alt='programming'
                width={350}
                height={350}
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
