import { BookOpen } from "lucide-react"

export function BeyondCoding() {
  return (
    <div className="bg-card rounded-lg border p-8">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5" />
        <h2 className="text-2xl font-bold">Beyond Coding</h2>
      </div>

      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>When not writing code, I focus on learning about emerging technologies, minimalism, and startup culture.</p>

        <p>I share my knowledge through content creation and community building.</p>
      </div>
    </div>
  )
}
