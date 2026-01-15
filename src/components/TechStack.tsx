import { Badge } from "./ui/badge"
import { Code } from "lucide-react"

export function TechStack() {
  const techStack = {
    Frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"],
    Backend: ["Node.js", "Python", "PHP", "Laravel", "PostgreSQL", "MongoDB"],
    "DevOps & Cloud": ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
  }

  return (
    <div className="bg-card rounded-lg border p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Code className="w-5 h-5" />
          <h2 className="text-2xl font-bold">Tech Stack</h2>
        </div>
        <button className="text-sm text-muted-foreground hover:text-foreground">View All →</button>
      </div>

      <div className="space-y-6">
        {Object.entries(techStack).map(([category, technologies]) => (
          <div key={category}>
            <h3 className="font-semibold mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
