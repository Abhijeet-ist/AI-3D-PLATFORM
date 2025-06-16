"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Zap, Globe, Users, Target, Heart, Award, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const stats = [
  { label: "Active Creators", value: "50K+", icon: Users },
  { label: "Models Generated", value: "2M+", icon: Sparkles },
  { label: "Countries", value: "120+", icon: Globe },
  { label: "AI Models", value: "15+", icon: Zap },
]

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    bio: "Former AI researcher at Google, passionate about democratizing 3D creation",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Kim",
    role: "CTO & Co-Founder",
    bio: "Ex-Meta engineer specializing in computer graphics and machine learning",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Marcus Johnson",
    role: "Head of AI",
    bio: "PhD in Computer Vision, leading our AI model development and research",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Design",
    bio: "Award-winning UX designer focused on making AI accessible to everyone",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
  },
]

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We push the boundaries of what's possible with AI and 3D technology",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Our platform is built by creators, for creators, with community at its heart",
  },
  {
    icon: Heart,
    title: "Accessibility",
    description: "Making professional 3D creation tools accessible to everyone, regardless of skill level",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in AI model quality and user experience",
  },
]

const milestones = [
  {
    year: "2022",
    title: "Company Founded",
    description: "Started with a vision to democratize 3D content creation using AI",
  },
  {
    year: "2023",
    title: "Beta Launch",
    description: "Released our first AI model to a select group of creators",
  },
  {
    year: "2023",
    title: "Series A Funding",
    description: "Raised $15M to accelerate development and expand our team",
  },
  {
    year: "2024",
    title: "Public Launch",
    description: "Opened our platform to creators worldwide with marketplace integration",
  },
]

export default function AboutPage() {
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
              <Sparkles className="w-4 h-4 mr-2" />
              About AI3D Studio
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
              Empowering the{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Future of Creation
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-300 sm:text-xl">
              We're building the world's most advanced AI-powered 3D creation platform, making professional-quality 3D
              content accessible to everyone. Our mission is to democratize creativity and unlock human potential
              through cutting-edge technology.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-slate-300 text-lg mb-6">
                We believe that creativity should not be limited by technical barriers. Our AI-powered platform enables
                anyone to bring their ideas to life in 3D, regardless of their technical background or artistic
                training.
              </p>
              <p className="text-slate-300 text-lg mb-8">
                By combining cutting-edge artificial intelligence with intuitive design, we're creating a future where
                3D content creation is as simple as describing your vision in words.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0"
              >
                <Link href="/generate">
                  Start Creating <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-cyan-400/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="w-24 h-24 text-purple-400 mx-auto mb-4" />
                  <p className="text-white text-xl font-semibold">AI-Powered Creation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the culture of our company
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-slate-900/30 border-slate-700 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-lg flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-sm text-slate-400">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We're a diverse team of engineers, designers, and AI researchers passionate about pushing the boundaries
              of what's possible
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/30 border-slate-700 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-purple-400 text-sm mb-3">{member.role}</p>
                    <p className="text-slate-400 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-slate-400">Key milestones in our mission to revolutionize 3D creation</p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <Badge className="bg-purple-600 text-white">{milestone.year}</Badge>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">{milestone.title}</h3>
                  <p className="text-slate-400">{milestone.description}</p>
                </div>
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
                <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
                <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                  Be part of the future of 3D creation. Whether you're a creator, developer, or just curious about AI,
                  we'd love to have you on this journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0"
                  >
                    <Link href="/auth/signup">Start Creating</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                    <Link href="/careers">View Careers</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
