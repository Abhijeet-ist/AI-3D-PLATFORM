"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Star, Heart, Download, Eye, TrendingUp, Clock, Award, Filter } from "lucide-react"
import Image from "next/image"

const categories = [
  { id: "trending", name: "Trending", icon: TrendingUp },
  { id: "recent", name: "Recent", icon: Clock },
  { id: "featured", name: "Featured", icon: Award },
  { id: "popular", name: "Popular", icon: Star },
]

const trendingModels = [
  {
    id: 1,
    title: "Cyberpunk Motorcycle",
    creator: "TechArtist",
    category: "Vehicles",
    views: 15420,
    likes: 2340,
    downloads: 890,
    rating: 4.9,
    image: "/placeholder.svg?height=300&width=300",
    tags: ["Cyberpunk", "Vehicle", "Sci-Fi"],
    price: 24.99,
    trending: true,
  },
  {
    id: 2,
    title: "Fantasy Dragon",
    creator: "MythCreator",
    category: "Characters",
    views: 23100,
    likes: 3450,
    downloads: 1200,
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=300",
    tags: ["Fantasy", "Dragon", "Character"],
    price: 0,
    trending: true,
  },
  {
    id: 3,
    title: "Modern Architecture",
    creator: "ArchViz Pro",
    category: "Architecture",
    views: 8900,
    likes: 1200,
    downloads: 450,
    rating: 4.7,
    image: "/placeholder.svg?height=300&width=300",
    tags: ["Architecture", "Modern", "Building"],
    price: 15.5,
    trending: false,
  },
  {
    id: 4,
    title: "Alien Weapon",
    creator: "SciFi Studios",
    category: "Weapons",
    views: 12300,
    likes: 1890,
    downloads: 670,
    rating: 4.6,
    image: "/placeholder.svg?height=300&width=300",
    tags: ["Sci-Fi", "Weapon", "Alien"],
    price: 18.99,
    trending: true,
  },
  {
    id: 5,
    title: "Vintage Car",
    creator: "RetroModels",
    category: "Vehicles",
    views: 9800,
    likes: 1450,
    downloads: 520,
    rating: 4.5,
    image: "/placeholder.svg?height=300&width=300",
    tags: ["Vintage", "Car", "Classic"],
    price: 12.99,
    trending: false,
  },
  {
    id: 6,
    title: "Space Station",
    creator: "CosmicDesigns",
    category: "Architecture",
    views: 18700,
    likes: 2890,
    downloads: 980,
    rating: 4.9,
    image: "/placeholder.svg?height=300&width=300",
    tags: ["Space", "Station", "Sci-Fi"],
    price: 0,
    trending: true,
  },
]

const creators = [
  {
    id: 1,
    name: "TechArtist",
    avatar: "/placeholder.svg?height=60&width=60",
    models: 45,
    followers: 12300,
    totalDownloads: 89000,
    verified: true,
  },
  {
    id: 2,
    name: "MythCreator",
    avatar: "/placeholder.svg?height=60&width=60",
    models: 32,
    followers: 8900,
    totalDownloads: 67000,
    verified: true,
  },
  {
    id: 3,
    name: "ArchViz Pro",
    avatar: "/placeholder.svg?height=60&width=60",
    models: 28,
    followers: 5600,
    totalDownloads: 34000,
    verified: false,
  },
]

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("trending")

  const filteredModels = trendingModels.filter((model) => {
    const matchesSearch =
      model.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.creator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    if (activeCategory === "trending") return matchesSearch && model.trending
    if (activeCategory === "recent") return matchesSearch
    if (activeCategory === "featured") return matchesSearch && model.rating >= 4.8
    if (activeCategory === "popular") return matchesSearch && model.views > 15000

    return matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Explore Creations</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Discover trending 3D models, talented creators, and the latest innovations in AI-generated content
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  placeholder="Search models, creators, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-12 h-12 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 text-lg"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="space-y-8">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TabsList className="grid w-full grid-cols-4 bg-slate-900/50 border border-slate-700 h-12">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white flex items-center gap-2"
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {/* Models Grid */}
          <TabsContent value={activeCategory} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredModels.map((model, index) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group overflow-hidden bg-slate-900/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm">
                    <div className="relative overflow-hidden">
                      <Image
                        src={model.image || "/placeholder.svg"}
                        alt={model.title}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Action Buttons */}
                      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        {model.trending && (
                          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                        {model.price === 0 && <Badge className="bg-green-600 text-white">Free</Badge>}
                      </div>

                      {/* Price */}
                      <div className="absolute bottom-3 right-3">
                        <Badge className="bg-black/80 text-white">
                          {model.price === 0 ? "Free" : `$${model.price}`}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-white mb-1 truncate">{model.title}</h3>
                          <p className="text-sm text-slate-400">by {model.creator}</p>
                        </div>
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          <span className="text-xs">{model.rating}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {model.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs border-slate-600 text-slate-400">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {model.views.toLocaleString()}
                          </span>
                          <span className="flex items-center">
                            <Heart className="w-3 h-3 mr-1" />
                            {model.likes.toLocaleString()}
                          </span>
                          <span className="flex items-center">
                            <Download className="w-3 h-3 mr-1" />
                            {model.downloads}
                          </span>
                        </div>
                      </div>

                      {/* Action */}
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0"
                      >
                        {model.price === 0 ? "Download Free" : "View Details"}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Top Creators Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Top Creators</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {creators.map((creator, index) => (
                  <motion.div
                    key={creator.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors cursor-pointer"
                  >
                    <div className="relative">
                      <Image
                        src={creator.avatar || "/placeholder.svg"}
                        alt={creator.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      {creator.verified && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <Award className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{creator.name}</h3>
                      <div className="text-sm text-slate-400 space-y-1">
                        <p>{creator.models} models</p>
                        <p>{creator.followers.toLocaleString()} followers</p>
                        <p>{creator.totalDownloads.toLocaleString()} downloads</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                      Follow
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
