import { Briefcase } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Principal AI Engineer",
      company: "Standard Chartered",
      year: "2025",
      active: true,
    },
    {
      title: "AI Ops Engineer",
      company: "Centre of Excellence for GenAI, Cambridge",
      year: "2025",
    },
    {
      title: "Senior Full-Stack Developer",
      company: "Core Technology, Cambridge",
      year: "2024",
    },
    {
      title: "Software Engineering Lead",
      company: "PocketDevs",
      year: "2022",
    },
    {
      title: "Lead Application Developer",
      company: "Bluewind Asia",
      year: "2021",
    },
    {
      title: "Software Engineer",
      company: "GCM",
      year: "2020",
    },
    {
      title: "BS Information Technology",
      company: "University of San Carlos",
      year: "2019",
    },
    {
      title: "Hello World! 👋",
      company: "Wrote my first line of code",
      year: "2015",
    },
  ]

  return (
    <div className="bg-card rounded-lg border p-6 sticky top-8">
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="w-5 h-5" />
        <h2 className="text-xl font-bold">Experience</h2>
      </div>

      <div className="space-y-6">
        {/* PH100 Badge */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold mb-1">I'M PART OF</p>
              <p className="text-2xl font-bold">PH100</p>
              <p className="text-xs mt-2 opacity-90">
                PH100 is the smartest list of the brightest minds under 30 in the Philippines
              </p>
            </div>
            <div className="text-4xl">⟩⟩⟩</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="relative">
                <div className={`w-3 h-3 rounded-full mt-1.5 ${exp.active ? "bg-primary" : "bg-muted-foreground"}`} />
                {index < experiences.length - 1 && <div className="absolute left-1.5 top-5 w-px h-12 bg-border" />}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </div>
              <span className="text-xs text-muted-foreground">{exp.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
