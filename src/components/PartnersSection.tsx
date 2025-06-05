import Image from 'next/image'

export default function PartnersSection() {
  const partners = [
    {
      name: "GIZ logo",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3VnY5ikOayt88N5XAT1DS8y8VFcZBzX1hH3o0HZz1y8RYe-hAAO7yEfUdNGLaUXSt5Hs0CRCds0XNY23vJ4LECMMOLlYARI6V-PT8_esOF2eLiiU7S5TlZjCAYHOI_tnleAu3l-nfBv5RJEp84B0dzyZ15ZwjzCFzNuFROR_dVYTxWuwwqeM5dqJHr1fXuDFhjZItK7iXdcbUFs77gt91mVA3gy6NIYf3WjF_cK6lef2L1GxvehjAz06_scbS_sGNmgk5fwX7THI",
      height: 40
    },
    {
      name: "African Union logo",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbWGgzvu6aGorwJpu3bkdB-PQw9wCz1rLeTXp3dcfPEjic7a9Tj9MURm7I7gLJvwkK5_8Fygs9vKrH4rSwXOv-ZUFNf6Mtp515vOeTicC86_rl8-cUJNUHjSCcIeQqZGl6e6Iu77ah4iQ7hqq5NHJheLqwbeLeeJlujE2McK-Az8A-bZ8cWWBZWD3kVCECnw2Af9b9jwkXfsx5P4T3s2KNe7315lHjU6RLvGsesfkdULW4tkmQSRDqIEROn0b5aiatURSdG2z6oA8",
      height: 48
    },
    {
      name: "University of Pennsylvania logo",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzTwefL2UECm1CPuY_63NjdrB0aw7AzFg3GHieRwuV9j3BvONscdzIzICBLAlwbdPxfi7fcNVgVfogjgqW-kRgsxp-XFVqX6_plvy4MTD7TTrVRuPSqJWLdzpk-ztxue0MxAuigy0FfvuvPnrVOnKjiNEkC_XZSkCtiw0SNLdeP7GwTqwoLeC2Nd8ngjP4oy8vy_aemgqyz_jhCgGDf7bclvSHjr7c4HVq6eBNi6rECl9vGG6g-Px1wKe4enpZp2g9yIUvyYrmAW4",
      height: 40
    },
    {
      name: "Government of Uganda logo",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvnV7pP3wXkv0WpN3ehmr-JfQGwKFNCBUXTl6Wj40J5w7QL_EWGTbYbEieBemF98tzJZ1bPZ5JLH1z_xLvSfXjUjAQKFy2O2G7Qk45jvB4DLOmc1i1dRO0-kANDv9pNlBeAgMYr_xc0l3d_zlmPMm0N11XQhacMOQ3WSpuI6SrZHzbiOe54-ImXSADNMCqb8_alNwcMAFG0kqnpBeUhZHbk04WJmMZQC2ZxviHCA5XrhewVBmMGfxUSWA5B56qGjETdGeC8zHpkW8",
      height: 48
    },
    {
      name: "Government of Kenya logo",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX_OzFmuADyhQckDfecd9chA-R6713o4sfmxkfaZH8cO7GRh7iSuWrKuL38qZuQWIBwns9Kta0hAPv6ljLcoM-ZAxV8uJIjY3lHeYrklx69CV_4CQiqv1m3gP72ty8wo_F9pTxNCmegGj6O2RbXhQCI1Y7fmI6ok5q_MZdAFFMaZtyHxNl073yUiGR9S2-6nxt2webw9y1blVaEvJseqBU5ClLRB60HCnU7AOJcIVA0mnDvX6_3Yy-5Cn4FdHuiZm-DkX6qt--g6g",
      height: 48
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-gray-600 text-lg font-semibold mb-8">Partnering for Impact</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <Image 
              key={index}
              alt={partner.name}
              className={`h-${partner.height === 48 ? '10 md:h-12' : '8 md:h-10'}`}
              src={partner.src}
              width={120}
              height={partner.height}
            />
          ))}
        </div>
      </div>
    </section>
  )
}