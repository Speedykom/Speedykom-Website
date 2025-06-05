import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const sections = [
  {
    id: "why-we-do-it",
    title: "Why We Do It",
    description: [
      "We believe digital systems should strengthen public institutions and advance development outcomes, not just digitize workflows.",
      "Speedykom partners with governments, donors, and institutions across Africa, Europe, and the US to modernize public systems through trusted, long-term collaboration. We focus on delivering technology that is secure, scalable, and rooted in local context — supporting better governance, healthier societies, and sustainable growth.",
    ],
    buttonText: "Our Story",
    image: {
      src: "/mainsection-1.png",
      alt: "Offshore wind turbines in the ocean",
      width: 600,
      height: 400,
    },
    imageOrder: "last",
  },
  {
    id: "what-we-do",
    title: "What We Do",
    description: [
      "We build digital infrastructure for governments and development partners, combining open standards, AI, agile methods, and secure-by-design software.",
    ],
    bulletPoints: [
      "Public Sector Digital Transformation",
      "Interoperability & Systems Integration",
      "Open Standards & Open Source Foundations",
      "Applied Research & Evidence for Impact",
      "Digital Health Infrastructure",
      "Renewable Energy & Climate Data Platforms",
    ],
    buttonText: "Explore Our Work",
    image: {
      src: "/mainsection-2.png",
      alt: "Healthcare professional using smartphone with stethoscope",
      width: 400,
      height: 400,
    },
    imageOrder: "first",
  },
]

export default function MainSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      {sections.map((section) => (
        <div key={section.id} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className={`space-y-6 ${section.imageOrder === "last" ? "" : "lg:order-last"}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{section.title}</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {section.description.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
            {section.bulletPoints && (
              <div className="space-y-3">
                <p className="text-gray-700 font-medium">Our core focus areas include:</p>
                <ul className="space-y-2 text-gray-600">
                  {section.bulletPoints.map((point, i) => (
                    <li key={i}>- {point}</li>
                  ))}
                </ul>
              </div>
            )}
            <Button className="bg-[#56A09A] hover:bg-teal-700 text-white px-6 py-2 rounded-md">
              {section.buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div>
            <Image
              src={section.image.src}
              alt={section.image.alt}
              width={section.image.width}
              height={section.image.height}
              className="rounded-lg object-cover w-full h-[300px] lg:h-[400px]"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
