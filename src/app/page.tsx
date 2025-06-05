"use client"
import { AnimatePresence, motion } from "framer-motion";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Technologies from "@/components/technologies";
import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
	return (
		<main className="min-h-screen bg-background overflow-hidden">
			<Navbar />
			<AnimatePresence mode="wait">
				<motion.div
					key="hero"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
				>
					<Hero />
				</motion.div>
				<motion.div
					key="projects"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
				>
					<Projects />
				</motion.div>
				{/* <motion.div
					key="experience"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
				> */}
					<Experience />
				{/* </motion.div> */}
				<motion.div
					key="technologies"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
				>
					<Technologies />
				</motion.div>
				<motion.div
					key="contact"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
				>
					<Contact />
				</motion.div>
				<Footer />
			</AnimatePresence>
		</main>
	);
}
