"use client"

import { useState } from "react"
import { MessageSquare } from "lucide-react"

export function Recommendations() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const recommendations = [
    {
      text: '"Bryl is a good student and software developer who shows professionalism and dedication in whatever he does. His software projects during his academic years are up to standard and is being used by the university for some of its operations. Bryl also..."',
      name: "Glenn Pepito",
      role: "Professor at University of San Carlos",
    },
    {
      text: '"Sir Bryl\'s teaching approach is incredibly hands-on, and the projects significantly accelerated my learning process in web development. I am truly grateful for the mentorship I received from him during my web development internship."',
      name: "John Edmerson Pizarra",
      role: "Jr. Full-stack Developer, PocketDevs",
    },
  ]

  return (
    <div className="bg-card rounded-lg border p-6">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="w-5 h-5" />
        <h2 className="text-xl font-bold">Recommendations</h2>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{recommendations[currentIndex].text}</p>

        <div>
          <p className="font-semibold text-sm">{recommendations[currentIndex].name}</p>
          <p className="text-xs text-muted-foreground">{recommendations[currentIndex].role}</p>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2 justify-center pt-2">
          {recommendations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
              aria-label={`Go to recommendation ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
