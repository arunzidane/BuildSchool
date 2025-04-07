"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, MessageSquare, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function NewCampaignPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const segmentParam = searchParams.get("segment")

  const [step, setStep] = useState(1)
  const [isCreating, setIsCreating] = useState(false)
  const [campaignData, setCampaignData] = useState({
    name: "",
    segment: segmentParam || "",
    channel: "",
    goal: "",
    message: "",
    schedule: "now",
  })

  const handleChange = (field: string, value: string) => {
    setCampaignData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    setStep((prev) => prev + 1)
  }

  const handleBack = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsCreating(true)

    // Simulate API call
    setTimeout(() => {
      setIsCreating(false)
      router.push("/dashboard/campaigns")
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/campaigns">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Create Campaign</h1>
      </div>

      <div className="flex justify-between mb-8">
        <div className={`flex items-center ${step >= 1 ? "text-vibetribe-blue" : "text-muted-foreground"}`}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 1 ? "bg-vibetribe-blue text-white" : "bg-muted text-muted-foreground"}`}
          >
            1
          </div>
          <span>Audience</span>
        </div>
        <div className="w-16 h-[2px] bg-muted self-center" />
        <div className={`flex items-center ${step >= 2 ? "text-vibetribe-blue" : "text-muted-foreground"}`}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 2 ? "bg-vibetribe-blue text-white" : "bg-muted text-muted-foreground"}`}
          >
            2
          </div>
          <span>Channel & Goal</span>
        </div>
        <div className="w-16 h-[2px] bg-muted self-center" />
        <div className={`flex items-center ${step >= 3 ? "text-vibetribe-blue" : "text-muted-foreground"}`}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 3 ? "bg-vibetribe-blue text-white" : "bg-muted text-muted-foreground"}`}
          >
            3
          </div>
          <span>Message</span>
        </div>
        <div className="w-16 h-[2px] bg-muted self-center" />
        <div className={`flex items-center ${step >= 4 ? "text-vibetribe-blue" : "text-muted-foreground"}`}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 4 ? "bg-vibetribe-blue text-white" : "bg-muted text-muted-foreground"}`}
          >
            4
          </div>
          <span>Schedule</span>
        </div>
      </div>

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Select Audience</CardTitle>
            <CardDescription>Choose which customer segment to target with this campaign.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="campaign-name">Campaign Name</Label>
                <Input
                  id="campaign-name"
                  placeholder="E.g., Weekend Special, New Product Launch"
                  value={campaignData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>Select Customer Segment</Label>
                <RadioGroup
                  value={campaignData.segment}
                  onValueChange={(value) => handleChange("segment", value)}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div className="flex">
                    <RadioGroupItem value="high-spenders" id="high-spenders" className="peer sr-only" />
                    <Label
                      htmlFor="high-spenders"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-vibetribe-blue peer-data-[state=checked]:bg-vibetribe-lightBlue [&:has([data-state=checked])]:border-vibetribe-blue [&:has([data-state=checked])]:bg-vibetribe-lightBlue cursor-pointer"
                    >
                      <div className="mb-2 rounded-full bg-vibetribe-lightGray p-2">
                        <svg
                          className="h-6 w-6 text-vibetribe-blue"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">High Spenders</p>
                        <p className="text-sm text-muted-foreground">142 customers</p>
                      </div>
                    </Label>
                  </div>

                  <div className="flex">
                    <RadioGroupItem value="weekend-buyers" id="weekend-buyers" className="peer sr-only" />
                    <Label
                      htmlFor="weekend-buyers"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-vibetribe-violet peer-data-[state=checked]:bg-vibetribe-lightViolet [&:has([data-state=checked])]:border-vibetribe-violet [&:has([data-state=checked])]:bg-vibetribe-lightViolet cursor-pointer"
                    >
                      <div className="mb-2 rounded-full bg-vibetribe-lightOrange p-2">
                        <svg
                          className="h-6 w-6 text-vibetribe-orange"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">Weekend Buyers</p>
                        <p className="text-sm text-muted-foreground">386 customers</p>
                      </div>
                    </Label>
                  </div>

                  <div className="flex">
                    <RadioGroupItem value="infrequent-visitors" id="infrequent-visitors" className="peer sr-only" />
                    <Label
                      htmlFor="infrequent-visitors"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-vibetribe-violet peer-data-[state=checked]:bg-vibetribe-lightViolet [&:has([data-state=checked])]:border-vibetribe-violet [&:has([data-state=checked])]:bg-vibetribe-lightViolet cursor-pointer"
                    >
                      <div className="mb-2 rounded-full bg-vibetribe-lightBlue p-2">
                        <svg
                          className="h-6 w-6 text-vibetribe-blue"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">Infrequent Visitors</p>
                        <p className="text-sm text-muted-foreground">524 customers</p>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.push("/dashboard/campaigns")}>
              Cancel
            </Button>
            <Button onClick={handleNext} disabled={!campaignData.name || !campaignData.segment}>
              Next
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Channel & Goal</CardTitle>
            <CardDescription>Select the communication channel and campaign goal.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Select Channel</Label>
                <RadioGroup
                  value={campaignData.channel}
                  onValueChange={(value) => handleChange("channel", value)}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div className="flex">
                    <RadioGroupItem value="whatsapp" id="whatsapp" className="peer sr-only" />
                    <Label
                      htmlFor="whatsapp"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-vibetribe-violet peer-data-[state=checked]:bg-vibetribe-lightViolet [&:has([data-state=checked])]:border-vibetribe-violet [&:has([data-state=checked])]:bg-vibetribe-lightViolet cursor-pointer"
                    >
                      <div className="mb-2 rounded-full bg-green-100 p-2">
                        <MessageSquare className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="text-center">
                        <p className="font-medium">WhatsApp</p>
                        <p className="text-sm text-muted-foreground">Direct messaging</p>
                      </div>
                    </Label>
                  </div>

                  <div className="flex">
                    <RadioGroupItem value="sms" id="sms" className="peer sr-only" />
                    <Label
                      htmlFor="sms"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-vibetribe-violet peer-data-[state=checked]:bg-vibetribe-lightViolet [&:has([data-state=checked])]:border-vibetribe-violet [&:has([data-state=checked])]:bg-vibetribe-lightViolet cursor-pointer"
                    >
                      <div className="mb-2 rounded-full bg-blue-100 p-2">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="text-center">
                        <p className="font-medium">SMS</p>
                        <p className="text-sm text-muted-foreground">Text messaging</p>
                      </div>
                    </Label>
                  </div>

                  <div className="flex">
                    <RadioGroupItem value="email" id="email" className="peer sr-only" />
                    <Label
                      htmlFor="email"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-vibetribe-violet peer-data-[state=checked]:bg-vibetribe-lightViolet [&:has([data-state=checked])]:border-vibetribe-violet [&:has([data-state=checked])]:bg-vibetribe-lightViolet cursor-pointer"
                    >
                      <div className="mb-2 rounded-full bg-orange-100 p-2">
                        <Mail className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="text-center">
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">Email marketing</p>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="goal">Campaign Goal</Label>
                <Select value={campaignData.goal} onValueChange={(value) => handleChange("goal", value)}>
                  <SelectTrigger id="goal">
                    <SelectValue placeholder="Select a goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="upsell">Upsell to Existing Customers</SelectItem>
                    <SelectItem value="bring-back">Bring Back Inactive Customers</SelectItem>
                    <SelectItem value="offer">Promote Special Offer</SelectItem>
                    <SelectItem value="announcement">New Product/Service Announcement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
            <Button onClick={handleNext} disabled={!campaignData.channel || !campaignData.goal}>
              Next
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Craft Your Message</CardTitle>
            <CardDescription>Write your campaign message or choose from AI-generated templates.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="templates">
              <TabsList className="mb-4">
                <TabsTrigger value="templates">AI Templates</TabsTrigger>
                <TabsTrigger value="custom">Custom Message</TabsTrigger>
              </TabsList>
              <TabsContent value="templates">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    Based on your selected audience and goal, here are some AI-generated message templates.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      className="border rounded-md p-4 cursor-pointer hover:border-vibetribe-violet hover:bg-vibetribe-lightViolet"
                      onClick={() =>
                        handleChange(
                          "message",
                          "Hi [Name], we miss you at [Business]! It's been a while since your last visit. Come back this weekend and enjoy 15% off your purchase. Show this message at checkout. Valid until Sunday!",
                        )
                      }
                    >
                      <h3 className="font-medium mb-2">Re-engagement Offer</h3>
                      <p className="text-sm">
                        Hi [Name], we miss you at [Business]! It's been a while since your last visit. Come back this
                        weekend and enjoy 15% off your purchase. Show this message at checkout. Valid until Sunday!
                      </p>
                    </div>

                    <div
                      className="border rounded-md p-4 cursor-pointer hover:border-vibetribe-violet hover:bg-vibetribe-lightViolet"
                      onClick={() =>
                        handleChange(
                          "message",
                          "Hello [Name]! As one of our valued customers, we wanted to let you know about our new [Product] arriving this week. Based on your previous purchases, we think you'll love it! Stop by to check it out.",
                        )
                      }
                    >
                      <h3 className="font-medium mb-2">New Product Announcement</h3>
                      <p className="text-sm">
                        Hello [Name]! As one of our valued customers, we wanted to let you know about our new [Product]
                        arriving this week. Based on your previous purchases, we think you'll love it! Stop by to check
                        it out.
                      </p>
                    </div>

                    <div
                      className="border rounded-md p-4 cursor-pointer hover:border-vibetribe-violet hover:bg-vibetribe-lightViolet"
                      onClick={() =>
                        handleChange(
                          "message",
                          "Weekend special just for you, [Name]! Buy any [Product Category] and get a second one at 50% off. This exclusive offer is only valid this Saturday and Sunday. Don't miss out!",
                        )
                      }
                    >
                      <h3 className="font-medium mb-2">Weekend Special</h3>
                      <p className="text-sm">
                        Weekend special just for you, [Name]! Buy any [Product Category] and get a second one at 50%
                        off. This exclusive offer is only valid this Saturday and Sunday. Don't miss out!
                      </p>
                    </div>

                    <div
                      className="border rounded-md p-4 cursor-pointer hover:border-vibetribe-violet hover:bg-vibetribe-lightViolet"
                      onClick={() =>
                        handleChange(
                          "message",
                          "Thank you for being a loyal customer, [Name]! We're launching our new loyalty program and you're already at Silver tier. Your next purchase earns double points! Learn more at [Website].",
                        )
                      }
                    >
                      <h3 className="font-medium mb-2">Loyalty Program</h3>
                      <p className="text-sm">
                        Thank you for being a loyal customer, [Name]! We're launching our new loyalty program and you're
                        already at Silver tier. Your next purchase earns double points! Learn more at [Website].
                      </p>
                    </div>
                  </div>

                  {campaignData.message && (
                    <div className="mt-4">
                      <Label>Selected Template</Label>
                      <div className="border rounded-md p-4 bg-vibetribe-lightBlue border-vibetribe-blue mt-2">
                        <p>{campaignData.message}</p>
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="custom">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="custom-message">Your Message</Label>
                    <Textarea
                      id="custom-message"
                      placeholder="Write your campaign message here..."
                      className="min-h-[200px]"
                      value={campaignData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Use [Name] to personalize with customer's name.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
            <Button onClick={handleNext} disabled={!campaignData.message}>
              Next
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 4 && (
        <Card>
          <CardHeader>
            <CardTitle>Schedule Campaign</CardTitle>
            <CardDescription>Choose when to send your campaign.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <RadioGroup
                value={campaignData.schedule}
                onValueChange={(value) => handleChange("schedule", value)}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="now" id="now" />
                  <Label htmlFor="now">Send immediately</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="later" id="later" />
                  <Label htmlFor="later">Schedule for later</Label>
                </div>
              </RadioGroup>

              {campaignData.schedule === "later" && (
                <div className="space-y-2 pt-2">
                  <Label htmlFor="schedule-date">Date & Time</Label>
                  <Input id="schedule-date" type="datetime-local" />
                </div>
              )}

              <div className="border rounded-md p-4 mt-6">
                <h3 className="font-medium mb-4">Campaign Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Campaign Name</p>
                    <p className="text-sm text-muted-foreground">{campaignData.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Audience</p>
                    <p className="text-sm text-muted-foreground">
                      {campaignData.segment === "high-spenders" && "High Spenders (142 customers)"}
                      {campaignData.segment === "weekend-buyers" && "Weekend Buyers (386 customers)"}
                      {campaignData.segment === "infrequent-visitors" && "Infrequent Visitors (524 customers)"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Channel</p>
                    <p className="text-sm text-muted-foreground">
                      {campaignData.channel === "whatsapp" && "WhatsApp"}
                      {campaignData.channel === "sms" && "SMS"}
                      {campaignData.channel === "email" && "Email"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Goal</p>
                    <p className="text-sm text-muted-foreground">
                      {campaignData.goal === "upsell" && "Upsell to Existing Customers"}
                      {campaignData.goal === "bring-back" && "Bring Back Inactive Customers"}
                      {campaignData.goal === "offer" && "Promote Special Offer"}
                      {campaignData.goal === "announcement" && "New Product/Service Announcement"}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm font-medium">Message</p>
                    <p className="text-sm text-muted-foreground">{campaignData.message}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Schedule</p>
                    <p className="text-sm text-muted-foreground">
                      {campaignData.schedule === "now" ? "Send immediately" : "Scheduled for later"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
            <Button onClick={handleSubmit} disabled={isCreating}>
              {isCreating ? "Creating Campaign..." : "Create Campaign"}
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

