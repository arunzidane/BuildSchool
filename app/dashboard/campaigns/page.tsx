import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, MessageSquare, Plus } from "lucide-react"
import Link from "next/link"

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Campaigns</h1>
          <p className="text-muted-foreground">Create and manage your marketing campaigns.</p>
        </div>
        <div>
          <Link href="/dashboard/campaigns/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Campaign
            </Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Weekend Special</CardTitle>
                  <CardDescription>Targeting Weekend Buyers segment</CardDescription>
                </div>
                <Badge className="bg-green-500">Active</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-sm font-medium mb-1">Campaign Details</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Channel: WhatsApp</li>
                    <li>• Audience: 386 customers</li>
                    <li>• Started: 3 days ago</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Performance</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Delivered: 98%</li>
                    <li>• Open rate: 42%</li>
                    <li>• Conversions: 18</li>
                  </ul>
                </div>
                <div className="flex items-end justify-end gap-2">
                  <Link href="/dashboard/campaigns/1/analytics">
                    <Button variant="outline" size="sm">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Analytics
                    </Button>
                  </Link>
                  <Link href="/dashboard/campaigns/1/edit">
                    <Button size="sm">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="scheduled">
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">You don't have any scheduled campaigns.</p>
              <Link href="/dashboard/campaigns/new">
                <Button className="mt-4">Create Campaign</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>New Product Launch</CardTitle>
                  <CardDescription>Targeting High Spenders segment</CardDescription>
                </div>
                <Badge variant="outline">Completed</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-sm font-medium mb-1">Campaign Details</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Channel: Email</li>
                    <li>• Audience: 142 customers</li>
                    <li>• Duration: 1 week</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1">Performance</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Delivered: 100%</li>
                    <li>• Open rate: 38%</li>
                    <li>• Conversions: 24</li>
                  </ul>
                </div>
                <div className="flex items-end justify-end">
                  <Link href="/dashboard/campaigns/2/analytics">
                    <Button variant="outline" size="sm">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      View Results
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

