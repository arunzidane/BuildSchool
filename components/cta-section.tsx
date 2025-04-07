import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <div className="container py-20">
      <div className="bg-gradient-to-r from-vibetribe-darkGray via-vibetribe-violet to-vibetribe-blue rounded-2xl p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
          Join thousands of businesses using VibeTribe.AI to turn customer data into growth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/signup">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 bg-white text-vibetribe-blue hover:bg-white/90 w-full sm:w-auto"
            >
              Start Free Trial
            </Button>
          </Link>
          <Link href="/demo">
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 bg-transparent border-2 border-white text-white hover:bg-white hover:text-vibetribe-blue transition-colors w-full sm:w-auto"
            >
              Schedule a Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

