"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Sparkles, Download, Settings, CuboidIcon as Cube, Loader2 } from "lucide-react"
import { ModelViewer } from "@/components/model-viewer"

const stylePresets = [
  { id: "realistic", name: "Realistic", color: "bg-blue-500" },
  { id: "cartoon", name: "Cartoon", color: "bg-green-500" },
  { id: "cyberpunk", name: "Cyberpunk", color: "bg-purple-500" },
  { id: "voxel", name: "Voxel", color: "bg-orange-500" },
  { id: "lowpoly", name: "Low Poly", color: "bg-pink-500" },
]

export default function GeneratePage() {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedModel, setGeneratedModel] = useState<string | null>(null)
  const [selectedStyle, setSelectedStyle] = useState("realistic")
  const [polyCount, setPolyCount] = useState([5000])
  const [resolution, setResolution] = useState("1024")
  const [outputFormat, setOutputFormat] = useState("glb")

  const handleGenerate = async () => {
    setIsGenerating(true)
    // Simulate API call
    setTimeout(() => {
      setGeneratedModel("/assets/3d/duck.glb")
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">AI 3D Model Generator</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Transform your ideas into stunning 3D models using advanced AI technology. Customize every aspect to match
            your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Generation Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
                  Generation Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="text" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-slate-800">
                    <TabsTrigger value="text" className="data-[state=active]:bg-purple-600">
                      Text to 3D
                    </TabsTrigger>
                    <TabsTrigger value="image" className="data-[state=active]:bg-purple-600">
                      Image + Text
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="text" className="space-y-4">
                    <div>
                      <Label htmlFor="prompt" className="text-white">
                        Describe your 3D model
                      </Label>
                      <Textarea
                        id="prompt"
                        placeholder="A futuristic robot with glowing blue eyes, metallic armor, standing in a heroic pose..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="mt-2 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                        rows={4}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="image" className="space-y-4">
                    <div>
                      <Label className="text-white">Upload Reference Image</Label>
                      <div className="mt-2 border-2 border-dashed border-slate-600 rounded-lg p-8 text-center hover:border-purple-500 transition-colors">
                        <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                        <p className="text-slate-400">Drag & drop an image or click to browse</p>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="image-prompt" className="text-white">
                        Additional Description
                      </Label>
                      <Textarea
                        id="image-prompt"
                        placeholder="Enhance the uploaded image with..."
                        className="mt-2 bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                        rows={3}
                      />
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Style Selection */}
                <div>
                  <Label className="text-white mb-3 block">Style</Label>
                  <div className="flex flex-wrap gap-2">
                    {stylePresets.map((style) => (
                      <Badge
                        key={style.id}
                        variant={selectedStyle === style.id ? "default" : "outline"}
                        className={`cursor-pointer transition-all ${
                          selectedStyle === style.id
                            ? "bg-purple-600 text-white"
                            : "border-slate-600 text-slate-300 hover:border-purple-500"
                        }`}
                        onClick={() => setSelectedStyle(style.id)}
                      >
                        <div className={`w-2 h-2 rounded-full ${style.color} mr-2`} />
                        {style.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Advanced Settings */}
                <div className="space-y-4 pt-4 border-t border-slate-700">
                  <div className="flex items-center text-white mb-2">
                    <Settings className="w-4 h-4 mr-2" />
                    Advanced Settings
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-white">Output Format</Label>
                      <Select value={outputFormat} onValueChange={setOutputFormat}>
                        <SelectTrigger className="mt-2 bg-slate-800 border-slate-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600">
                          <SelectItem value="glb">GLB</SelectItem>
                          <SelectItem value="obj">OBJ</SelectItem>
                          <SelectItem value="fbx">FBX</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-white">Resolution</Label>
                      <Select value={resolution} onValueChange={setResolution}>
                        <SelectTrigger className="mt-2 bg-slate-800 border-slate-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600">
                          <SelectItem value="512">512px</SelectItem>
                          <SelectItem value="1024">1024px</SelectItem>
                          <SelectItem value="2048">2048px</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-white">Polygon Count: {polyCount[0].toLocaleString()}</Label>
                    <Slider
                      value={polyCount}
                      onValueChange={setPolyCount}
                      max={50000}
                      min={1000}
                      step={1000}
                      className="mt-2"
                    />
                  </div>
                </div>

                <Button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate 3D Model
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Preview Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Cube className="w-5 h-5 mr-2 text-cyan-400" />
                  3D Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="h-96">
                {isGenerating ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <Loader2 className="w-12 h-12 text-purple-400 animate-spin mx-auto mb-4" />
                      <p className="text-slate-400">Generating your 3D model...</p>
                    </div>
                  </div>
                ) : generatedModel ? (
                  <div className="h-full">
                    <ModelViewer modelUrl={generatedModel} />
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" className="flex-1 border-slate-600 text-slate-300">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white border-0">
                        Save to Gallery
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full border-2 border-dashed border-slate-600 rounded-lg">
                    <div className="text-center">
                      <Cube className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                      <p className="text-slate-400">Your 3D model will appear here</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
