export default function HeroSection() {
  return (
    <section className="hero-bg text-white">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <p className="text-sm uppercase tracking-wider mb-2">Digital Solutions for Development</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Speedykom: Digital Infrastructure for Future Societies
          </h1>
          <p className="text-lg mb-8">
            We partner with governments, donors and investors design and build digital systems that deliver lasting public impact.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}