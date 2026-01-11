const ContentSection = () => {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/5 to-purple-600/5"></div>

        <div className="container px-5 py-32 mx-auto flex flex-wrap relative">
          <div className="md:w-2/5 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold title-font mb-4 leading-tight">
              Kickstarter Actually Pinterest
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                Brunch Bitters
              </span>
              Occupy
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-full"></div>
          </div>

          <div className="md:w-3/5 md:pl-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <p className="leading-relaxed text-lg text-gray-700 mb-8">
                Taxidermy bushwick celiac master cleanse microdosing seitan.
                Fashion axe four dollar toast truffaut, direct trade kombucha
                brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki
                drinking vinegar tacos.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="group relative inline-flex items-center text-white bg-linear-to-r from-blue-600 to-purple-600 border-0 py-3 px-8 focus:outline-none hover:from-blue-700 hover:to-purple-700 rounded-xl text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  Get Started
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>

                <a
                  href="#"
                  className="group inline-flex items-center text-gray-700 bg-gray-100 border-0 py-3 px-8 hover:bg-gray-200 rounded-xl text-base font-medium transition-all duration-300"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </section>
    </div>
  );
};

export default ContentSection;
