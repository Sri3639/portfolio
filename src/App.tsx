function App() {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black">

        <h1 className="text-7xl md:text-8xl font-bold">
          Sri
        </h1>

        <p className="text-3xl text-gray-300 mt-6">
          Full Stack Java Developer
        </p>

        <p className="text-gray-500 mt-6 max-w-3xl text-xl leading-10">
          Passionate Full Stack Developer with experience in Java,
          Spring Boot, React, AWS and Microservices.
          Building scalable enterprise applications and modern web experiences.
        </p>

        <div className="flex gap-6 mt-10">

          <a href="#projects">
            <button className="bg-white text-black px-8 py-4 rounded-2xl text-xl font-semibold hover:scale-105 transition">
              View My Work
            </button>
          </a>

          <a href="#contact">
            <button className="border border-white px-8 py-4 rounded-2xl text-xl hover:bg-white hover:text-black transition">
              Contact Me
            </button>
          </a>

        </div>

      </section>





      {/* EXPERIENCE SECTION */}
      <section className="py-32 px-10 bg-[#020617]">

        <h2 className="text-6xl font-bold text-center mb-20">
          Professional Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* CapitalOne */}
          <div className="bg-black p-10 rounded-3xl border border-cyan-500">

            <h3 className="text-4xl font-bold text-cyan-400">
              CapitalOne
            </h3>

            <p className="text-2xl mt-4">
              Full Stack Java Developer
            </p>

            <p className="text-gray-400 mt-2">
              2025 - 2026
            </p>

            <ul className="mt-8 text-gray-300 space-y-4 text-xl list-disc pl-5">

              <li>
                Developed scalable UI applications using ReactJS and TypeScript.
              </li>

              <li>
                Implemented Micro Frontend architecture and optimized application performance.
              </li>

              <li>
                Integrated Azure cloud services and CI/CD pipelines.
              </li>

              <li>
                Built responsive enterprise document management platforms.
              </li>

            </ul>

          </div>





          {/* Discover */}
          <div className="bg-black p-10 rounded-3xl border border-cyan-500">

            <h3 className="text-4xl font-bold text-cyan-400">
              Discover
            </h3>

            <p className="text-2xl mt-4">
              Java Developer
            </p>

            <p className="text-gray-400 mt-2">
              2024 - 2025
            </p>

            <ul className="mt-8 text-gray-300 space-y-4 text-xl list-disc pl-5">

              <li>
                Built e-commerce product comparison features using React and Redux.
              </li>

              <li>
                Improved customer experience with responsive UI design.
              </li>

              <li>
                Integrated APIs and optimized frontend performance.
              </li>

            </ul>

          </div>

        </div>

      </section>





      {/* EDUCATION SECTION */}
      <section className="py-32 px-10 bg-black">

        <h2 className="text-6xl font-bold text-center mb-20">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Masters */}
          <div className="bg-[#111827] p-10 rounded-3xl border border-cyan-500">

            <h3 className="text-4xl font-bold text-cyan-400">
              Master of Science
            </h3>

            <p className="text-2xl mt-4">
              Computer Science
            </p>

            <p className="text-xl text-gray-400 mt-3">
              Saint Leo University
            </p>

            <p className="text-gray-500 mt-2">
              2022 - 2024
            </p>

          </div>





          {/* Bachelors */}
          <div className="bg-[#111827] p-10 rounded-3xl border border-cyan-500">

            <h3 className="text-4xl font-bold text-cyan-400">
              Bachelor of Technology
            </h3>

            <p className="text-2xl mt-4">
              Computer Science
            </p>

            <p className="text-xl text-gray-400 mt-3">
               CMR Engineering College
            </p>

            <p className="text-gray-500 mt-2">
              2016 - 2020
            </p>

          </div>

        </div>

      </section>





      {/* SKILLS SECTION */}
      <section className="py-32 px-10 bg-[#020617]">

        <h2 className="text-6xl font-bold text-center mb-20">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-2xl">

          <span className="bg-black px-6 py-4 rounded-2xl">
            Java 8/11/17/21
          </span>

          <span className="bg-black px-6 py-4 rounded-2xl">
            Spring Boot
          </span>

          <span className="bg-black px-6 py-4 rounded-2xl">
            ReactJS
          </span>

          <span className="bg-black px-6 py-4 rounded-2xl">
            TypeScript
          </span>

          <span className="bg-black px-6 py-4 rounded-2xl">
            AWS
          </span>

          <span className="bg-black px-6 py-4 rounded-2xl">
            Microservices
          </span>

          <span className="bg-black px-6 py-4 rounded-2xl">
            MySQL
          </span>

          <span className="bg-black px-6 py-4 rounded-2xl">
            Docker
          </span>

          <span className="bg-black px-6 py-4 rounded-2xl">
            Kubernetes
          </span>

          <span className="bg-black px-6 py-4 rounded-2xl">
            CI/CD
          </span>

          <span className="bg-black px-6 py-4 rounded-2xl">
            Cucumber
          </span>

          <span className="bg-black px-6 py-4 rounded-2xl">
            Gradle
          </span>

          <span className="bg-black px-6 py-4 rounded-2xl">
            DataDog
          </span>

          <span className="bg-black px-6 py-4 rounded-2xl">
            Kafka
          </span>

        </div>

      </section>





      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="py-32 px-10 bg-black"
      >

        <h2 className="text-6xl font-bold text-center mb-20">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Expense Tracker */}
          <div className="bg-[#111827] p-12 rounded-3xl shadow-2xl hover:scale-105 transition duration-300">

            <h3 className="text-5xl font-bold">
              Expense Tracker
            </h3>

            <p className="mt-10 text-gray-400 text-2xl leading-10">
              Full Stack Expense Tracker using Spring Boot,
              React and MySQL.
            </p>

            <a
              href="https://github.com/Sri3639/expense-tracker"
              target="_blank"
            >
              <button className="mt-12 bg-white text-black px-8 py-5 rounded-2xl text-2xl font-semibold hover:scale-105 transition">
                View Project
              </button>
            </a>

          </div>





          {/* Portfolio Website */}
          <div className="bg-[#111827] p-12 rounded-3xl shadow-2xl hover:scale-105 transition duration-300">

            <h3 className="text-5xl font-bold">
              Portfolio Website
            </h3>

            <p className="mt-10 text-gray-400 text-2xl leading-10">
              Personal portfolio built using React,
              TypeScript and Tailwind CSS.
            </p>

            <a
              href="https://github.com/Sri3639/portfolio"
              target="_blank"
            >
              <button className="mt-12 bg-white text-black px-8 py-5 rounded-2xl text-2xl font-semibold hover:scale-105 transition">
                View Project
              </button>
            </a>

          </div>

        </div>

      </section>





      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-32 px-10 bg-[#020617]"
      >

        <h2 className="text-6xl font-bold text-center mb-20">
          Contact
        </h2>

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-2xl text-gray-400 leading-10">
            Interested in working together or discussing opportunities?
            Feel free to connect with me.
          </p>

          <div className="mt-12 flex flex-col gap-6 text-2xl">

            <p>
              📧 sriteja.fsd@gmail.com
            </p>

            <p>
              💼 LinkedIn:
              https://linkedin.com/in/your-linkedin
            </p>

            <p>
              💻 GitHub:
              https://github.com/Sri3639
            </p>

          </div>

        </div>

      </section>

    </div>
  )
}

export default App