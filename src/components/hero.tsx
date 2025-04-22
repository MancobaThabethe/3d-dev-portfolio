"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, Html, Text, OrbitControls } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import * as THREE from "three"
import { useMobile } from "@/hooks/use-mobile"

// Custom laptop model with improved screen content
function Laptop(props) {
  const group = useRef()
  const isMobile = useMobile()

  // Create animated code texture
  const CodeScreen = () => {
    const meshRef = useRef()
    const [codeLines] = useState(() => {
			return [
				{ color: "#9333ea", text: "function Portfolio() {" },
				{
					color: "#64748b",
					text: "  const [isAwesome, setIsAwesome] = useState(true);",
				},
				{
					color: "#64748b",
					text: "  const frontend = ['React', 'Three.js', 'Next.js'];",
				},
				{
					color: "#64748b",
					text: "  const backend = ['Nodejs', 'Postgres', 'Express'];",
				},
				{ color: "#94a3b8", text: "" },
				{ color: "#64748b", text: "  useEffect(() => {" },
				{ color: "#64748b", text: "    // Initialize amazing projects" },
				{ color: "#64748b", text: "    loadProjects();" },
				{ color: "#64748b", text: "  }, []);" },
				{ color: "#94a3b8", text: "" },
				{ color: "#64748b", text: "  return (" },
				{ color: "#9333ea", text: "    <Layout>" },
				{ color: "#9333ea", text: "      <Hero />" },
				{ color: "#9333ea", text: "      <Projects data={projects} />" },
				{ color: "#9333ea", text: "      <Contact />" },
				{ color: "#9333ea", text: "    </Layout>" },
				{ color: "#64748b", text: "  );" },
				{ color: "#9333ea", text: "}" },
			];
		});

    const [activeLineIndex, setActiveLineIndex] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveLineIndex((prev) => (prev + 1) % codeLines.length)
      }, 1000)
      return () => clearInterval(interval)
    }, [codeLines.length])

    useFrame(() => {
      if (meshRef.current) {
        // Create a dynamic canvas texture for the code
        const canvas = document.createElement("canvas")
        canvas.width = 520;
				canvas.height = 516;
        const context = canvas.getContext("2d")

        // Fill background
        context.fillStyle = "#1e1e1e"
        context.fillRect(0, 0, canvas.width, canvas.height)

        // Draw code lines
        context.font = "16px monospace"
        codeLines.forEach((line, index) => {
          context.fillStyle = index === activeLineIndex ? "#ffffff" : line.color
          context.fillText(line.text, 20, 40 + index * 24)

          // Draw cursor on active line
          if (index === activeLineIndex) {
            const textWidth = context.measureText(line.text).width
            context.fillStyle = "#ffffff"
            context.fillRect(20 + textWidth + 2, 28 + index * 24, 8, 16)
          }
        })

        // Update texture
        if (meshRef.current.material.map) {
          meshRef.current.material.map.needsUpdate = true
        } else {
          const texture = new THREE.CanvasTexture(canvas)
          meshRef.current.material.map = texture
          meshRef.current.material.needsUpdate = true
        }
      }
    })

    return (
			<mesh
				ref={meshRef} position={[0, 0.9, -0.98]} rotation={[-0.5, 0, 0]}>
				<planeGeometry args={[2.8, 1.8]} />
				<meshStandardMaterial
					emissive="#1e1e1e"
					emissiveIntensity={0.5}
				/>
			</mesh>
		);
  }

  useFrame((state) => {
    if (group.current) {
      const t = state.clock.getElapsedTime()
      // Reduce the rotation amplitude to prevent extreme angles
      group.current.rotation.y = Math.sin(t / 8) * 0.2
      group.current.position.y = Math.sin(t / 2) * 0.03
    }
  })

  // Scale based on device - larger on desktop, smaller on mobile
  const scale = isMobile ? 0.7 : 1.3

  return (
		<group
			ref={group}
			{...props}
			scale={scale}
		>
			{/* Base/Bottom part of laptop */}
			<mesh
				castShadow
				receiveShadow
				position={[0, -0.15, 0.45]}
				rotation={[0.1, 0, 0]}
			>
				<boxGeometry args={[3, 0.1, 2]} />
				<meshStandardMaterial
					color="#333"
					metalness={0.8}
					roughness={0.2}
				/>
			</mesh>

			{/* Keyboard area */}
			<mesh
				castShadow
				receiveShadow
				position={[0, -0.1, 0.5]}
				rotation={[0.1, 0, 0]}
			>
				<boxGeometry args={[2.8, 0.02, 1.6]} />
				<meshStandardMaterial
					color="#222"
					metalness={0.5}
					roughness={0.2}
				/>
			</mesh>

			{/* Trackpad */}
			<mesh
				castShadow
				receiveShadow
				position={[0, -0.15, 1.05]}
				rotation={[0.1, 0, 0]}
			>
				<boxGeometry args={[1.2, 0.02, 0.8]} />
				<meshStandardMaterial
					color="#444"
					metalness={0.5}
					roughness={0.3}
				/>
			</mesh>

			{/* Screen/Lid */}
			<mesh
				castShadow
				receiveShadow
				position={[0, 0.8, -1]}
				rotation={[-0.5, 0, 0]}
			>
				<boxGeometry args={[3, 2, 0.1]} />
				<meshStandardMaterial
					color="#333"
					metalness={0.8}
					roughness={0.2}
				/>
			</mesh>

			{/* Screen display with animated code */}
			<CodeScreen />

			{/* Logo on lid (outside) */}
			<mesh
				position={[0, 0.8, -1]}
				rotation={[-0.5, 0, 0]}
			>
				<circleGeometry args={[0.2, 32]} />
				<meshStandardMaterial
					color="#9333ea"
					emissive="#9333ea"
					emissiveIntensity={0.5}
				/>
			</mesh>
		</group>
	);
}

