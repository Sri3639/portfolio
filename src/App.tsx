function App() {
  return (
    <div className="bg-black text-white scroll-smooth">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-7xl font-bold">
          Sri
        </h1>

        <p className="text-3xl text-gray-300 mt-6">
          Full Stack Java Developer
        </p>

        <p className="max-w-3xl mt-6 text-gray-400 text-xl">
          Experienced Full Stack Developer skilled in Java, Spring Boot,
          React, AWS, Microservices and Cloud Technologies.
        </p>

        <div className="flex gap-6 mt-10">

          <a href="#projects">
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
              View My Work
            </button>
          </a>

          <a href="#contact">
            <button className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition">
              Contact Me
            </button>
          </a>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="py-32 px-10 bg-gray-950">

        <h2 className="text-5xl font-bold text-center">
          About Me
        </h2>

        <p className="max-w-4xl mx-auto mt-10 text-gray-400 text-xl text-center leading-10">
          Full Stack Java Developer with experience in building scalable
          enterprise applications using Java, Spring Boot, ReactJS,
          Microservices, AWS and SQL databases.
        </p>

      </section>

      {/* SKILLS SECTION */}
      <section className="py-32 px-10 bg-black">

        <h2 className="text-5xl font-bold text-center">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          {[
            "Java",
            "Spring Boot",
            "ReactJS",
            "TypeScript",
            "AWS",
            "Microservices",
            "MySQL",
            "GitHub"
          ].map((skill) => (

            <div
              key={skill}
              className="bg-gray-900 p-6 rounded-2xl text-center text-xl font-semibold hover:scale-105 transition"
            >
              {skill}
            </div>

          ))}

        </div>

      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-32 px-10 bg-gray-950">

        <h2 className="text-5xl font-bold text-center">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto mt-16 space-y-10">

          <div className="bg-black p-8 rounded-2xl">
            <h3 className="text-3xl font-bold">
              Senior UI Developer
            </h3>

            <p className="text-gray-400 mt-2">
              Broadridge Financial Solutions
            </p>

            <p className="mt-4 text-gray-300">
              Worked on enterprise document management platforms using
              ReactJS, TypeScript, Azure and Microservices.
            </p>
          </div>

        </div>

      </section>

      {/* EDUCATION SECTION */}
      <section className="py-32 px-10 bg-black">

        <h2 className="text-5xl font-bold text-center">
          Education
        </h2>

        <div className="max-w-4xl mx-auto mt-16">

          <div className="bg-gray-900 p-8 rounded-2xl">

            <h3 className="text-3xl font-bold">
              Bachelor Degree
            </h3>

            <p className="text-gray-400 mt-2">
              Computer Science
            </p>

          </div>

        </div>

      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="py-32 px-10 bg-gray-950"
      >

        <h2 className="text-5xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Expense Tracker */}
          <a
            href="https://github.com/Sri3639/expense-tracker"
            target="_blank"
          >

            <div className="bg-black p-8 rounded-2xl hover:scale-105 transition duration-300 cursor-pointer">

              <h3 className="text-3xl font-bold">
                Expense Tracker
              </h3>

              <p className="mt-6 text-gray-400 text-xl">
                Full Stack Expense Tracker using Spring Boot,
                React and MySQL.
              </p>

              <button className="mt-8 bg-white text-black px-5 py-3 rounded-xl font-semibold">
                View Project
              </button>

            </div>

          </a>

          {/* Portfolio */}
          <a
            href="https://github.com/Sri3639/portfolio"
            target="_blank"
          >

            <div className="bg-black p-8 rounded-2xl hover:scale-105 transition duration-300 cursor-pointer">

              <h3 className="text-3xl font-bold">
                Portfolio Website
              </h3>

              <p className="mt-6 text-gray-400 text-xl">
                Personal portfolio built using React,
                TypeScript and Tailwind CSS.
              </p>

              <button className="mt-8 bg-white text-black px-5 py-3 rounded-xl font-semibold">
                View Project
              </button>

            </div>

          </a>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-32 px-10 bg-black text-center"
      >

        <h2 className="text-5xl font-bold">
          Contact
        </h2>

        <p className="mt-8 text-xl text-gray-400">
          sri@gmail.com
        </p>

        <div className="flex justify-center gap-6 mt-10">

          <a
            href="https://github.com/Sri3639"
            target="_blank"
          >
            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
              GitHub
            </button>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
          >
            <button className="border border-white px-6 py-3 rounded-xl font-semibold">
              LinkedIn
            </button>
          </a>

        </div>

      </section>

    </div>
  )
}

export default App