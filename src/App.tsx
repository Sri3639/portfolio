function App() {
  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold">
          Sri
        </h1>

        <p className="text-2xl mt-4 text-gray-300">
          Full Stack Java Developer
        </p>

        <a href="#projects">
          <button className="mt-8 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition">
            View Projects
          </button>
        </a>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen bg-gray-900 flex flex-col justify-center items-center"
      >
        <h2 className="text-5xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10">

          <div className="bg-black p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold">
              Expense Tracker
            </h3>

            <p className="mt-4 text-gray-400">
              Full Stack Expense Tracker using Spring Boot, React, MySQL.
            </p>
          </div>

          <div className="bg-black p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold">
              Portfolio Website
            </h3>

            <p className="mt-4 text-gray-400">
              Personal portfolio built using React, TypeScript and Tailwind CSS.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}

export default App