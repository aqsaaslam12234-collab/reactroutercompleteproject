export function FeaturesSection() {
  return (
    <section className="body-font py-15 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container px-5 mx-auto relative z-10">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl md:text-5xl font-bold title-font mb-6 text-gray-900">
            Our Impact in Numbers
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-600">
            Join thousands of users who trust our platform. Our growing
            community and robust infrastructure speak for themselves.
          </p>
        </div>

        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="stat-card bg-white px-6 py-10 rounded-2xl shadow-lg hover:shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="stat-icon relative">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="text-indigo-600 w-16 h-16 mb-4 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
              </div>
              <h2 className="stat-number title-font font-bold text-5xl mb-2">
                2.7K
              </h2>
              <p className="leading-relaxed text-gray-600 font-medium uppercase tracking-wide text-sm">
                Downloads
              </p>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="stat-card bg-white px-6 py-10 rounded-2xl shadow-lg hover:shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="stat-icon relative">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="text-purple-600 w-16 h-16 mb-4 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
              </div>
              <h2 className="stat-number title-font font-bold text-5xl mb-2">
                1.3K
              </h2>
              <p className="leading-relaxed text-gray-600 font-medium uppercase tracking-wide text-sm">
                Active Users
              </p>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="stat-card bg-white px-6 py-10 rounded-2xl shadow-lg hover:shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="stat-icon relative">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="text-indigo-600 w-16 h-16 mb-4 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
              </div>
              <h2 className="stat-number title-font font-bold text-5xl mb-2">
                74
              </h2>
              <p className="leading-relaxed text-gray-600 font-medium uppercase tracking-wide text-sm">
                Files Processed
              </p>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="stat-card bg-white px-6 py-10 rounded-2xl shadow-lg hover:shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="stat-icon relative">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="text-purple-600 w-16 h-16 mb-4 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h2 className="stat-number title-font font-bold text-5xl mb-2">
                46
              </h2>
              <p className="leading-relaxed text-gray-600 font-medium uppercase tracking-wide text-sm">
                Locations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
