const ContactUs = () => {
  return (
    <div>
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-linear-to-br from-violet-50 via-purple-50 to-fuchsia-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 float-animation"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 float-animation"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container relative px-5 mx-auto max-w-5xl">
          <div className="flex flex-col text-center w-full mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent animate-linear">
              Transform Your Workflow Today
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-600 font-light">
              Join our community and unlock powerful tools designed to elevate
              your productivity. Get started in seconds with no credit card
              required.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl shadow-purple-200/50 p-8 md:p-10 backdrop-blur-sm border border-purple-100">
              <form className="flex flex-col md:flex-row gap-4">
                <div className="relative grow group">
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    placeholder="Aqsa Aslam"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100 focus:outline-none hover:border-purple-300"
                  />
                </div>

                <div className="relative grow group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 transition-all duration-300 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100 focus:outline-none hover:border-purple-300"
                  />
                </div>

                <div className="md:self-end">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-1 bg-linear-to-r from-purple-600 to-fuchsia-600 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 active:scale-95"
                  >
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
