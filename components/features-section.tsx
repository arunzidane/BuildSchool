import { BarChart3, Upload, Users, MessageSquare, TrendingUp, Settings } from "lucide-react"

const features = [
  {
    icon: Upload,
    title: "Easy Data Upload",
    description: "Drag & drop your customer data from CSV, Excel, or integrate with your POS system.",
  },
  {
    icon: Users,
    title: "AI Segmentation",
    description: "Automatically group your customers based on spending habits, frequency, and preferences.",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Campaigns",
    description: "Create and send personalized campaigns via WhatsApp, SMS, or Email.",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Track campaign results, customer engagement, and sales impact in real-time.",
  },
  {
    icon: BarChart3,
    title: "Customer Insights",
    description: "Discover patterns and opportunities in your customer base with AI-powered analytics.",
  },
  {
    icon: Settings,
    title: "Easy Integration",
    description: "Connect with your existing tools and workflows without complex setup.",
  },
]

export function FeaturesSection() {
  return (
    <div className="container py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Small Businesses</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Everything you need to understand your customers and grow your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-vibetribe-lightGray rounded-lg flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-vibetribe-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

