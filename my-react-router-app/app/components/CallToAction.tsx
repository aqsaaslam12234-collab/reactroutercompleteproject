export const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 py-24">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container relative px-5 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-12 pr-0 mb-10 md:mb-0">
          <h1 className="title-font font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Transform Your Business Today
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
            Join thousands of successful entrepreneurs who've already made the
            leap. Get exclusive access to tools, resources, and community
            support.
          </p>
          <div className="flex items-center gap-8 text-white">
            <div>
              <div className="text-3xl font-bold">10k+</div>
              <div className="text-white/80 text-sm">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.9★</div>
              <div className="text-white/80 text-sm">Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-white/80 text-sm">Countries</div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/6 md:w-1/2 md:ml-auto w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-gray-900 text-2xl font-bold mb-2">
              Get Started Free
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              No credit card required • 14-day trial
            </p>

            <div className="space-y-4">
              <div className="relative">
                <label
                  htmlFor="full-name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  placeholder="John Doe"
                  className="w-full bg-gray-50 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 text-base outline-none text-gray-700 py-3 px-4 transition-all duration-200"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full bg-gray-50 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 text-base outline-none text-gray-700 py-3 px-4 transition-all duration-200"
                />
              </div>

              <button className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Your Free Trial →
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              By signing up, you agree to our Terms & Privacy Policy
            </p>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Trusted by 10,000+ businesses worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
