"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUp, Download, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0]
      setFile(droppedFile)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = () => {
    if (!file) return

    setIsUploading(true)

    // Simulate upload
    setTimeout(() => {
      setIsUploading(false)
      setIsUploaded(true)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Upload Customer Data</h1>
        <p className="text-muted-foreground">
          Upload your customer data to get started with AI-powered segmentation and campaigns.
        </p>
      </div>

      <Tabs defaultValue="upload">
        <TabsList>
          <TabsTrigger value="upload">Upload File</TabsTrigger>
          <TabsTrigger value="integrate">Integrate</TabsTrigger>
        </TabsList>
        <TabsContent value="upload" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload Customer Data</CardTitle>
              <CardDescription>Upload a CSV or Excel file with your customer data.</CardDescription>
            </CardHeader>
            <CardContent>
              {!isUploaded ? (
                <div
                  className={`border-2 border-dashed rounded-lg p-12 text-center ${
                    isDragging ? "border-vibetribe-blue bg-vibetribe-lightBlue" : "border-border"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <FileUp className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Drag and drop your file here</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Supports CSV, Excel (.xlsx), and Tally export files
                  </p>
                  <div className="flex flex-col items-center gap-4">
                    <div>
                      <Input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        accept=".csv,.xlsx,.xls"
                        onChange={handleFileChange}
                      />
                      <Label
                        htmlFor="file-upload"
                        className="bg-vibetribe-blue text-white hover:bg-vibetribe-blue/90 px-4 py-2 rounded-md cursor-pointer"
                      >
                        Browse Files
                      </Label>
                    </div>
                    {file && (
                      <div className="text-sm">
                        Selected: <span className="font-medium">{file.name}</span>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle2 className="h-12 w-12 mx-auto text-green-500 mb-4" />
                  <h3 className="text-lg font-medium mb-2">Upload Complete!</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Your data has been uploaded and is being processed.
                  </p>
                  <Link href="/dashboard/audience">
                    <Button>View Customer Segments</Button>
                  </Link>
                </div>
              )}
            </CardContent>
            {file && !isUploaded && (
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                  Need a template?{" "}
                  <Link href="/template.csv" className="text-vibetribe-violet hover:underline">
                    Download sample
                  </Link>
                </div>
                <Button onClick={handleUpload} disabled={isUploading}>
                  {isUploading ? "Uploading..." : "Upload File"}
                </Button>
              </CardFooter>
            )}
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Format Guidelines</CardTitle>
              <CardDescription>Make sure your data includes these recommended fields for best results.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Required Fields</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Customer Name or ID</li>
                    <li>Contact Information (Email or Phone)</li>
                    <li>Purchase Date</li>
                    <li>Purchase Amount</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Recommended Fields</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Products Purchased</li>
                    <li>Purchase Frequency</li>
                    <li>Customer Location</li>
                    <li>Preferred Payment Method</li>
                    <li>Customer Demographics</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Template
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="integrate" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Integrate with Your Tools</CardTitle>
              <CardDescription>Connect directly with your existing business tools.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-2 hover:border-vibetribe-blue cursor-pointer transition-all">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-vibetribe-lightGray rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-8 h-8 text-vibetribe-blue"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.2" />
                        <path
                          d="M7 10L12 15L17 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="font-medium mb-2">Tally</h3>
                    <p className="text-sm text-muted-foreground">Import your customer data directly from Tally.</p>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:border-vibetribe-violet cursor-pointer transition-all">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-vibetribe-lightOrange rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-8 h-8 text-vibetribe-orange"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.2" />
                        <path
                          d="M12 8V16M8 12H16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="font-medium mb-2">Shopify</h3>
                    <p className="text-sm text-muted-foreground">Connect your Shopify store for automatic syncing.</p>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:border-vibetribe-violet cursor-pointer transition-all">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-vibetribe-lightBlue rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-8 h-8 text-vibetribe-blue"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.2" />
                        <path
                          d="M8 12H16M8 8H16M8 16H12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="font-medium mb-2">Square POS</h3>
                    <p className="text-sm text-muted-foreground">Import customer data from your Square POS system.</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Don't see your tool?{" "}
                <Link href="/dashboard/settings/integrations" className="text-vibetribe-violet hover:underline">
                  Request an integration
                </Link>
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

