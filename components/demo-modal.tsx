"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  X,
  Sparkles,
  Zap,
  Globe,
  Users,
  SkipForward,
  SkipBack,
} from "lucide-react"

interface DemoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const demoSteps = [
  {
    title: "AI-Powered Generation",
    description: "Watch as our AI transforms simple text prompts into stunning 3D models in seconds",
    duration: "2:15",
    thumbnail: "/placeholder.svg?height=200&width=300",
    content:
      "In this demo, you'll see how easy it is to generate a 3D model using just a text description. Simply type 'futuristic robot with glowing eyes' and watch the magic happen.",
  },
  {
    title: "Customization Options",
    description: "Explore the extensive customization options including style, resolution, and polygon count",
    duration: "1:45",
    thumbnail: "/placeholder.svg?height=200&width=300",
    content:
      "Discover all the ways you can customize your 3D models. From artistic styles like cyberpunk and cartoon to technical settings like resolution and polygon count.",
  },
  {
    title: "3D Viewer & Export",
    description: "Interact with your models in our advanced 3D viewer and export in multiple formats",
    duration: "1:30",
    thumbnail: "/placeholder.svg?height=200&width=300",
    content:
      "See how our interactive 3D viewer lets you examine your models from every angle, and learn about the various export formats available for different use cases.",
  },
  {
    title: "Marketplace Integration",
    description: "Discover how to buy, sell, and share your creations in our vibrant marketplace",
    duration: "2:00",
    thumbnail: "/placeholder.svg?height=200&width=300",
    content:
      "Learn how to monetize your creations by selling them in our marketplace, or discover amazing models created by other talented artists in our community.",
  },
]

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Advanced AI models for high-quality generation",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate models in seconds, not hours",
  },
  {
    icon: Globe,
    title: "AR/VR Ready",
    description: "Optimized for immersive experiences",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join thousands of creators worldwide",
  },
]

export function DemoModal({ open, onOpenChange }: DemoModalProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false)
            return 100
          }
          return prev + 1
        })
      }, 100)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleNext = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1)
      setProgress(0)
      setIsPlaying(false)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setProgress(0)
      setIsPlaying(false)
    }
  }

  const handleStepSelect = (index: number) => {
    setCurrentStep(index)
    setProgress(0)
    setIsPlaying(false)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`bg-slate-900 border-slate-700 p-0 overflow-hidden ${
          isFullscreen ? "max-w-[95vw] max-h-[95vh]" : "max-w-6xl max-h-[90vh]"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <DialogTitle className="text-white text-xl">Platform Demo</DialogTitle>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={toggleFullscreen} className="text-slate-400 hover:text-white">
                <Maximize className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onOpenChange(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Main Video Area */}
            <div className="flex-1 flex flex-col">
              {/* Video Player */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 aspect-video flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-400/20" />

                {/* Demo Content */}
                <div className="relative z-10 flex items-center justify-center h-full p-8">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl"
                  >
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                      {isPlaying ? (
                        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Play className="w-12 h-12 text-white ml-1" />
                      )}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{demoSteps[currentStep].title}</h3>
                    <p className="text-slate-300 text-lg mb-6">{demoSteps[currentStep].description}</p>
                    <p className="text-slate-400">{demoSteps[currentStep].content}</p>
                  </motion.div>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center justify-between text-white mb-2">
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handlePrevious}
                        disabled={currentStep === 0}
                        className="text-white hover:bg-white/20"
                      >
                        <SkipBack className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handlePlayPause}
                        className="text-white hover:bg-white/20"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleNext}
                        disabled={currentStep === demoSteps.length - 1}
                        className="text-white hover:bg-white/20"
                      >
                        <SkipForward className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsMuted(!isMuted)}
                        className="text-white hover:bg-white/20"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </Button>
                      <span className="text-sm">{demoSteps[currentStep].duration}</span>
                    </div>
                    <div className="text-sm text-slate-300">
                      {currentStep + 1} of {demoSteps.length}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-white/20 rounded-full h-1">
                    <motion.div
                      className="bg-gradient-to-r from-purple-400 to-cyan-400 h-1 rounded-full"
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </div>
              </div>

              {/* Step Navigation */}
              <div className="p-4 border-t border-slate-700">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {demoSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleStepSelect(index)}
                      className={`cursor-pointer p-3 rounded-lg border transition-all ${
                        currentStep === index
                          ? "border-purple-500 bg-purple-500/10"
                          : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
                      }`}
                    >
                      <div className="aspect-video bg-slate-700 rounded mb-2 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-cyan-400/20 flex items-center justify-center">
                          <Play className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <h4 className="text-white text-sm font-medium mb-1 truncate">{step.title}</h4>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                          {step.duration}
                        </Badge>
                        {currentStep === index && <Badge className="text-xs bg-purple-600">Playing</Badge>}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-80 border-l border-slate-700 flex flex-col">
              <ScrollArea className="flex-1">
                <div className="p-4 space-y-6">
                  {/* Features Grid */}
                  <div>
                    <h3 className="text-white font-semibold mb-4">Key Features</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-center p-3 bg-slate-800/50 rounded-lg border border-slate-700"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <feature.icon className="w-4 h-4 text-white" />
                          </div>
                          <h4 className="text-white font-medium text-sm mb-1">{feature.title}</h4>
                          <p className="text-slate-400 text-xs">{feature.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Demo Info */}
                  <div>
                    <h3 className="text-white font-semibold mb-4">About This Demo</h3>
                    <div className="space-y-3 text-sm text-slate-400">
                      <p>
                        This interactive demo showcases the core features of AI3D Studio, from AI-powered generation to
                        marketplace integration.
                      </p>
                      <p>
                        Each section demonstrates real workflows that you'll use when creating and sharing 3D content on
                        our platform.
                      </p>
                      <div className="pt-3 border-t border-slate-700">
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                          <span>Total Duration</span>
                          <span>7:30</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span>Sections</span>
                          <span>{demoSteps.length}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Related Links */}
                  <div>
                    <h3 className="text-white font-semibold mb-4">Learn More</h3>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-800"
                      >
                        📚 Documentation
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-800"
                      >
                        🎯 Tutorials
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-800"
                      >
                        💬 Community
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollArea>

              {/* CTA Footer */}
              <div className="p-4 border-t border-slate-700 space-y-3">
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0"
                  onClick={() => {
                    onOpenChange(false)
                    window.location.href = "/auth/signup"
                  }}
                >
                  Start Creating Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-800"
                  onClick={() => {
                    onOpenChange(false)
                    window.location.href = "/generate"
                  }}
                >
                  Try Generator
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
