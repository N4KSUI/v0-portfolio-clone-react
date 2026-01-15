import { MessageCircle } from "lucide-react"
import { Button } from "./ui/button"

export function ChatButton() {
  return (
    <Button size="lg" className="fixed bottom-6 right-6 rounded-full shadow-lg gap-2 px-6">
      <MessageCircle className="w-5 h-5" />
      Chat with Bryl
    </Button>
  )
}
