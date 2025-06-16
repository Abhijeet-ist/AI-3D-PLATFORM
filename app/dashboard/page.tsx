"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Upload, Download, Eye, DollarSign, TrendingUp, Plus, MoreHorizontal, Heart } from "lucide-react"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useToast } from "@/hooks/use-toast"

const userStats = {
  totalModels: 24,
  totalDownloads: 15420,
  totalEarnings: 2847.5,
  totalViews: 45230,
  totalLikes: 3420,
  monthlyGrowth: 12.5,
}

const recentModels = [
  {
    id: 1,
    title: "Cyberpunk Helmet",
    status: "Published",
    views: 1234,
    downloads: 567,
    earnings: 234.5,
    likes: 89,
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "2 days ago",
    price: 24.99,
  },
  {
    id: 2,
    title: "Fantasy Sword",
    status: "Processing",
    views: 0,
    downloads: 0,
    earnings: 0,
    likes: 0,
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "1 hour ago",
    price: 0,
  },
  {
    id: 3,
    title: "Modern Chair",
    status: "Published",
    views: 890,
    downloads: 234,
    earnings: 89.25,
    likes: 45,
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "1 week ago",
    price: 15.5,
  },
  {
    id: 4,
    title: "Robot Character",
    status: "Published",
    views: 2100,
    downloads: 890,
    earnings: 445.0,
    likes: 156,
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "3 days ago",
    price: 35.99,
  },
  {
    id: 5,
    title: "Space Station",
    status: "Published",
    views: 1567,
    downloads: 678,
    earnings: 0,
    likes: 234,
    image: "/placeholder.svg?height=100&width=100",
    createdAt: "5 days ago",
    price: 0,
  },
]

