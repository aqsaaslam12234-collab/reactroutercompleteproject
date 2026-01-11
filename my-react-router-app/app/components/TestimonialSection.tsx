const TestimonialSection = () => {
  return (
    <div>
      <section className="py-15 px-5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our amazing clients
              have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-hover">
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-indigo-400 to-purple-400 rounded-full opacity-10 -mr-16 -mt-16"></div>

                <div className="text-indigo-500 mb-6">
                  <svg
                    className="w-10 h-10 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.5 10c-1.933 0-3.5 1.567-3.5 3.5S4.567 17 6.5 17H8v-2H6.5C5.673 15 5 14.327 5 13.5S5.673 12 6.5 12H8v-2zm13 0c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5H21v-2h-1.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5H21v-2zM3 3h18v2H3z" />
                  </svg>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "Working with this team has been absolutely transformative.
                  Their innovative approach and dedication to excellence
                  exceeded all our expectations. Highly recommended!"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <img
                    alt="testimonial"
                    className="w-14 h-14 rounded-full object-cover border-4 border-indigo-100 shadow-md"
                    src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                  <div className="text-left">
                    <h3 className="text-gray-900 font-bold text-sm tracking-wide uppercase">
                      Holden Caulfield
                    </h3>
                    <p className="text-indigo-600 text-sm font-medium">
                      Senior Product Designer
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 to-purple-500"></div>
              </div>
            </div>

            <div className="card-hover lg:mt-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-purple-400 to-pink-400 rounded-full opacity-10 -mr-16 -mt-16"></div>

                <div className="text-purple-500 mb-6">
                  <svg
                    className="w-10 h-10 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.5 10c-1.933 0-3.5 1.567-3.5 3.5S4.567 17 6.5 17H8v-2H6.5C5.673 15 5 14.327 5 13.5S5.673 12 6.5 12H8v-2zm13 0c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5H21v-2h-1.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5H21v-2zM3 3h18v2H3z" />
                  </svg>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "The attention to detail and creative solutions provided were
                  outstanding. They truly understand modern design principles
                  and user experience. A pleasure to collaborate with!"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <img
                    alt="testimonial"
                    className="w-14 h-14 rounded-full object-cover border-4 border-purple-100 shadow-md"
                    src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DK"
                  />
                  <div className="text-left">
                    <h3 className="text-gray-900 font-bold text-sm tracking-wide uppercase">
                      Alper Kamu
                    </h3>
                    <p className="text-purple-600 text-sm font-medium">
                      UI Developer
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-purple-500 to-pink-500"></div>
              </div>
            </div>

            <div className="card-hover">
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-pink-400 to-rose-400 rounded-full opacity-10 -mr-16 -mt-16"></div>

                <div className="text-pink-500 mb-6">
                  <svg
                    className="w-10 h-10 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.5 10c-1.933 0-3.5 1.567-3.5 3.5S4.567 17 6.5 17H8v-2H6.5C5.673 15 5 14.327 5 13.5S5.673 12 6.5 12H8v-2zm13 0c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5H21v-2h-1.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5H21v-2zM3 3h18v2H3z" />
                  </svg>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "Exceptional quality and professionalism throughout the entire
                  project. Their expertise and commitment to delivering results
                  made all the difference. Couldn't be happier!"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <img
                    alt="testimonial"
                    className="w-14 h-14 rounded-full object-cover border-4 border-pink-100 shadow-md"
                    src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                  <div className="text-left">
                    <h3 className="text-gray-900 font-bold text-sm tracking-wide uppercase">
                      Henry Letham
                    </h3>
                    <p className="text-pink-600 text-sm font-medium">
                      Chief Technology Officer
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-pink-500 to-rose-500"></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full shadow-lg">
              <div className="flex gap-1">
                <svg
                  className="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <span className="text-gray-700 font-semibold ml-2">
                4.9/5 from 200+ reviews
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
