import { CircleWithIcon } from "./ui/circle-with-icon";

const lifeAtSpeedykom = [
  {
    icon: "public",
    bgColor: "bg-blue-50",
    title: "Collaborative Team",
    description:
      "Inclusive teams with open communication, mutual respect, and genuine teamwork.",
  },
  {
    icon: "lock",
    bgColor: "bg-green-50",
    title: "Career Development",
    description:
      "Regular training sessions, skill-building workshops, mentorship programs, and clear professional growth pathways.",
  },
  {
    icon: "shield",
    bgColor: "bg-blue-50",
    title: "Local & Global Opportunities",
    description:
      "We actively cultivate a workplace where diversity is valued, equity is practiced, and every voice is respected and heard.",
  },
];

const whyJoinUs = [
  {
    icon: "group",
    bgColor: "bg-blue-50",
    title: "Make an Impact",
    description:
      "Directly contribute to transformative projects in digital health, climate resilience, public governance, and development cooperation, creating meaningful change in communities.",
  },
  {
    icon: "lock",
    bgColor: "bg-green-50",
    title: "Innovative Culture",
    description:
      "Thrive in an agile and creative work environment that values and encourages your unique contributions.",
  },
  {
    icon: "shield",
    bgColor: "bg-blue-50",
    title: "Global and Local Opportunities",
    description:
      "Take part in projects rooted locally but making a global difference, offering exposure and international collaboration.",
  },
];

export default function CompanyCulture() {
  return (
    <main className="min-h-screen">
      <section className="py-16 px-4 container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Life At Speedykom</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We are committed to fostering an environment where everyone can thrive professionally and personally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {lifeAtSpeedykom.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <CircleWithIcon size={50} backgroundColor="#F0F7F6" icon={item.icon} className="my-2"  />
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Join Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyJoinUs.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg flex flex-col">
                <CircleWithIcon size={50} backgroundColor="#F0F7F6" icon={item.icon} className="my-2"  />
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto py-20">
        <p className="text-center text-gray-600 text-lg leading-relaxed">
          We welcome applications from both experienced professionals and early-career candidates, including interns and
          juniors. You don&apos;t need to tick every box—we&apos;re especially interested in individuals who demonstrate
          curiosity, initiative, and a commitment to social impact. If you&apos;re excited to work at the intersection of
          technology and public service, we&apos;d love to hear from you.
        </p>
      </div>
    </main>
  );
}