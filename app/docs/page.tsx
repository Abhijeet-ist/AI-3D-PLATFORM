"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Book,
  Search,
  Code,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  ExternalLink,
  FileText,
  Video,
  MessageCircle,
} from "lucide-react"
import { useState } from "react"

const quickStart = [
  {
    title: "Authentication",
    description: "Learn how to authenticate your API requests",
    icon: Shield,
    time: "2 min read",
  },
  {
    title: "Your First Model",
    description: "Generate your first 3D model with a simple API call",
    icon: Zap,
    time: "5 min read",
  },
  {
    title: "Customization Options",
    description: "Explore all available parameters and settings",
    icon: Code,
    time: "10 min read",
  },
  {
    title: "Best Practices",
    description: "Tips for optimal results and performance",
    icon: Globe,
    time: "8 min read",
  },
]

const guides = [
  {
    category: "Getting Started",
    articles: [
      { title: "Introduction to AI3D Studio", type: "guide", time: "3 min" },
      { title: "Setting up your account", type: "guide", time: "2 min" },
      { title: "Understanding pricing", type: "guide", time: "4 min" },
      { title: "First steps tutorial", type: "video", time: "10 min" },
    ],
  },
  {
    category: "API Reference",
    articles: [
      { title: "Authentication", type: "reference", time: "5 min" },
      { title: "Generate endpoint", type: "reference", time: "8 min" },
      { title: "Models endpoint", type: "reference", time: "6 min" },
      { title: "Error handling", type: "reference", time: "4 min" },
    ],
  },
  {
    category: "Advanced Usage",
    articles: [
      { title: "Batch processing", type: "guide", time: "12 min" },
      { title: "Custom styles", type: "guide", time: "15 min" },
      { title: "Webhook integration", type: "guide", time: "10 min" },
      { title: "Performance optimization", type: "guide", time: "8 min" },
    ],
  },
  {
    category: "SDKs & Libraries",
    articles: [
      { title: "JavaScript SDK", type: "reference", time: "6 min" },
      { title: "Python SDK", type: "reference", time: "6 min" },
      { title: "React components", type: "guide", time: "12 min" },
      { title: "Unity plugin", type: "guide", time: "20 min" },
    ],
  },
]

const popularArticles = [
  {
    title: "How to write effective prompts",
    description: "Learn the art of crafting prompts that generate exactly what you envision",
    category: "Best Practices",
    readTime: "8 min read",
    views: "12.5k views",
  },
  {
    title: "Optimizing models for web",
    description: "Techniques for reducing file size while maintaining quality",
    category: "Performance",
    readTime: "6 min read",
    views: "8.2k views",
  },
  {
    title: "API rate limits and quotas",
    description: "Understanding and working within API limitations",
    category: "API Reference",
    readTime: "4 min read",
    views: "15.1k views",
  },
]

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return Video
      case "reference":
        return Code
      case "guide":
        return FileText
      default:
        return FileText
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
              <Book className="w-4 h-4 mr-2" />
              Documentation
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
              Learn to Build with{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI3D Studio
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-300 sm:text-xl mb-8">
              Everything you need to integrate AI-powered 3D generation into your applications. From quick start guides
              to advanced tutorials.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Quick Start</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Get up and running in minutes with these essential guides.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStart.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">{item.time}</span>
                      <ArrowRight className="w-4 h-4 text-purple-400" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Documentation</h2>

                <Tabs defaultValue="all" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-4 bg-slate-900/50 border border-slate-700">
                    <TabsTrigger value="all" className="data-[state=active]:bg-purple-600">
                      All
                    </TabsTrigger>
                    <TabsTrigger value="guides" className="data-[state=active]:bg-purple-600">
                      Guides
                    </TabsTrigger>
                    <TabsTrigger value="reference" className="data-[state=active]:bg-purple-600">
                      Reference
                    </TabsTrigger>
                    <TabsTrigger value="tutorials" className="data-[state=active]:bg-purple-600">
                      Tutorials
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="space-y-6">
                    {guides.map((section, index) => (
                      <motion.div
                        key={section.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                          <CardHeader>
                            <CardTitle className="text-white">{section.category}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {section.articles.map((article, i) => {
                                const IconComponent = getTypeIcon(article.type)
                                return (
                                  <div
                                    key={i}
                                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors cursor-pointer"
                                  >
                                    <div className="flex items-center space-x-3">
                                      <IconComponent className="w-4 h-4 text-slate-400" />
                                      <span className="text-slate-300">{article.title}</span>
                                      <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                                        {article.type}
                                      </Badge>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <span className="text-xs text-slate-500">{article.time}</span>
                                      <ExternalLink className="w-3 h-3 text-slate-400" />
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </TabsContent>

                  <TabsContent value="guides" className="space-y-6">
                    {guides
                      .filter((section) => section.articles.some((article) => article.type === "guide"))
                      .map((section, index) => (
                        <Card key={section.category} className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                          <CardHeader>
                            <CardTitle className="text-white">{section.category}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {section.articles
                                .filter((article) => article.type === "guide")
                                .map((article, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors cursor-pointer"
                                  >
                                    <div className="flex items-center space-x-3">
                                      <FileText className="w-4 h-4 text-slate-400" />
                                      <span className="text-slate-300">{article.title}</span>
                                    </div>
                                    <span className="text-xs text-slate-500">{article.time}</span>
                                  </div>
                                ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </TabsContent>

                  <TabsContent value="reference" className="space-y-6">
                    {guides
                      .filter((section) => section.articles.some((article) => article.type === "reference"))
                      .map((section, index) => (
                        <Card key={section.category} className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                          <CardHeader>
                            <CardTitle className="text-white">{section.category}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {section.articles
                                .filter((article) => article.type === "reference")
                                .map((article, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors cursor-pointer"
                                  >
                                    <div className="flex items-center space-x-3">
                                      <Code className="w-4 h-4 text-slate-400" />
                                      <span className="text-slate-300">{article.title}</span>
                                    </div>
                                    <span className="text-xs text-slate-500">{article.time}</span>
                                  </div>
                                ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </TabsContent>

                  <TabsContent value="tutorials" className="space-y-6">
                    {guides
                      .filter((section) => section.articles.some((article) => article.type === "video"))
                      .map((section, index) => (
                        <Card key={section.category} className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                          <CardHeader>
                            <CardTitle className="text-white">{section.category}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {section.articles
                                .filter((article) => article.type === "video")
                                .map((article, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors cursor-pointer"
                                  >
                                    <div className="flex items-center space-x-3">
                                      <Video className="w-4 h-4 text-slate-400" />
                                      <span className="text-slate-300">{article.title}</span>
                                    </div>
                                    <span className="text-xs text-slate-500">{article.time}</span>
                                  </div>
                                ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Popular Articles */}
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Popular Articles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {popularArticles.map((article, index) => (
                        <div
                          key={index}
                          className="p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors cursor-pointer"
                        >
                          <h4 className="text-white font-medium mb-2">{article.title}</h4>
                          <p className="text-slate-400 text-sm mb-3">{article.description}</p>
                          <div className="flex items-center justify-between text-xs text-slate-500">
                            <span>{article.category}</span>
                            <span>{article.readTime}</span>
                          </div>
                          <div className="text-xs text-slate-500 mt-1">{article.views}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Help & Support */}
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Join Discord
                    </Button>
                    <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Contact Support
                    </Button>
                    <div className="text-center pt-4 border-t border-slate-700">
                      <p className="text-slate-400 text-sm mb-2">Can't find what you're looking for?</p>
                      <Button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white border-0">
                        Submit Feedback
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
