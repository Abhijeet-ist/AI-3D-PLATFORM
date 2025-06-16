"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles, Zap, Globe, Users, Palette, Download, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Generation",
    description: "Transform text prompts into stunning 3D models using cutting-edge AI technology",
    details: [
      "Advanced neural networks for high-quality output",
      "Multiple AI models for different styles",
      "Real-time generation in seconds",
      "Continuous model improvements",
    ],
  },
  {
    icon: Zap,
    title: "Lightning Fast Processing",
    description: "Generate high-quality models in seconds, not hours",
    details: [
      "GPU-accelerated processing",
      "Optimized algorithms for speed",
      "Batch processing capabilities",
      "Priority queue for Pro users",
    ],
  },
  {
    icon: Palette,
    title: "Style Customization",
    description: "Choose from multiple artistic styles and customize every aspect",
    details: [
      "Realistic, cartoon, cyberpunk styles",
      "Custom color palettes",
      "Material property control",
      "Lighting adjustments",
    ],
  },
  {
    icon: Download,
    title: "Multiple Export Formats",
    description: "Export your models in industry-standard formats",
    details: ["GLB, OBJ, FBX formats", "Optimized for web and mobile", "High-resolution textures", "Animation support"],
  },
  {
    icon: Globe,
    title: "AR/VR Ready",
    description: "All models are optimized for immersive experiences",
    details: ["WebXR compatibility", "Mobile AR optimization", "VR headset support", "Real-time rendering"],
  },
  {
    icon: Users,
    title: "Collaborative Platform",
    description: "Share, collaborate, and monetize your creations",
    details: ["Team workspaces", "Version control", "Comment system", "Revenue sharing"],
  },
]

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: ["5 models per month", "Basic styles", "Standard resolution", "Community support"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For serious creators",
    features: [
      "Unlimited models",
      "All styles & features",
      "4K resolution",
      "Priority processing",
      "Advanced customization",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "API access",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function FeaturesPage() {
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
              Platform Features
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Create Amazing
              </span>{" "}
              3D Content
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-300 sm:text-xl">
              Discover the powerful features that make AI3D Studio the most advanced platform for AI-powered 3D content
              creation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-center text-sm text-slate-300">
                          <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Tabs defaultValue="generation" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 bg-slate-900/50 border border-slate-700">
              <TabsTrigger value="generation" className="data-[state=active]:bg-purple-600">
                Generation
              </TabsTrigger>
              <TabsTrigger value="customization" className="data-[state=active]:bg-purple-600">
                Customization
              </TabsTrigger>
              <TabsTrigger value="collaboration" className="data-[state=active]:bg-purple-600">
                Collaboration
              </TabsTrigger>
              <TabsTrigger value="export" className="data-[state=active]:bg-purple-600">
                Export
              </TabsTrigger>
            </TabsList>

            <TabsContent value="generation" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">AI-Powered Generation</h3>
                  <p className="text-slate-300 text-lg mb-6">
                    Our advanced AI models can understand complex prompts and generate high-quality 3D models that match
                    your vision perfectly.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      Text-to-3D generation in seconds
                    </li>
                    <li className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      Image-guided model creation
                    </li>
                    <li className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      Style transfer capabilities
                    </li>
                    <li className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      Iterative refinement
                    </li>
                  </ul>
                  <Button asChild className="bg-gradient-to-r from-purple-600 to-purple-700 text-white border-0">
                    <Link href="/generate">
                      Try Generation <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-cyan-400/20 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-24 h-24 text-purple-400" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="customization" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-cyan-600/20 to-purple-400/20 rounded-2xl flex items-center justify-center">
                    <Palette className="w-24 h-24 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Advanced Customization</h3>
                  <p className="text-slate-300 text-lg mb-6">
                    Fine-tune every aspect of your 3D models with our comprehensive customization tools and style
                    options.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      Multiple artistic styles
                    </li>
                    <li className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      Material property control
                    </li>
                    <li className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      Lighting adjustments
                    </li>
                    <li className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      Resolution settings
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="collaboration" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Team Collaboration</h3>
                  <p className="text-slate-300 text-lg mb-6">
                    Work together with your team, share feedback, and collaborate on projects in real-time.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      Shared workspaces
                    </li>
                    <li className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      Real-time comments
                    </li>
                    <li className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      Version control
                    </li>
                    <li className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      Permission management
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-green-600/20 to-blue-400/20 rounded-2xl flex items-center justify-center">
                    <Users className="w-24 h-24 text-green-400" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="export" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-yellow-600/20 to-orange-400/20 rounded-2xl flex items-center justify-center">
                    <Download className="w-24 h-24 text-yellow-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Flexible Export Options</h3>
                  <p className="text-slate-300 text-lg mb-6">
                    Export your models in multiple formats optimized for different platforms and use cases.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      GLB, OBJ, FBX formats
                    </li>
                    <li className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      Web-optimized versions
                    </li>
                    <li className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      High-resolution textures
                    </li>
                    <li className="flex items-center text-slate-300">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      Animation support
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Select the perfect plan for your needs and start creating amazing 3D content today.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`relative h-full bg-slate-900/50 border-slate-700 backdrop-blur-sm ${
                    plan.popular ? "border-purple-500 ring-2 ring-purple-500/20" : ""
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400">/{plan.period}</span>
                    </div>
                    <p className="text-slate-400 mt-2">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-slate-300">
                          <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0"
                          : "border-slate-600 text-slate-300 hover:bg-slate-800"
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
