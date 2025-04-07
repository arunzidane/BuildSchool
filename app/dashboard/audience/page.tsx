import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function AudiencePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Audience Segments</h1>
        <p className="text-muted-foreground">AI-generated customer segments based on your data.</p>
      </div>

      <Tabs defaultValue="segments">
        <TabsList>
          <TabsTrigger value="segments">Segments</TabsTrigger>
          <TabsTrigger value="customers">All Customers</TabsTrigger>
        </TabsList>
        <TabsContent value="segments" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="bg-vibetribe-lightGray rounded-t-lg">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">High Spenders</CardTitle>
                  <Badge className="bg-vibetribe-blue">142 Customers</Badge>
                </div>
                <CardDescription>Customers who spend 2x the average order value</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-1">Key Characteristics</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Average order: $85.40</li>
                      <li>• Purchase frequency: 2.3x per month</li>
                      <li>• 78% are repeat customers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Recommended Actions</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Loyalty rewards program</li>
                      <li>• Early access to new products</li>
                      <li>• Premium service offerings</li>
                    </ul>
                  </div>
                  <div className="pt-2 flex gap-2">
                    <Link href="/dashboard/campaigns/new?segment=high-spenders">
                      <Button size="sm" className="bg-vibetribe-blue hover:bg-vibetribe-blue/90">
                        Create Campaign
                      </Button>
                    </Link>
                    <Link href="/dashboard/audience/high-spenders">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-vibetribe-lightGray rounded-t-lg">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">Weekend Buyers</CardTitle>
                  <Badge className="bg-vibetribe-gray text-white">386 Customers</Badge>
                </div>
                <CardDescription>Customers who primarily shop on weekends</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-1">Key Characteristics</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 82% of purchases on Sat-Sun</li>
                      <li>• Average order: $42.30</li>
                      <li>• 65% are families</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Recommended Actions</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Weekend-only promotions</li>
                      <li>• Family bundles and discounts</li>
                      <li>• Thursday reminder messages</li>
                    </ul>
                  </div>
                  <div className="pt-2 flex gap-2">
                    <Link href="/dashboard/campaigns/new?segment=weekend-buyers">
                      <Button size="sm" className="bg-vibetribe-blue hover:bg-vibetribe-blue/90">
                        Create Campaign
                      </Button>
                    </Link>
                    <Link href="/dashboard/audience/weekend-buyers">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-vibetribe-lightGray rounded-t-lg">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">Infrequent Visitors</CardTitle>
                  <Badge className="bg-vibetribe-darkGray text-white">524 Customers</Badge>
                </div>
                <CardDescription>Customers who haven't purchased in 30+ days</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-1">Key Characteristics</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Last purchase: 45+ days ago</li>
                      <li>• Average order: $38.20</li>
                      <li>• 92% are one-time buyers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Recommended Actions</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Re-engagement discount</li>
                      <li>• "We miss you" campaign</li>
                      <li>• Feedback request</li>
                    </ul>
                  </div>
                  <div className="pt-2 flex gap-2">
                    <Link href="/dashboard/campaigns/new?segment=infrequent-visitors">
                      <Button size="sm" className="bg-vibetribe-blue hover:bg-vibetribe-blue/90">
                        Create Campaign
                      </Button>
                    </Link>
                    <Link href="/dashboard/audience/infrequent-visitors">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Create Custom Segment</CardTitle>
              <CardDescription>Define your own customer segment based on specific criteria.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard/audience/create">
                <Button>Create Custom Segment</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="customers">
          <Card>
            <CardHeader>
              <CardTitle>All Customers</CardTitle>
              <CardDescription>View and manage all your customer data.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-12 text-muted-foreground">Customer list view will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

