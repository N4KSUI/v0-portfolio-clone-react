import { Mail, Calendar, Users } from "lucide-react"
import { Button } from "./ui/button"

export function Contact() {
  return (
    <div className="bg-card rounded-lg border p-6">
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Mail className="w-4 h-4" />
            <h3 className="font-semibold text-sm">Email</h3>
          </div>
          <p className="text-sm text-muted-foreground">bryllim@gmail.com</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-4 h-4" />
            <h3 className="font-semibold text-sm">Let's Talk</h3>
          </div>
          <Button variant="outline" className="w-full gap-2 bg-transparent">
            Schedule a Call
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-4 h-4" />
            <h3 className="font-semibold text-sm">Community</h3>
          </div>
          <Button variant="outline" className="w-full gap-2 bg-transparent">
            Join Discussion
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}
