import Image from "next/image"

function AboutSection() {
  const skills = [
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
      skill: "React JS",
    },
    {
      skill: "Next JS",
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
      skill: "Figma",
    },
    {
      skill: "Git",
    },
    {
      skill: "GitHub",
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
      skill: "PostgreSQL",
    },
    {
      skill: "MySQL",
    },
  ]

  return (
    <section id="about">
      <div className="my-12 pb-12 px-4 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">About Me</h1>
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-o rounded" />
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:space-x-2 md:space-y-0">
          <div className="md:w-1/2">
            <h1 className="font-bold text-2xl py-2">Get to know me!</h1>
            <p>
              Hi, my name is Huda and I am a{" "}
              <span className="font-bold">{"learn by doing,"}</span>
              <span className="font-bold">{" adaptable,"}</span>
              <span className="font-bold">{" self-motivated"}</span>{" "}
              Web Developer based in Jombang, East Java, ID.
            </p>
            <br />
            <p>
              I graduated from Hasyim Asy{"'"}ari University, Jombang in 2023 with Cumlaude in Computer Engineering and have been working in the field ever since
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy, From reading, writing, coding, I am always seeking new experience and love to keep my self engaged and learing new things.
            </p>
            <br />
            <p>
              I believe that you should {" "}
              <span className="font-bold text-teal-500">
                Never Stop Growing
              </span> {" "}
              and that{"'"}s what I Strive to do, I hav a passion for technology and a desire to always push the limits of what is possible. I am excited to see where my acreer takes me and always open to new oppurtunities. 🙂
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="font-bold text-2xl py-2">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return <p key={idx} className="bg-gray-200 font-semibold dark:text-stone-900 px-4 py-2 mt-2 mr-2 rounded-md">{item.skill}</p>
              })}
            </div>
            <div className="flex justify-center my-5">
            <Image className="rounded-full" src={"/programming.png"} alt="programming" width={350} height={350} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection