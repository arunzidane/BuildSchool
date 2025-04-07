import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-vibetribe-offWhite via-white to-vibetribe-lightGray opacity-70 z-0" />
      <div className="container relative z-10 py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Turn Your Customer Data Into <span className="text-vibetribe-blue">More Sales</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10">
          Upload your customer data and let AI create personalized, micro-targeted campaigns to increase repeat
          purchases, cross-sells, and upsells.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/signup">
            <Button size="lg" className="text-lg px-8 bg-vibetribe-blue hover:bg-vibetribe-blue/90">
              Start Free
            </Button>
          </Link>
          <Link href="/upload">
            <Button size="lg" variant="outline" className="text-lg px-8 border-vibetribe-gray text-vibetribe-darkGray">
              Upload Your Data
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

