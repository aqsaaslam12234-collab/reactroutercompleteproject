export function PricingSection() {
  return (
    <section className="overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-5xl text-4xl font-bold title-font mb-4 text-gray-900">
            Simple, Transparent{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-600">
            Choose the perfect plan for your needs. All plans include our core
            features with advanced options as you grow.
          </p>

          <div className="flex mx-auto border-2 border-indigo-500 rounded-lg overflow-hidden mt-8 shadow-md">
            <button className="py-3 px-6 bg-indigo-600 text-white focus:outline-none font-semibold transition-all duration-300 hover:bg-indigo-700">
              Monthly
            </button>
            <button className="py-3 px-6 focus:outline-none font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-100">
              Annually
            </button>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-8 rounded-2xl border-2 border-gray-200 flex flex-col relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <h2 className="text-sm tracking-widest title-font mb-1 font-bold text-gray-500 uppercase">
                Starter
              </h2>
              <h1 className="text-6xl text-gray-900 font-bold pb-4 mb-4 border-b-2 border-gray-100 leading-none">
                Free
              </h1>

              <p className="flex items-center text-gray-700 mb-3">
                <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-linear-to-br from-green-400 to-green-500 text-white rounded-full shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                5 Projects
              </p>
              <p className="flex items-center text-gray-700 mb-3">
                <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-linear-to-br from-green-400 to-green-500 text-white rounded-full shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Basic Analytics
              </p>
              <p className="flex items-center text-gray-700 mb-8">
                <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-linear-to-br from-green-400 to-green-500 text-white rounded-full shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Community Support
              </p>

              <button className="flex items-center justify-center mt-auto text-indigo-600 bg-white border-2 border-indigo-600 py-3 px-4 w-full focus:outline-none hover:bg-indigo-600 hover:text-white rounded-xl font-semibold transition-all duration-300 shadow-md">
                Get Started
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Perfect for trying out
              </p>
            </div>
          </div>

          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-8 rounded-2xl border-2 border-indigo-500 flex flex-col relative overflow-hidden bg-linear-to-br from-indigo-50 to-purple-50 shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-2 scale-105">
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 tracking-widest text-xs absolute right-0 top-0 rounded-bl-2xl font-bold shadow-lg">
                POPULAR
              </span>

              <h2 className="text-sm tracking-widest title-font mb-1 font-bold text-indigo-700 uppercase">
                Pro
              </h2>
              <h1 className="text-6xl text-gray-900 font-bold leading-none flex items-center pb-4 mb-4 border-b-2 border-indigo-200">
                <span>$38</span>
                <span className="text-xl ml-2 font-normal text-gray-600">
                  /mo
                </span>
              </h1>

              <p className="flex items-center text-gray-700 mb-3">
                <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-500 text-white rounded-full shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Unlimited Projects
              </p>
              <p className="flex items-center text-gray-700 mb-3">
                <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-500 text-white rounded-full shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Advanced Analytics
              </p>
              <p className="flex items-center text-gray-700 mb-3">
                <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-500 text-white rounded-full shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Priority Support
              </p>
              <p className="flex items-center text-gray-700 mb-8">
                <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-500 text-white rounded-full shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Custom Integrations
              </p>

              <button className="flex items-center justify-center mt-auto text-white bg-linear-to-r from-indigo-600 to-purple-600 border-0 py-3 px-4 w-full focus:outline-none hover:from-indigo-700 hover:to-purple-700 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="text-xs text-gray-600 mt-4 text-center">
                Most popular choice
              </p>
            </div>
          </div>

          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-8 rounded-2xl border-2 border-gray-200 flex flex-col relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <h2 className="text-sm tracking-widest title-font mb-1 font-bold text-gray-500 uppercase">
                Business
              </h2>
              <h1 className="text-6xl text-gray-900 font-bold leading-none flex items-center pb-4 mb-4 border-b-2 border-gray-100">
                <span>$56</span>
                <span className="text-xl ml-2 font-normal text-gray-600">
                  /mo
                </span>
              </h1>

              <p className="flex items-center text-gray-700 mb-3">
                <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-linear-to-br from-blue-400 to-blue-500 text-white rounded-full shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Everything in Pro
              </p>
              <p className="flex items-center text-gray-700 mb-3">
                <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-linear-to-br from-blue-400 to-blue-500 text-white rounded-full shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Team Collaboration
              </p>
              <p className="flex items-center text-gray-700 mb-3">
                <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-linear-to-br from-blue-400 to-blue-500 text-white rounded-full shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Advanced Security
              </p>
              <p className="flex items-center text-gray-700 mb-3">
                <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-linear-to-br from-blue-400 to-blue-500 text-white rounded-full shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Dedicated Manager
              </p>
              <p className="flex items-center text-gray-700 mb-8">
                <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-linear-to-br from-blue-400 to-blue-500 text-white rounded-full shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                API Access
              </p>

              <button className="flex items-center justify-center mt-auto text-blue-600 bg-white border-2 border-blue-600 py-3 px-4 w-full focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl font-semibold transition-all duration-300 shadow-md">
                Get Started
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                For growing teams
              </p>
            </div>
          </div>

          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-8 rounded-2xl border-2 border-gray-200 flex flex-col relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <h2 className="text-sm tracking-widest title-font mb-1 font-bold text-gray-500 uppercase">
                Enterprise
              </h2>
              <h1 className="text-6xl text-gray-900 font-bold leading-none flex items-center pb-4 mb-4 border-b-2 border-gray-100">
                <span>$72</span>
                <span className="text-xl ml-2 font-normal text-gray-600">
                  /mo
                </span>
              </h1>

              <p className="flex items-center text-gray-700 mb-3">
                <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-linear-to-br from-purple-400 to-purple-500 text-white rounded-full shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Everything in Business
              </p>
              <p className="flex items-center text-gray-700 mb-3">
                <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-linear-to-br from-purple-400 to-purple-500 text-white rounded-full shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Custom Solutions
              </p>
              <p className="flex items-center text-gray-700 mb-3">
                <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-linear-to-br from-purple-400 to-purple-500 text-white rounded-full shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                24/7 Phone Support
              </p>
              <p className="flex items-center text-gray-700 mb-3">
                <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-linear-to-br from-purple-400 to-purple-500 text-white rounded-full shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                SLA Guarantee
              </p>
              <p className="flex items-center text-gray-700 mb-8">
                <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-linear-to-br from-purple-400 to-purple-500 text-white rounded-full shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                On-Premise Option
              </p>

              <button className="flex items-center justify-center mt-auto text-purple-600 bg-white border-2 border-purple-600 py-3 px-4 w-full focus:outline-none hover:bg-purple-600 hover:text-white rounded-xl font-semibold transition-all duration-300 shadow-md">
                Contact Sales
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                For large organizations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
