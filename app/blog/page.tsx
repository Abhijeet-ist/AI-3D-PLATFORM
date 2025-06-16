"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, User, ArrowRight, Clock, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI-Generated 3D Content",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the way we create and interact with 3D models, from gaming to architecture.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI Technology",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
    tags: ["AI", "3D Modeling", "Future Tech"],
  },
  {
    id: 2,
    title: "Best Practices for Writing Effective 3D Prompts",
    excerpt:
      "Learn the art of crafting prompts that generate exactly what you envision. Tips and tricks from our community of expert creators.",
    author: "Marcus Johnson",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Tutorial",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["Prompts", "Best Practices", "Tutorial"],
  },
  {
    id: 3,
    title: "Community Spotlight: Amazing Creations This Month",
    excerpt:
      "Showcasing the most incredible 3D models created by our community members, from fantasy creatures to architectural marvels.",
    author: "Elena Rodriguez",
    date: "2024-01-10",
    readTime: "4 min read",
    category: "Community",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["Community", "Showcase", "Inspiration"],
  },
  {
    id: 4,
    title: "Optimizing 3D Models for Web Performance",
    excerpt:
      "Technical guide on reducing file sizes, optimizing textures, and ensuring your 3D models load quickly on any device.",
    author: "Alex Thompson",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "Technical",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["Performance", "Optimization", "Web"],
  },
  {
    id: 5,
    title: "From Concept to Creation: A Designer's Journey",
    excerpt:
      "Follow along as we document the complete process of bringing a complex 3D concept to life using AI3D Studio.",
    author: "Maya Patel",
    date: "2024-01-05",
    readTime: "12 min read",
    category: "Case Study",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["Case Study", "Design Process", "Workflow"],
  },
  {
    id: 6,
    title: "The Science Behind AI 3D Generation",
    excerpt:
      "Deep dive into the neural networks and algorithms that power our AI models, explained in accessible terms.",
    author: "Dr. James Wilson",
    date: "2024-01-03",
    readTime: "15 min read",
    category: "Technology",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["AI", "Science", "Technology"],
  },
]

const categories = ["All", "AI Technology", "Tutorial", "Community", "Technical", "Case Study", "Technology"]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

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
              <Tag className="w-4 h-4 mr-2" />
              Blog & Insights
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
              Stories from the{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Future of 3D
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-300 sm:text-xl">
              Discover insights, tutorials, and stories from the world of AI-powered 3D creation. Learn from experts and
              get inspired by our community.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full md:w-48 bg-slate-800 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600">
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && !searchQuery && (
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
              <Card className="overflow-hidden bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-purple-600">Featured</Badge>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-slate-700 text-slate-300">{featuredPost.category}</Badge>
                    <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                    <p className="text-slate-400 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-slate-400">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                    </div>
                    <Button
                      asChild
                      className="w-fit bg-gradient-to-r from-purple-600 to-purple-700 text-white border-0"
                    >
                      <Link href={`/blog/${featuredPost.id}`}>
                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              {searchQuery || selectedCategory !== "All" ? "Search Results" : "Latest Articles"}
            </h2>
            <p className="text-slate-400">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardContent className="p-6 flex flex-col flex-1">
                    <Badge className="w-fit mb-3 bg-slate-700 text-slate-300">{post.category}</Badge>
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-slate-400 mb-4 flex-1 line-clamp-3">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-slate-600 text-slate-400">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">{new Date(post.date).toLocaleDateString()}</span>
                      <Button variant="ghost" size="sm" asChild className="text-purple-400 hover:text-purple-300">
                        <Link href={`/blog/${post.id}`}>
                          Read More <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-slate-400 mb-6">Try adjusting your search terms or category filter.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                }}
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}

          {/* Load More */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
