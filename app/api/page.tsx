"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Key, Zap, Shield, Globe, Copy, ExternalLink } from "lucide-react"
import { useState } from "react"

const endpoints = [
  {
    method: "POST",
    path: "/api/v1/generate",
    description: "Generate a 3D model from text prompt",
    parameters: [
      { name: "prompt", type: "string", required: true, description: "Text description of the model" },
      { name: "style", type: "string", required: false, description: "Style preset (realistic, cartoon, cyberpunk)" },
      { name: "resolution", type: "number", required: false, description: "Output resolution (512, 1024, 2048)" },
      { name: "format", type: "string", required: false, description: "Export format (glb, obj, fbx)" },
    ],
  },
  {
    method: "GET",
    path: "/api/v1/models/{id}",
    description: "Retrieve a specific model by ID",
    parameters: [{ name: "id", type: "string", required: true, description: "Unique model identifier" }],
  },
  {
    method: "GET",
    path: "/api/v1/models",
    description: "List all models for authenticated user",
    parameters: [
      { name: "limit", type: "number", required: false, description: "Number of results per page" },
      { name: "offset", type: "number", required: false, description: "Pagination offset" },
    ],
  },
  {
    method: "DELETE",
    path: "/api/v1/models/{id}",
    description: "Delete a model",
    parameters: [{ name: "id", type: "string", required: true, description: "Unique model identifier" }],
  },
]

const codeExamples = {
  javascript: `// Generate a 3D model
const response = await fetch('https://api.ai3dstudio.com/v1/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'A futuristic robot with glowing blue eyes',
    style: 'cyberpunk',
    resolution: 1024,
    format: 'glb'
  })
});

const result = await response.json();
console.log('Model ID:', result.id);
console.log('Download URL:', result.download_url);`,

  python: `import requests

# Generate a 3D model
url = "https://api.ai3dstudio.com/v1/generate"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "prompt": "A futuristic robot with glowing blue eyes",
    "style": "cyberpunk",
    "resolution": 1024,
    "format": "glb"
}

response = requests.post(url, headers=headers, json=data)
result = response.json()

print(f"Model ID: {result['id']}")
print(f"Download URL: {result['download_url']}")`,

  curl: `curl -X POST "https://api.ai3dstudio.com/v1/generate" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "A futuristic robot with glowing blue eyes",
    "style": "cyberpunk",
    "resolution": 1024,
    "format": "glb"
  }'`,
}

export default function APIPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, language: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(language)
    setTimeout(() => setCopiedCode(null), 2000)
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
              <Code className="w-4 h-4 mr-2" />
              Developer API
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
              Build with{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI3D API
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-300 sm:text-xl">
              Integrate AI-powered 3D model generation directly into your applications with our powerful REST API.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Zap, label: "99.9% Uptime", value: "Reliable" },
              { icon: Globe, label: "Global CDN", value: "Fast" },
              { icon: Shield, label: "Enterprise Security", value: "Secure" },
              { icon: Key, label: "Simple Auth", value: "Easy" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm text-center">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <p className="text-white font-semibold">{stat.value}</p>
                    <p className="text-slate-400 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Getting Started</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Get up and running with the AI3D API in minutes. Follow these simple steps to start generating 3D models
              programmatically.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "1",
                title: "Get API Key",
                description: "Sign up for an account and generate your API key from the dashboard.",
                action: "Get Started",
              },
              {
                step: "2",
                title: "Make Request",
                description: "Send a POST request to our generation endpoint with your prompt.",
                action: "View Docs",
              },
              {
                step: "3",
                title: "Download Model",
                description: "Receive the generated model URL and download your 3D asset.",
                action: "Try Now",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-white font-semibold mb-3">{item.title}</h3>
                    <p className="text-slate-400 mb-6">{item.description}</p>
                    <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                      {item.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Code Examples</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              See how easy it is to integrate AI3D generation into your applications with these code examples.
            </p>
          </motion.div>

          <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
            <Tabs defaultValue="javascript" className="w-full">
              <CardHeader>
                <TabsList className="grid w-full grid-cols-3 bg-slate-800">
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>
              </CardHeader>
              <CardContent>
                {Object.entries(codeExamples).map(([language, code]) => (
                  <TabsContent key={language} value={language}>
                    <div className="relative">
                      <pre className="bg-slate-800 rounded-lg p-6 overflow-x-auto text-sm text-slate-300">
                        <code>{code}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(code, language)}
                        className="absolute top-4 right-4 text-slate-400 hover:text-white"
                      >
                        {copiedCode === language ? "Copied!" : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </CardContent>
            </Tabs>
          </Card>
        </div>
      </section>

      {/* API Reference */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">API Reference</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Complete reference for all available endpoints and parameters.
            </p>
          </motion.div>

          <div className="space-y-6">
            {endpoints.map((endpoint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Badge
                          className={`${
                            endpoint.method === "POST"
                              ? "bg-green-600"
                              : endpoint.method === "GET"
                                ? "bg-blue-600"
                                : endpoint.method === "DELETE"
                                  ? "bg-red-600"
                                  : "bg-gray-600"
                          }`}
                        >
                          {endpoint.method}
                        </Badge>
                        <code className="text-white font-mono">{endpoint.path}</code>
                      </div>
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-slate-400">{endpoint.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-white font-semibold mb-4">Parameters</h4>
                    <div className="space-y-3">
                      {endpoint.parameters.map((param, i) => (
                        <div key={i} className="flex items-start justify-between p-3 bg-slate-800/50 rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <code className="text-purple-400">{param.name}</code>
                              <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                                {param.type}
                              </Badge>
                              {param.required && <Badge className="text-xs bg-red-600">Required</Badge>}
                            </div>
                            <p className="text-slate-400 text-sm">{param.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
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
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Building?</h2>
                <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                  Join thousands of developers who are already using our API to create amazing 3D experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0">
                    Get API Key
                  </Button>
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                    View Documentation
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