const earnings = [
  { month: "Jan", amount: 245.3 },
  { month: "Feb", amount: 389.5 },
  { month: "Mar", amount: 567.8 },
  { month: "Apr", amount: 423.9 },
  { month: "May", amount: 678.2 },
  { month: "Jun", amount: 542.9 },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    const name = localStorage.getItem("userName") || ""

    if (!loggedIn) {
      router.push("/auth/login")
      return
    }

    setIsLoggedIn(loggedIn)
    setUserName(name)
  }, [router])

  const handleDeleteModel = (modelId: number) => {
    toast({
      title: "Model deleted",
      description: "Your model has been successfully deleted.",
    })
  }

  const handleEditModel = (modelId: number) => {
    router.push(`/generate?edit=${modelId}`)
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Welcome back{userName ? `, ${userName.split(" ")[0]}` : ""}!
              </h1>
              <p className="text-slate-400">Manage your 3D models and track your performance</p>
            </div>
            <Button
              className="mt-4 sm:mt-0 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0"
              onClick={() => router.push("/generate")}
            >
              <Plus className="w-4 h-4 mr-2" />
              Create New Model
            </Button>
          </div>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-900/50 border border-slate-700">
            <TabsTrigger value="overview" className="data-[state=active]:bg-purple-600">
              Overview
            </TabsTrigger>
            <TabsTrigger value="models" className="data-[state=active]:bg-purple-600">
              My Models
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-purple-600">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="earnings" className="data-[state=active]:bg-purple-600">
              Earnings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-400 text-sm">Total Models</p>
                        <p className="text-2xl font-bold text-white">{userStats.totalModels}</p>
                        <p className="text-xs text-green-400 mt-1">+3 this month</p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                        <Upload className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-400 text-sm">Total Downloads</p>
                        <p className="text-2xl font-bold text-white">{userStats.totalDownloads.toLocaleString()}</p>
                        <p className="text-xs text-green-400 mt-1">+1.2k this month</p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                        <Download className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-400 text-sm">Total Earnings</p>
                        <p className="text-2xl font-bold text-white">${userStats.totalEarnings.toLocaleString()}</p>
                        <p className="text-xs text-green-400 mt-1">+$234 this month</p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-400 text-sm">Monthly Growth</p>
                        <p className="text-2xl font-bold text-white">+{userStats.monthlyGrowth}%</p>
                        <p className="text-xs text-green-400 mt-1">vs last month</p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Recent Models */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    Recent Models
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300" asChild>
                      <span onClick={() => setActiveTab("models")}>View All</span>
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentModels.slice(0, 3).map((model) => (
                      <div
                        key={model.id}
                        className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <Image
                            src={model.image || "/placeholder.svg"}
                            alt={model.title}
                            width={60}
                            height={60}
                            className="rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-white">{model.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-slate-400">
                              <span>{model.createdAt}</span>
                              <Badge
                                variant={model.status === "Published" ? "default" : "secondary"}
                                className={model.status === "Published" ? "bg-green-600" : "bg-yellow-600"}
                              >
                                {model.status}
                              </Badge>
                              {model.price === 0 && <Badge className="bg-blue-600">Free</Badge>}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-slate-400">
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {model.views.toLocaleString()}
                          </div>
                          <div className="flex items-center">
                            <Download className="w-4 h-4 mr-1" />
                            {model.downloads}
                          </div>
                          <div className="flex items-center">
                            <Heart className="w-4 h-4 mr-1" />
                            {model.likes}
                          </div>
                          <div className="flex items-center text-yellow-400">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {model.earnings.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="models" className="space-y-6">
            <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">All Models ({recentModels.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentModels.map((model) => (
                    <Card
                      key={model.id}
                      className="bg-slate-800/50 border-slate-600 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <div className="relative">
                        <Image
                          src={model.image || "/placeholder.svg"}
                          alt={model.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute top-2 right-2 flex gap-2">
                          <Badge
                            variant={model.status === "Published" ? "default" : "secondary"}
                            className={model.status === "Published" ? "bg-green-600" : "bg-yellow-600"}
                          >
                            {model.status}
                          </Badge>
                          {model.price === 0 && <Badge className="bg-blue-600">Free</Badge>}
                        </div>
                        <div className="absolute top-2 left-2">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="secondary" size="sm" className="h-8 w-8 p-0">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-slate-800 border-slate-700">
                              <DropdownMenuItem onClick={() => handleEditModel(model.id)}>Edit Model</DropdownMenuItem>
                              <DropdownMenuItem>View Analytics</DropdownMenuItem>
                              <DropdownMenuItem>Share</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-400" onClick={() => handleDeleteModel(model.id)}>
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-white mb-2">{model.title}</h3>
                        <div className="flex justify-between text-sm text-slate-400 mb-4">
                          <div className="flex items-center space-x-3">
                            <span className="flex items-center">
                              <Eye className="w-3 h-3 mr-1" />
                              {model.views}
                            </span>
                            <span className="flex items-center">
                              <Download className="w-3 h-3 mr-1" />
                              {model.downloads}
                            </span>
                            <span className="flex items-center">
                              <Heart className="w-3 h-3 mr-1" />
                              {model.likes}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-yellow-400 font-semibold">
                            {model.price === 0 ? "Free" : `$${model.price}`}
                          </span>
                          <span className="text-green-400 font-semibold">${model.earnings.toFixed(2)}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Performance Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Total Views</span>
                      <span className="text-white">{userStats.totalViews.toLocaleString()}</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Downloads</span>
                      <span className="text-white">{userStats.totalDownloads.toLocaleString()}</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Likes</span>
                      <span className="text-white">{userStats.totalLikes.toLocaleString()}</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Conversion Rate</span>
                      <span className="text-white">3.7%</span>
                    </div>
                    <Progress value={37} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Top Performing Models</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentModels
                      .filter((model) => model.status === "Published")
                      .sort((a, b) => b.views - a.views)
                      .slice(0, 5)
                      .map((model, index) => (
                        <div key={model.id} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {index + 1}
                            </div>
                            <div>
                              <span className="text-white font-medium">{model.title}</span>
                              <p className="text-xs text-slate-400">{model.createdAt}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-slate-400 text-sm">
                            <div className="flex items-center">
                              <Eye className="w-3 h-3 mr-1" />
                              {model.views}
                            </div>
                            <div className="flex items-center">
                              <Download className="w-3 h-3 mr-1" />
                              {model.downloads}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Monthly Performance Chart */}
            <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Monthly Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { month: "January", views: 4200, downloads: 890, earnings: 234.5 },
                    { month: "February", views: 5100, downloads: 1200, earnings: 389.75 },
                    { month: "March", views: 6800, downloads: 1450, earnings: 567.25 },
                    { month: "April", views: 5900, downloads: 1100, earnings: 423.8 },
                    { month: "May", views: 7200, downloads: 1680, earnings: 678.9 },
                    { month: "June", views: 6500, downloads: 1390, earnings: 542.6 },
                  ].map((data) => (
                    <div key={data.month} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-slate-300 font-medium w-20">{data.month}</span>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="flex items-center text-slate-400">
                          <Eye className="w-3 h-3 mr-1" />
                          <span>{data.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center text-slate-400">
                          <Download className="w-3 h-3 mr-1" />
                          <span>{data.downloads}</span>
                        </div>
                        <div className="flex items-center text-yellow-400">
                          <DollarSign className="w-3 h-3 mr-1" />
                          <span>${data.earnings}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Earnings Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {earnings.map((earning) => (
                      <div
                        key={earning.month}
                        className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors"
                      >
                        <span className="text-slate-300 font-medium">{earning.month} 2024</span>
                        <div className="flex items-center space-x-4">
                          <span className="text-white font-semibold">${earning.amount}</span>
                          <Badge className="bg-green-600">Paid</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Payout Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-slate-400 text-sm">Available Balance</p>
                    <p className="text-3xl font-bold text-white">${userStats.totalEarnings.toFixed(2)}</p>
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">Next Payout</p>
                    <p className="text-white font-medium">January 1st, 2025</p>
                    <p className="text-xs text-slate-500">Automatic monthly payout</p>
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">Payout Method</p>
                    <p className="text-white font-medium">PayPal</p>
                    <p className="text-xs text-slate-500">user@example.com</p>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0">
                    Request Early Payout
                  </Button>

                  <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
                    Update Payout Method
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Earnings by Model */}
            <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Earnings by Model</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentModels
                    .filter((model) => model.earnings > 0)
                    .sort((a, b) => b.earnings - a.earnings)
                    .map((model) => (
                      <div key={model.id} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={model.image || "/placeholder.svg"}
                            alt={model.title}
                            width={50}
                            height={50}
                            className="rounded-lg object-cover"
                          />
                          <div>
                            <h4 className="text-white font-medium">{model.title}</h4>
                            <p className="text-sm text-slate-400">{model.downloads} downloads</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-yellow-400 font-bold">${model.earnings.toFixed(2)}</p>
                          <p className="text-xs text-slate-400">${model.price} each</p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
