import { ImageIcon } from "lucide-react"

export function Gallery() {
  const images = [
    "/conference-speaking.jpg",
    "/hackathon-presentation.jpg",
    "/vibrant-tech-event.png",
    "/award-ceremony.png",
    "/team-collaboration.png",
  ]

  return (
    <div className="bg-card rounded-lg border p-8">
      <div className="flex items-center gap-2 mb-6">
        <ImageIcon className="w-5 h-5" />
        <h2 className="text-2xl font-bold">Gallery</h2>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {images.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden bg-muted">
              <img
                src={src || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-lg">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full shadow-lg">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
