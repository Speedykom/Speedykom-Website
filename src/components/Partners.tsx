import Image from "next/image"

export default function PartnersSection() {
  const partners = [
    { alt: "GIZ", src: "/partners/image 10.png" },
    { alt: "African Union", src: "/partners/image 3.png" },
    { alt: "University of Pennsylvania", src: "/partners/image 4.png" },
    { alt: "Ministry of Health Malawi", src: "/partners/image 5.png" },
    { alt: "Makerere University", src: "/partners/image 6.png" },
    { alt: "Africa CDC", src: "/partners/image 7.png" },
  ]

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Heading */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Partnering for
              <br />
              Impact
            </h2>
          </div>

          {/* Partner Logos */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4  transition-all duration-300 opacity-70 hover:opacity-100"
                >
                  <Image
                    src={partner.src || "/placeholder.svg"}
                    alt={partner.alt}
                    width={140}
                    height={80}
                    className="max-w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