// Animated particles for background
function Particles({ count = 200 }) {
  const points = useRef()
  const isMobile = useMobile()

  // Reduce particle count on mobile, increase on desktop
  const particleCount = isMobile ? Math.floor(count / 2) : count * 1.5

  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)
  const sizes = new Float32Array(particleCount)

  useEffect(() => {
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 30
      positions[i3 + 1] = (Math.random() - 0.5) * 30
      positions[i3 + 2] = (Math.random() - 0.5) * 30

      const color = new THREE.Color()
      color.setHSL(Math.random() * 0.1 + 0.7, 0.8, 0.6) // Purple hues
      color.toArray(colors, i3)

      sizes[i] = Math.random() * 0.5 + 0.1
    }
  }, [particleCount])

  useFrame((state) => {
    if (points.current) {
      const time = state.clock.getElapsedTime() * 0.1
      points.current.rotation.x = time * 0.05
      points.current.rotation.y = time * 0.075
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={particleCount} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial size={isMobile ? 0.1 : 0.15} vertexColors alphaTest={0.5} transparent depthWrite={false} />
    </points>
  )
}

function FloatingText({ children, ...props }) {
  const ref = useRef()
  const isMobile = useMobile()

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime()
      // Reduce the floating amplitude
      ref.current.position.y = Math.sin(t / 2) / 15
    }
  })

  // Scale text - larger on desktop, smaller on mobile
  const fontSize = isMobile ? 0.6 : 1.9

  return (
    <Text ref={ref} fontSize={fontSize} letterSpacing={-0.05} color="#9333ea" {...props}>
      {children}
    </Text>
  )
}

// Main hero component with enhanced background
export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  // Adjust camera position and FOV for different devices
  // Move camera back on desktop to accommodate larger model
  const cameraPosition = isMobile ? [0, 0, 10] : [0, 0, 12]
  const cameraFOV = isMobile ? 35 : 25

  // Adjust HTML content position
  const htmlPosition = isMobile ? [0, -0.5, 0.3] : [0, 0.7, 0.4]

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black via-[#0a0118] to-[#0f0224] z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>

      {/* Additional desktop-only background elements */}
      {!isMobile && (
        <>
          <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-3xl"></div>
        </>
      )}

      <Canvas
        camera={{
          position: cameraPosition,
          fov: cameraFOV,
          near: 0.1,
          far: 1000,
        }}
        className="w-full h-full z-10"
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} castShadow />

        {/* Background particles */}
        <Particles />

        {/* Use OrbitControls with strict limits */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
        />

        <Float rotationIntensity={0.2} floatIntensity={0.2}>
          <Laptop position={[0, isMobile ? -0.8 : -0.5, 0]} />
          <FloatingText position={[0, isMobile ? 1.3 : 2.2, isMobile ? -0.8 : -1.2]}>DEVELOPER</FloatingText>
          <Html transform wrapperClass="html-screen" distanceFactor={1.5} position={htmlPosition} rotation={[0, 0, 0]}>
            <div
              className={`content-center px-6 sm:px-10 py-4 sm:py-6 rounded-lg bg-black/50 backdrop-blur-sm text-center ${
                isMobile ? "w-[550px] h-[40vh]" : "w-[800px] h-[400px]"
              } max-w-full border border-primary/20 flex flex-col items-center justify-evenly`}
            >
              <h1 className={`${isMobile ? "text-3xl" : "text-6xl"} font-bold text-white mb-2 tracking-wider`}>
                Mancoba Thabethe
              </h1>
              <p className={`text-gray-300 ${isMobile ? "text-xl" : "text-2xl"} mb-4 lg:font-semibold`}>
                Full Stack Developer & 3D Enthusiast <br /> based in Nelspruit, South Africa
              </p>
              <div className="flex justify-center gap-2 sm:gap-4">
                <Button
                  size={"lg"}
                  variant="outline"
                  className="bg-white/10 hover:bg-white hover:text-black border-primary/30 text-white text-xl md:w-[300px] md:h-[70px] md:text-3xl"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Projects
                </Button>
                <Button
                  size={"lg"}
                  className="bg-primary hover:bg-primary/80 text-xl md:w-[300px] md:h-[70px] md:text-3xl"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </Html>
        </Float>

        <Environment preset="night" />
      </Canvas>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Button
            variant="outline"
            size={isMobile ? "icon" : "lg"}
            className="rounded-full bg-background/20 backdrop-blur-sm border-primary/50 hover:bg-background/30"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className={`${isMobile ? "h-4 w-4" : "h-5 w-5"} text-primary`} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
