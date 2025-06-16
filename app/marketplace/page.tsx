"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, Heart, Download, Eye, Grid3X3, List } from "lucide-react"
import Image from "next/image"

const models = [
	{
		id: 1,
		title: "Cyberpunk Helmet",
		creator: "Alex Chen",
		price: 12.99,
		originalPrice: 19.99,
		rating: 4.8,
		reviews: 234,
		likes: 567,
		downloads: 1200,
		image: "/placeholder.svg?height=300&width=300",
		tags: ["Cyberpunk", "Helmet", "Sci-Fi"],
		featured: true,
	},
	{
		id: 2,
		title: "Fantasy Sword",
		creator: "Maya Studio",
		price: 0,
		rating: 4.9,
		reviews: 456,
		likes: 890,
		downloads: 2300,
		image: "/placeholder.svg?height=300&width=300",
		tags: ["Fantasy", "Weapon", "Medieval"],
		featured: false,
	},
	{
		id: 3,
		title: "Modern Chair",
		creator: "Design Co",
		price: 8.5,
		rating: 4.6,
		reviews: 123,
		likes: 234,
		downloads: 567,
		image: "/placeholder.svg?height=300&width=300",
		tags: ["Furniture", "Modern", "Interior"],
		featured: false,
	},
	{
		id: 4,
		title: "Robot Character",
		creator: "Tech Arts",
		price: 25.0,
		rating: 4.9,
		reviews: 789,
		likes: 1234,
		downloads: 890,
		image: "/placeholder.svg?height=300&width=300",
		tags: ["Robot", "Character", "Animation"],
		featured: true,
	},
	{
		id: 5,
		title: "Crystal Formation",
		creator: "Geo Studio",
		price: 15.99,
		rating: 4.7,
		reviews: 345,
		likes: 678,
		downloads: 456,
		image: "/placeholder.svg?height=300&width=300",
		tags: ["Crystal", "Nature", "Geology"],
		featured: false,
	},
	{
		id: 6,
		title: "Spaceship",
		creator: "Space Designs",
		price: 0,
		rating: 4.8,
		reviews: 567,
		likes: 901,
		downloads: 1567,
		image: "/placeholder.svg?height=300&width=300",
		tags: ["Spaceship", "Sci-Fi", "Vehicle"],
		featured: false,
	},
]

// Sample data for creators
const creators = [
	{
		id: 1,
		name: "Alex Chen",
		specialty: "Character Designer",
		rating: 4.9,
		projects: 56,
		followers: 2345,
		image: "/placeholder.svg?height=300&width=300",
		tags: ["Characters", "Sci-Fi", "Cyberpunk"],
		featured: true,
	},
	{
		id: 2,
		name: "Maya Studio",
		specialty: "Weapon Designer",
		rating: 4.8,
		projects: 78,
		followers: 1890,
		image: "/placeholder.svg?height=300&width=300",
		tags: ["Weapons", "Fantasy", "Medieval"],
		featured: false,
	},
	{
		id: 3,
		name: "Design Co",
		specialty: "Interior Designer",
		rating: 4.7,
		projects: 42,
		followers: 1230,
		image: "/placeholder.svg?height=300&width=300",
		tags: ["Furniture", "Architecture", "Modern"],
		featured: false,
	},
]

// Sample data for agencies
const agencies = [
	{
		id: 1,
		name: "Digital Dimensions",
		specialty: "Full-Service 3D Studio",
		rating: 4.9,
		clients: 120,
		projects: 450,
		employees: 25,
		image: "/placeholder.svg?height=300&width=300",
		tags: ["Animation", "Game Assets", "VR/AR"],
		featured: true,
	},
	{
		id: 2,
		name: "ModelMasters Inc",
		specialty: "Architectural Visualization",
		rating: 4.8,
		clients: 85,
		projects: 320,
		employees: 18,
		image: "/placeholder.svg?height=300&width=300",
		tags: ["Architecture", "Interior", "Commercial"],
		featured: false,
	},
	{
		id: 3,
		name: "FutureCraft Studios",
		specialty: "Character & Animation",
		rating: 4.7,
		clients: 65,
		projects: 210,
		employees: 12,
		image: "/placeholder.svg?height=300&width=300",
		tags: ["Characters", "Animation", "Game Assets"],
		featured: false,
	},
]

const categories = [
	"All Categories",
	"Characters",
	"Vehicles",
	"Architecture",
	"Furniture",
	"Weapons",
	"Nature",
	"Sci-Fi",
	"Fantasy",
]

