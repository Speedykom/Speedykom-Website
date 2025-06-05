import Image from 'next/image'

export default function WhatWeDoSection() {
  const focusAreas = [
    'Public Sector Digital Transformation',
    'Interoperability & Systems Integration',
    'Applied Research & Evidence for Impact',
    'Open Standards & Open Source Foundations',
    'Digital Health Infrastructure',
    'Renewable Energy & Climate Data Platforms'
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 order-2 md:order-1">
            <Image
              alt="Doctor holding a tablet with a patient in the background"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBATmrSOPBUe4klEureXGYPfiG0xM8Xy-3JNRqvVLwqAXTLhLmse3ylm5f0gLjKyUODctAF_IryfFKPaC_4W_0Z9GxiiyLsQVJ0sjDdrIvtI9Pi63o0YoYvwfVXSoynW1ayMjavayyGLdF6mDu5DduYDZvAf173u9RFtWEVCSyHBNsdfswpgf7IR9kHPzGilUUXTpdSMAowAxvUlbQGTZDPF5uZ9AJEx2YZwDQjkqlIte1r2lP9EMKMJ0sVyFUwS4i2Co31ynJxlk"
              width={600}
              height={400}
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What We Do</h2>
            <p className="text-gray-600 mb-6 text-lg">
              We build digital infrastructure for governments and development partners; using open standards, applied research, innovation, and user-centric design.
            </p>
            <p className="text-gray-600 mb-2 font-semibold">Our core focus areas include:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
              {focusAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 flex items-center">
              Explore Our Work
              <span className="material-icons ml-2">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}