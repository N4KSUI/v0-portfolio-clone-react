import { Link2, Github, Linkedin, Instagram } from "lucide-react"

export function SocialLinks() {
  const links = [
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "GitHub", icon: Github, url: "#" },
    { name: "Instagram", icon: Instagram, url: "#" },
  ]

  return (
    <div className="bg-card rounded-lg border p-6">
      <div className="flex items-center gap-2 mb-6">
        <Link2 className="w-5 h-5" />
        <h2 className="text-xl font-bold">Social Links</h2>
      </div>

      <div className="space-y-2">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
          >
            <link.icon className="w-5 h-5" />
            <span className="text-sm">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
