"use client"

import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei"
import { motion } from "framer-motion"

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  const modelRef = useRef<any>()

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return <primitive ref={modelRef} object={scene} scale={2} />
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
        <p className="text-slate-400 text-sm">Loading 3D model...</p>
      </div>
    </div>
  )
}

interface ModelViewerProps {
  modelUrl: string
}

export function ModelViewer({ modelUrl }: ModelViewerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full rounded-lg overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="w-full h-full">
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />

        <Suspense fallback={<LoadingFallback />}>
          <Model url={modelUrl} />
          <Environment preset="studio" />
          <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
        </Suspense>

        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} minDistance={2} maxDistance={10} />
      </Canvas>
    </motion.div>
  )
}
