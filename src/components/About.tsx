import { Briefcase } from "lucide-react"

export function About() {
  return (
    <div className="bg-card rounded-lg border p-8">
      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="w-5 h-5" />
        <h2 className="text-2xl font-bold">About</h2>
      </div>

      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          I'm a full-stack software engineer specializing in developing solutions with JavaScript, Python, and PHP. I
          work on projects including building modern web applications, mobile apps, search engine optimization, digital
          marketing, and making code tutorials.
        </p>

        <p>
          I've helped startups and MSMEs grow and streamline their processes through software solutions. I've also built
          a community of over 200,000 developers sharing knowledge and mentorship.
        </p>

        <p>
          Lately, I've been diving deeper into the world of artificial intelligence, focusing on integrating AI tools
          and techniques into modern applications. My work now includes developing AI-powered solutions, creating
          intelligent applications, and leveraging generative AI to optimize development workflows and deliver
          cutting-edge technology.
        </p>
      </div>
    </div>
  )
}
