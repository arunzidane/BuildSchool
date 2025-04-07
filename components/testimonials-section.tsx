import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "VibeTribe.AI helped us increase our repeat customer rate by 32% in just two months. The AI segmentation is incredibly accurate.",
    author: "Sarah Johnson",
    role: "Owner, Bloom Cafe",
    avatar: "SJ",
  },
  {
    quote:
      "We used to spend hours manually sorting customer data. Now VibeTribe does it automatically and our campaigns are much more effective.",
    author: "Michael Chen",
    role: "Marketing Manager, Urban Fitness",
    avatar: "MC",
  },
  {
    quote:
      "The ROI is incredible. For every $1 we spend on VibeTribe campaigns, we're seeing $7 in additional revenue from repeat customers.",
    author: "Priya Patel",
    role: "Founder, Spice Market",
    avatar: "PP",
  },
]

export function TestimonialsSection() {
  return (
    <div className="bg-vibetribe-lightGray py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Small Businesses</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how businesses like yours are growing with VibeTribe.AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-md">
              <CardContent className="pt-6">
                <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarFallback className="bg-vibetribe-blue text-white">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

