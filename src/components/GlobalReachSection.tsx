import { CircleWithIcon } from "./ui/circle-with-icon"

export default function GlobalReachSection() {
  const services = [
    {
      icon: 'public',
      title: 'Public Sector Digital Transformation',
      description: 'Strengthening public institutions through digital portals, ID systems, and payment systems.',
      products: 'SpeedyPASS, SpeedyRegistry',
      focus: 'We work with governments design digital services that are inclusive and user-centric, like e-portals for citizens or businesses.',
      countries: 'Tunisia, Benin, Morocco, Ethiopia, South Sudan, AU-wide, Germany, Austria, Netherlands.'
    },
    {
      icon: 'sync_alt',
      title: 'Interoperability & Systems Integration',
      description: 'Connecting data and systems at the national and regional levels.',
      products: 'SpeedyXchange, X-Registry',
      focus: 'Systems Integrations for the AU\'s Digital Dice Health System.',
      countries: 'Somalia, Ethiopia, South Sudan, AU-wide (SpeedyKom Africa), CDC Africa, GIZ, BMGF, Government of Germany.'
    },
    {
      icon: 'lock_open',
      title: 'Open Standards & Open Source Foundations',
      description: 'Building blocks for public policy making, forecasting, and policy.',
      products: '',
      focus: 'Working with GIZ and Germany to integrate open standards for public data into development insights.',
      countries: 'Austria, Indonesia, Pakistan, India, GIZ, Government of Germany, University of Pennsylvania, Pliskovice University.'
    },
    {
      icon: 'science',
      title: 'Applied Research & Evidence for Impact',
      description: 'Data-driven solutions for social protection, climate resilience.',
      products: 'SpeedyAI, SpeedyDATA',
      focus: 'Dashboards in Madagascar, geospatial data in Uganda, climate platforms for rural electrification.',
      countries: 'CT CN Global, Uganda, Mozambique, Benin, Uganda, Ghana, Sierra Leone, Guinea, Ministry of Energy & Energy Madagascar, University of Energy & Energy Ethiopia, GIZ.'
    },
    {
      icon: 'health_and_safety',
      title: 'Digital Health Infrastructure',
      description: 'Digitizing health systems across countries and borders.',
      products: 'SpeedyHealth',
      focus: 'For the AU and IGAD for pandemic response and health systems resilience.',
      countries: 'South Africa, Regional IGAD Partners: AU Commission, Africa CDC, IGAD.'
    },
    {
      icon: 'battery_charging_full',
      title: 'Renewable Energy & Climate Data Platforms',
      description: 'Accelerating energy access, climate action, and product innovation.',
      products: '',
      focus: 'Mini-grid deployments in Uganda, electrification in Mozambique, solar production in Tunisia.',
      countries: 'Senegal, Tunisia, Mozambique, Uganda, GIZ, BMGF, University of Pennsylvania, Government of Kenya.'
    }
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">Global Reach & Impact</h2>
        <p className="text-gray-600 text-center text-lg mb-12 max-w-3xl mx-auto">
          Our extensive network of partners and collaborators spanning across Africa and Europe build stronger public systems. With actor-specific tools and deep-local job knowhow, our system digital strategy lifts the humanchip, always.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
              {/* <span className="material-icons text-teal-500 text-3xl mb-4">{service.icon}</span> */}
              <CircleWithIcon size={50} backgroundColor="#F0F7F6" icon={service.icon}  />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{service.description}</p>
              {service.products && (
                <p className="text-gray-600 text-sm mb-1">
                  <span className="font-semibold">Products:</span> {service.products}
                </p>
              )}
              <p className="text-gray-600 text-sm mb-3">
                <span className="font-semibold">Focus:</span> {service.focus}
              </p>
              <p className="text-gray-600 text-sm mb-3">
                <span className="font-semibold">Countries{service.countries.includes('Partners') ? ' & Partners' : ''}:</span> {service.countries}
              </p>
              <a className="text-teal-500 font-semibold hover:text-teal-600 text-sm flex items-center" href="#">
                Learn More <span className="material-icons text-sm ml-1">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}