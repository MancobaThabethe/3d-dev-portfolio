"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  Html5,
  Css3,
  Javascript,
  ReactLogo,
  Nextjs,
  Typescript,
  Tailwind,
  Nodejs,
  Mongodb,
  Postgresql,
  Git,
  Github,
  Figma,
  Vercel,
} from "./tech-icons"

const technologies = [
	{
		name: "HTML5",
		icon: "/icons/html-5-svgrepo-com.svg",
		category: "frontend",
	},
	{ name: "CSS3", icon: "/icons/css3-svgrepo-com.svg", category: "frontend" },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwindcss-icon-svgrepo-com.svg",
    category: "frontend",
  },
	{
		name: "JavaScript",
		icon: "/icons/javascript-logo-svgrepo-com.svg",
		category: "frontend",
	},
	{
		name: "TypeScript",
		icon: "/icons/typescript-icon-svgrepo-com.svg",
		category: "frontend",
	},
	{
		name: "React",
		icon: "/icons/reactjs-svgrepo-com.svg",
		category: "frontend",
	},
	{
		name: "Next.js",
		icon: "/icons/nextjs-icon-svgrepo-com.svg",
		category: "frontend",
	},
	{
		name: "Node.js",
		icon: "/icons/nodejs-icon-svgrepo-com.svg",
		category: "backend",
	},
  {
    name: "Express.js",
    icon: "/icons/express-svgrepo-com.svg",
    category: "backend",
  },
	{
		name: "MongoDB",
		icon: "/icons/mongo-svgrepo-com.svg",
		category: "backend",
	},
	{
		name: "PostgreSQL",
		icon: "/icons/pgsql-svgrepo-com.svg",
		category: "backend",
	},
	{ name: "Git", icon: "/icons/git-svgrepo-com.svg", category: "tools" },
	{ name: "GitHub", icon: "/icons/github-svgrepo-com.svg", category: "tools" },
	{ name: "Figma", icon: Figma, category: "tools" },
	{
		name: "Vercel",
		icon: "/icons/vercel-icon-svgrepo-com.svg",
		category: "tools",
	},
  {
    name: "Prisma",
    icon: "/icons/prisma-svgrepo-com.svg",
    category: "backend",
  },
  {
    name: "Redis",
    icon: "/icons/redis-svgrepo-com.svg",
    category: "backend",
  },
  {
    name: "Docker",
    icon: "/icons/docker-svgrepo-com.svg",
    category: "backend",
  },
  {
    name: "Kubernetes",
    icon: "/icons/kubernetes-svgrepo-com.svg",
    category: "backend",
  },
  {
    name: "Terraform",
    icon: "/icons/terraform-icon-svgrepo-com.svg",
    category: "backend",
  },
	{
		name: "AWS (certification in progress)",
		icon: "/icons/aws-svgrepo-com.svg",
		category: "backend",
	},
  {
		name: "Zod",
		icon: "/icons/zod-seeklogo.svg",
		category: "tools",
	},
];

function TechIcon({ tech, index, isInView }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              },
            }
          : {}
      }
      className="flex flex-col items-center justify-center gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-16 h-16 flex items-center justify-center rounded-xl 
          bg-background p-2 shadow-sm border border-border/40 
          transition-all duration-300
          ${isHovered ? "border-primary/40 shadow-md shadow-primary/5 scale-110" : ""}
        `}
      >
        {typeof tech.icon === "string" ? (
          <img
            src={tech.icon}
            alt={tech.name}
            className={`w-10 h-10 transition-all duration-300 ${isHovered ? "scale-110" : ""}`}
          />
        ) : (
          <tech.icon
            className={`
              w-10 h-10 transition-all duration-300
              ${isHovered ? "text-primary scale-110" : "text-muted-foreground"}
            `}
          />
        )}
        <motion.div
          className="absolute -bottom-2 left-0 right-0 h-1 mx-auto w-8 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full"
          initial={{ opacity: 0, width: "30%" }}
          animate={{
            opacity: isHovered ? 1 : 0,
            width: isHovered ? "60%" : "30%",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <span className={`text-sm font-medium transition-colors duration-300 text-center ${isHovered ? "text-primary" : ""}`}>
        {tech.name}
      </span>
    </motion.div>
  )
}

export default function Technologies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="technologies"
      className="py-24 md:px-10 bg-gradient-to-b from-background/95 via-background to-muted/30 relative"
    >
      {/* Add decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">My Toolkit</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technologies & Skills</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            The tools, frameworks, and languages I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-16">
          <div className="space-y-8">
            <h3 className="text-xl font-medium text-center">Frontend Development</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 md:gap-12">
              {technologies
                .filter((tech) => tech.category === "frontend")
                .map((tech, index) => (
                  <TechIcon key={tech.name} tech={tech} index={index} isInView={isInView} />
                ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-medium text-center">Backend Development</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 md:gap-12">
              {technologies
                .filter((tech) => tech.category === "backend")
                .map((tech, index) => (
                  <TechIcon key={tech.name} tech={tech} index={index} isInView={isInView} />
                ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-medium text-center">Tools & Platforms</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 md:gap-12">
              {technologies
                .filter((tech) => tech.category === "tools")
                .map((tech, index) => (
                  <TechIcon key={tech.name} tech={tech} index={index} isInView={isInView} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
