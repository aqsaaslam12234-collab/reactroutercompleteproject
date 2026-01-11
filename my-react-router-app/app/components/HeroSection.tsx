export function HeroSection() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-12">
        <div className="lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-gray-900 leading-tight">
            Before they sold out
            <br className="hidden lg:inline-block" />
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              readymade gluten
            </span>
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-gray-600 max-w-xl">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="inline-flex items-center text-white bg-linear-to-r from-indigo-500 to-purple-600 border-0 py-3 px-8 focus:outline-none hover:from-indigo-600 hover:to-purple-700 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
              Get Started
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                ></path>
              </svg>
            </button>
            <button className="inline-flex items-center text-gray-700 bg-white border-2 border-gray-300 py-3 px-8 focus:outline-none hover:border-indigo-600 hover:text-indigo-600 rounded-lg text-lg font-medium transition-all duration-200 hover:shadow-md">
              Learn More
            </button>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="relative">
            <img
              className="object-cover object-center rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
              alt="hero"
              src="https://images.unsplash.com/photo-1737401775070-1d84c2340c0d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  Premium Quality
                </p>
                <p className="text-xs text-gray-600">Trusted by thousands</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
