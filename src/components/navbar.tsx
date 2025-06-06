"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 w-full z-50 transition-all duration-300",
				isScrolled
					? "bg-background/80 backdrop-blur-md border-b"
					: "bg-transparent text-white"
			)}
		>
			<div className="container flex h-16 items-center justify-between">
				<Link
					href="/"
					className="font-bold text-xl tracking-tight hover:opacity-80 transition-opacity"
				>
					<span className="text-primary">Mancoba </span>Thabethe
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex gap-6 items-center">
					<AnimatePresence>
						{navLinks.map((link, i) => (
							<motion.div
								key={link.href}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.4, delay: i * 0.07 }}
								style={{margin: "1rem 0"}}
							>
								<Link
									href={link.href}
									className={cn(
										`text-sm font-medium transition-colors hover:text-primary my-8`,
										isScrolled ? "text-muted-foreground" : `text-white`
									)}
								>
									{link.label}
								</Link>
							</motion.div>
						))}
					</AnimatePresence>
					<motion.a
						href="/Mancoba-Thabethe-Resume.pdf"
						download
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.4, delay: navLinks.length * 0.07 }}
					>
						<Button size="sm">Resume</Button>
					</motion.a>
				</nav>

				{/* Mobile Menu Button */}
				<Button
					variant="ghost"
					size="icon"
					className="md:hidden"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					{isMobileMenuOpen ? (
						<X className="h-5 w-5" />
					) : (
						<Menu className="h-5 w-5" />
					)}
				</Button>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className={`md:hidden ${
							isScrolled
								? "bg-background/80 backdrop-blur-md border-b"
								: "bg-[#0A0A0A]/5 backdrop-blur-lg text-white"
						}`}
					>
						<nav className="container flex flex-col py-4">
							<AnimatePresence>
								{navLinks.map((link, i) => (
									<motion.div
										key={link.href}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: -20 }}
										transition={{ duration: 0.3, delay: i * 0.07 }}
									>
										<Link
											href={link.href}
											className="py-2 font-medium transition-colors hover:text-primary"
											onClick={() => setIsMobileMenuOpen(false)}
										>
											{link.label}
										</Link>
									</motion.div>
								))}
							</AnimatePresence>
							<motion.a
								href="/Mancoba-Thabethe-Resume.pdf"
								download
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.3, delay: navLinks.length * 0.07 }}
							>
								<Button
									size="sm"
									className="mt-2 w-full"
								>
									Resume
								</Button>
							</motion.a>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
