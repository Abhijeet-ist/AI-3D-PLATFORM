"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Zap, Globe, Users, Star, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { DemoModal } from "@/components/demo-modal"

const featuredModels = [
  {
    id: 1,
    title: "Cyberpunk Helmet",
    creator: "Alex Chen",
    price: "$12.99",
    likes: 234,
    image: "/placeholder.svg?height=300&width=300",
    style: "Cyberpunk",
  },
  {
    id: 2,
    title: "Fantasy Sword",
    creator: "Maya Studio",
    price: "Free",
    likes: 567,
    image: "/placeholder.svg?height=300&width=300",
    style: "Fantasy",
  },
  {
    id: 3,
    title: "Modern Chair",
    creator: "Design Co",
    price: "$8.50",
    likes: 123,
    image: "/placeholder.svg?height=300&width=300",
    style: "Realistic",
  },
]

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Generation",
    description: "Transform text prompts into stunning 3D models using cutting-edge AI technology",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate high-quality models in seconds, not hours",
  },
  {
    icon: Globe,
    title: "AR/VR Ready",
    description: "All models are optimized for AR/VR experiences and web deployment",
  },
  {
    icon: Users,
    title: "Creator Marketplace",
    description: "Buy, sell, and discover amazing 3D content from talented creators worldwide",
  },
]

export default function HomePage() {
  const [showDemo, setShowDemo] = useState(false)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-400/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered 3D Generation
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Create Stunning{" "}
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  3D Models
                </span>{" "}
                with AI
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
                Transform your ideas into professional 3D models and images using advanced AI. Join thousands of
                creators in the future of digital content creation.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0"
                >
                  <Link href="/generate">
                    Start Creating <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800"
                  onClick={() => setShowDemo(true)}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Models */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Creations</h2>
              <p className="mt-4 text-slate-400">Discover amazing 3D models created by our community</p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredModels.map((model, index) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge className="absolute top-3 right-3 bg-purple-600/80 text-white">{model.style}</Badge>
                    </div>

                    <CardContent className="p-4">
                      <h3 className="font-semibold text-white mb-1">{model.title}</h3>
                      <p className="text-sm text-slate-400 mb-3">by {model.creator}</p>

                      <div className="flex items-center justify-between">
                        <span className="font-bold text-yellow-400">{model.price}</span>
                        <div className="flex items-center text-slate-400">
                          <Star className="w-4 h-4 mr-1" />
                          <span className="text-sm">{model.likes}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Link href="/marketplace">
                  Explore Marketplace <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Powerful Features</h2>
              <p className="mt-4 text-slate-400">Everything you need to create, share, and monetize 3D content</p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-slate-900/30 border-slate-700 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="mx-auto mb-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-sm text-slate-400">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border-purple-500/30 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Something Amazing?</h2>
                  <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                    Join thousands of creators who are already using AI to bring their ideas to life. Start your journey
                    today and unlock unlimited creative possibilities.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0"
                  >
                    <Link href="/generate">
                      Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>

      <DemoModal open={showDemo} onOpenChange={setShowDemo} />
    </>
  )
}
