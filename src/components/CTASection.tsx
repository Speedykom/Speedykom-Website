export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          We look forward to working<br/>with you
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
          Together we can create tools that catalyse sustainable change.
        </p>
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300">
          Get in Touch
        </button>
      </div>
    </section>
  )
}