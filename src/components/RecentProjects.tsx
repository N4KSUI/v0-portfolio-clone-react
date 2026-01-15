import { Folder } from "lucide-react"

export function RecentProjects() {
  const projects = [
    {
      name: "CodeCred",
      description: "Online certifications for programmers",
      url: "codecred.dev",
    },
    {
      name: "BASE404",
      description: "Online coding bootcamp",
      url: "base-404.com",
    },
    {
      name: "DIIN.PH",
      description: "AI-powered wardrobe assistant",
      url: "diin.ph",
    },
    {
      name: "DYNAMIS Workout Tracker",
      description: "AI-powered workout tracker",
      url: "dynamis-app.online",
    },
  ]

  return (
    <div className="bg-card rounded-lg border p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Folder className="w-5 h-5" />
          <h2 className="text-2xl font-bold">Recent Projects</h2>
        </div>
        <button className="text-sm text-muted-foreground hover:text-foreground">View All →</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.name} className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
            <h3 className="font-semibold mb-2">{project.name}</h3>
            <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
            <code className="text-xs bg-muted px-2 py-1 rounded">{project.url}</code>
          </div>
        ))}
      </div>
    </div>
  )
}