export default function MarketplacePage() {
	const [searchQuery, setSearchQuery] = useState("")
	const [selectedCategory, setSelectedCategory] = useState("All Categories")
	const [sortBy, setSortBy] = useState("popular")
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
	const [priceFilter, setPriceFilter] = useState("all")
	const [activeTab, setActiveTab] = useState<"products" | "creators" | "agencies">("products")

	const filteredModels = models.filter((model) => {
		const matchesSearch =
			model.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			model.creator.toLowerCase().includes(searchQuery.toLowerCase()) ||
			model.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

		const matchesPrice =
			priceFilter === "all" ||
			(priceFilter === "free" && model.price === 0) ||
			(priceFilter === "paid" && model.price > 0)

		return matchesSearch && matchesPrice
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
					<h1 className="text-4xl font-bold text-white mb-4">3D Model Marketplace</h1>
					<p className="text-slate-400 max-w-2xl mx-auto">
						Discover, buy, and sell amazing 3D models created by talented artists worldwide
					</p>
				</motion.div>
				{/* Tab Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mb-8"
				>
					<div className="flex justify-center gap-4">
						<button
							onClick={() => setActiveTab("products")}
							className={`px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 transform hover:scale-105 ${
								activeTab === "products"
									? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30"
									: "bg-slate-800/70 text-slate-300 hover:bg-slate-700/80"
							}`}
						>
							<div className="flex flex-col items-center">
								<span className="text-lg mb-1">PRODUCT</span>
								<div className={`h-1 w-12 rounded-full ${activeTab === "products" ? "bg-cyan-400" : "bg-transparent"}`} />
							</div>
						</button>
						
						<button
							onClick={() => setActiveTab("creators")}
							className={`px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 transform hover:scale-105 ${
								activeTab === "creators"
									? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/30"
									: "bg-slate-800/70 text-slate-300 hover:bg-slate-700/80"
							}`}
						>
							<div className="flex flex-col items-center">
								<span className="text-lg mb-1">CREATOR</span>
								<div className={`h-1 w-12 rounded-full ${activeTab === "creators" ? "bg-purple-400" : "bg-transparent"}`} />
							</div>
						</button>
						
						<button
							onClick={() => setActiveTab("agencies")}
							className={`px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 transform hover:scale-105 ${
								activeTab === "agencies"
									? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
									: "bg-slate-800/70 text-slate-300 hover:bg-slate-700/80"
							}`}
						>
							<div className="flex flex-col items-center">
								<span className="text-lg mb-1">AGENCY</span>
								<div className={`h-1 w-12 rounded-full ${activeTab === "agencies" ? "bg-indigo-400" : "bg-transparent"}`} />
							</div>
						</button>
					</div>
				</motion.div>

				{/* Search and Filters */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mb-8"
				>
					<Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
						<CardContent className="p-6">
							<div className="flex flex-col lg:flex-row gap-4">
								{/* Search */}
								<div className="flex-1 relative">
									<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
									<Input
										placeholder="Search models, creators, or tags..."
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
										className="pl-10 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
									/>
								</div>

								{/* Filters */}
								<div className="flex gap-2 flex-wrap lg:flex-nowrap">
									<Select value={selectedCategory} onValueChange={setSelectedCategory}>
										<SelectTrigger className="w-full lg:w-48 bg-slate-800 border-slate-600 text-white">
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

									<Select value={priceFilter} onValueChange={setPriceFilter}>
										<SelectTrigger className="w-full lg:w-32 bg-slate-800 border-slate-600 text-white">
											<SelectValue />
										</SelectTrigger>
										<SelectContent className="bg-slate-800 border-slate-600">
											<SelectItem value="all">All Prices</SelectItem>
											<SelectItem value="free">Free</SelectItem>
											<SelectItem value="paid">Paid</SelectItem>
										</SelectContent>
									</Select>

									<Select value={sortBy} onValueChange={setSortBy}>
										<SelectTrigger className="w-full lg:w-32 bg-slate-800 border-slate-600 text-white">
											<SelectValue />
										</SelectTrigger>
										<SelectContent className="bg-slate-800 border-slate-600">
											<SelectItem value="popular">Popular</SelectItem>
											<SelectItem value="newest">Newest</SelectItem>
											<SelectItem value="price-low">Price: Low</SelectItem>
											<SelectItem value="price-high">Price: High</SelectItem>
											<SelectItem value="rating">Rating</SelectItem>
										</SelectContent>
									</Select>

									<div className="flex border border-slate-600 rounded-md bg-slate-800">
										<Button
											variant={viewMode === "grid" ? "default" : "ghost"}
											size="sm"
											onClick={() => setViewMode("grid")}
											className="rounded-r-none"
										>
											<Grid3X3 className="w-4 h-4" />
										</Button>
										<Button
											variant={viewMode === "list" ? "default" : "ghost"}
											size="sm"
											onClick={() => setViewMode("list")}
											className="rounded-l-none"
										>
											<List className="w-4 h-4" />
										</Button>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</motion.div>


				{/* Results */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mb-6"
				>
					<p className="text-slate-400">
						{activeTab === "products" && `Showing ${filteredModels.length} products`}
						{activeTab === "creators" && `Showing ${creators.length} creators`}
						{activeTab === "agencies" && `Showing ${agencies.length} agencies`}
					</p>
				</motion.div>

				{/* Content Grid - Products */}
				{activeTab === "products" && (
					<div
						className={`grid gap-6 ${
							viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
						}`}
					>
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

										{/* Featured Badge */}
										{model.featured && (
											<Badge className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-cyan-400 text-white">
												Featured
											</Badge>
										)}

										{/* Price Badge */}
										<Badge className="absolute bottom-3 right-3 bg-black/80 text-white">
											{model.price === 0 ? "Free" : `$${model.price}`}
										</Badge>
									</div>

									<CardContent className="p-4">
										<h3 className="font-semibold text-white mb-1 truncate">{model.title}</h3>
										<p className="text-sm text-slate-400 mb-2">by {model.creator}</p>

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
											<div className="flex items-center">
												<Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
												<span>{model.rating}</span>
												<span className="ml-1">({model.reviews})</span>
											</div>
											<div className="flex items-center gap-3">
												<span>{model.likes} likes</span>
												<span>{model.downloads} downloads</span>
											</div>
										</div>

										{/* Price and Action */}
										<div className="flex items-center justify-between">
											<div>
												{model.price === 0 ? (
													<span className="font-bold text-green-400">Free</span>
												) : (
													<div className="flex items-center gap-2">
														<span className="font-bold text-yellow-400">${model.price}</span>
														{model.originalPrice && (
															<span className="text-xs text-slate-500 line-through">${model.originalPrice}</span>
														)}
													</div>
												)}
											</div>

											<Button
												size="sm"
												className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0"
											>
												{model.price === 0 ? (
													<>
														<Download className="w-3 h-3 mr-1" />
														Download
													</>
												) : (
													"Buy Now"
												)}
											</Button>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				)}

				{/* Content Grid - Creators */}
        {activeTab === "creators" && (
          <div
            className={`grid gap-6 ${
              viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
            }`}
          >
            {creators.map((creator, index) => (
              <motion.div
                key={creator.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden bg-slate-900/50 border-slate-700 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    <Image
                      src={creator.image || "/placeholder.svg"}
                      alt={creator.name}
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

                    {/* Featured Badge */}
                    {creator.featured && (
                      <Badge className="absolute top-3 left-3 bg-gradient-to-r from-indigo-600 to-cyan-400 text-white">
                        Featured
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-semibold text-white mb-1 truncate">{creator.name}</h3>
                    <p className="text-sm text-slate-400 mb-2">{creator.specialty}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {creator.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-slate-600 text-slate-400">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                        <span>{creator.rating}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span>{creator.projects} projects</span>
                        <span>{creator.followers} followers</span>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-slate-400">Specialty</span>
                        <p className="text-cyan-400 font-medium">{creator.specialty}</p>
                      </div>

                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white border-0"
                      >
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Content Grid - Agencies */}
        {activeTab === "agencies" && (
          <div
            className={`grid gap-6 ${
              viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
            }`}
          >
            {agencies.map((agency, index) => (
              <motion.div
                key={agency.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    <Image
                      src={agency.image || "/placeholder.svg"}
                      alt={agency.name}
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

                    {/* Featured Badge */}
                    {agency.featured && (
                      <Badge className="absolute top-3 left-3 bg-gradient-to-r from-cyan-600 to-blue-400 text-white">
                        Featured
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-semibold text-white mb-1 truncate">{agency.name}</h3>
                    <p className="text-sm text-slate-400 mb-2">{agency.specialty}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {agency.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-slate-600 text-slate-400">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                        <span>{agency.rating}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span>{agency.clients} clients</span>
                        <span>{agency.projects} projects</span>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-slate-400">Team Size</span>
                        <p className="text-blue-400 font-medium">{agency.employees} specialists</p>
                      </div>

                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0"
                      >
                        Contact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

				{/* Load More */}
				<div className="text-center mt-12">
					<Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
						{activeTab === "products" && "Load More Products"}
						{activeTab === "creators" && "Load More Creators"}
						{activeTab === "agencies" && "Load More Agencies"}
					</Button>
				</div>
			</div>
		</div>
	)
}
