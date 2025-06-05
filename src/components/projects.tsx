"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Github,
	ExternalLink,
	X,
	ChevronLeft,
	ChevronRight,
	Layers,
	Calendar,
	Code,
} from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { projects } from "@/lib";

function ProjectModal({ project, isOpen, onClose }) {
	const isMobile = useMobile();
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const images = [project.image, ...project.additionalImages];

	const nextImage = () => {
		setCurrentImageIndex((prev) => (prev + 1) % images.length);
	};

	const prevImage = () => {
		setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-hidden"
					onClick={onClose}
				>
					<motion.div
						initial={{ scale: 0.9, opacity: 0, y: 20 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0.9, opacity: 0, y: 20 }}
						transition={{ type: "spring", damping: 25, stiffness: 300 }}
						className="bg-background border border-border/40 rounded-xl shadow-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Header with close button */}
						<div className="relative">
							<div className="absolute top-4 right-4 z-10">
								<Button
									variant="ghost"
									size="icon"
									className="rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40"
									onClick={onClose}
								>
									<X className="h-5 w-5" />
								</Button>
							</div>

							{/* Image carousel */}
							<div className="relative aspect-video">
								<Image
									src={images[currentImageIndex] || "/placeholder.svg"}
									alt={`${project.title} - Image ${currentImageIndex + 1}`}
									fill
									className="p-4 md:p-8 rounded-xl"
								/>

								{/* Image navigation */}
								{images.length > 1 && (
									<>
										<Button
											variant="ghost"
											size="icon"
											className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40"
											onClick={(e) => {
												e.stopPropagation();
												prevImage();
											}}
										>
											<ChevronLeft className="h-5 w-5" />
										</Button>
										<Button
											variant="ghost"
											size="icon"
											className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40"
											onClick={(e) => {
												e.stopPropagation();
												nextImage();
											}}
										>
											<ChevronRight className="h-5 w-5" />
										</Button>

										{/* Image indicators */}
										<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
											{images.map((_, index) => (
												<button
													key={index}
													className={`w-2 h-2 rounded-full ${
														index === currentImageIndex
															? "bg-primary"
															: "bg-background/50"
													}`}
													onClick={(e) => {
														e.stopPropagation();
														setCurrentImageIndex(index);
													}}
												/>
											))}
										</div>
									</>
								)}
							</div>
						</div>

						{/* Content */}
						<div className="p-6">
							<h2 className="text-2xl font-bold mb-2">{project.title}</h2>

							<div className="flex flex-wrap gap-2 mb-4">
								{project.tags.map((tag) => (
									<Badge
										key={tag}
										variant="secondary"
										className="bg-secondary/50"
									>
										{tag}
									</Badge>
								))}
							</div>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
								<div className="flex items-center gap-2">
									<Calendar className="h-5 w-5 text-primary" />
									<div>
										<h3 className="text-sm font-medium">Date</h3>
										<p className="text-sm text-muted-foreground">
											{project.date}
										</p>
									</div>
								</div>

								<div className="flex items-center gap-2">
									<Code className="h-5 w-5 text-primary" />
									<div>
										<h3 className="text-sm font-medium">Role</h3>
										<p className="text-sm text-muted-foreground">
											{project.role}
										</p>
									</div>
								</div>

								<div className="flex items-center gap-2">
									<Layers className="h-5 w-5 text-primary" />
									<div>
										<h3 className="text-sm font-medium">Type</h3>
										<p className="text-sm text-muted-foreground">
											Full Stack Application
										</p>
									</div>
								</div>
							</div>

							<div className="space-y-4 mb-6">
								<h3 className="text-lg font-medium">Overview</h3>
								<p className="text-muted-foreground">
									{project.longDescription}
								</p>
							</div>

							<div className="space-y-4 mb-6">
								<h3 className="text-lg font-medium">Key Features</h3>
								<ul className="space-y-2">
									{project.features.map((feature, index) => (
										<li
											key={index}
											className="flex items-start gap-2"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												className="h-5 w-5 text-primary shrink-0 mt-0.5"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
													clipRule="evenodd"
												/>
											</svg>
											<span className="text-muted-foreground">{feature}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="space-y-4 mb-6">
								<h3 className="text-lg font-medium">Challenges & Solutions</h3>
								<p className="text-muted-foreground">{project.challenges}</p>
							</div>

							<div className="flex flex-wrap gap-4 pt-2">
								{project?.site ? (
									<Button
										asChild
										className="gap-2"
									>
										<a
											href={project.site}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink className="h-4 w-4" />
											Live Site
										</a>
									</Button>
								) : null}
								{project?.demo ? (
									<Button
										asChild
										className="gap-2"
									>
										<a
											href={project.demo}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink className="h-4 w-4" />
											Live Demo
										</a>
									</Button>
								) : null}
								{project?.github ? (
									<Button
										asChild
										className="gap-2"
									>
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink className="h-4 w-4" />
											Github
										</a>
									</Button>
								) : null}
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default function Projects() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });
	const [selectedProject, setSelectedProject] = useState(null);

	const openProjectModal = (project) => {
		setSelectedProject(project);
		// Prevent body scrolling when modal is open
		document.body.style.overflow = "hidden";
	};

	const closeProjectModal = () => {
		setSelectedProject(null);
		// Restore body scrolling
		document.body.style.overflow = "auto";
	};

	return (
		<section
			id="projects"
			className="py-24 px-4 lg:px-8 bg-gradient-to-b from-background via-background/95 to-muted/50"
		>
			<div className="container px-4 md:px-6">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.5 }}
					className="space-y-4 text-center mb-16"
				>
					<div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
						My Work
					</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Featured Projects
					</h2>
					<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
						Explore my latest work and personal projects that showcase my skills
						and passion
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<ProjectCard
							key={project.id}
							project={project}
							index={index}
							isInView={isInView}
							onOpenModal={() => openProjectModal(project)}
						/>
					))}
				</div>

				<div className="mt-16 text-center">
					<Button
						variant="default"
						size="lg"
						className="group"
						asChild
					>
						<a
							href="https://github.com/MancobaThabethe?tab=repositories"
							target="_blank"
							rel="noopener noreferrer"
							className="flex gap-2 items-center"
						>
							View All Projects
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
							>
								<path d="M5 12h14" />
								<path d="m12 5 7 7-7 7" />
							</svg>
						</a>
					</Button>
				</div>
			</div>

			{/* Project Modal */}
			{selectedProject && (
				<ProjectModal
					project={selectedProject}
					isOpen={!!selectedProject}
					onClose={closeProjectModal}
				/>
			)}
		</section>
	);
}

function ProjectCard({ project, index, isInView, onOpenModal }) {
	const [isHovered, setIsHovered] = useState(false);
	const cardRef = useRef(null);
	const isCardInView = useInView(cardRef, { once: false, amount: 0.3 }); // animate every scroll

	return (
		<motion.div
			ref={cardRef}
			initial={{ opacity: 0, y: 50 }}
			animate={
				isCardInView
					? {
							opacity: 1,
							y: 0,
							transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
					  }
					: { opacity: 0, y: 50 }
			}
			exit={{ opacity: 0, y: 50 }}
			viewport={{ once: false, amount: 0.3 }}
		>
			<Card
				className="overflow-hidden border border-border/40 bg-background/80 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				style={{
					transform: isHovered ? "translateY(-12px)" : "translateY(0px)",
					transition: "transform 0.3s ease-out",
				}}
				onClick={onOpenModal}
			>
				<div className="relative aspect-video overflow-hidden">
					<div
						className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-0 transition-opacity duration-300"
						style={{ opacity: isHovered ? 0.6 : 0 }}
					/>
					<Image
						src={project.image || "/placeholder.svg"}
						alt={project.title}
						fill
						className="object-cover transition-transform duration-700 ease-out"
						style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
					/>
					{isHovered && (
						<motion.div
							className="absolute bottom-4 right-4 z-20"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.2 }}
						>
							<Button
								size="sm"
								className="bg-primary hover:bg-primary/80"
							>
								View Details
							</Button>
						</motion.div>
					)}
				</div>
				<CardHeader>
					<CardTitle className="text-xl tracking-tight">
						{project.title}
					</CardTitle>
					<CardDescription className="line-clamp-2">
						{project.description}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex flex-wrap gap-2">
						{project.tags.map((tag) => (
							<Badge
								key={tag}
								variant="secondary"
								className="bg-secondary/50 hover:bg-secondary transition-colors"
							>
								{tag}
							</Badge>
						))}
					</div>
				</CardContent>
				<CardFooter className="flex justify-between border-t border-border/30 bg-muted/30 py-3">
					<Button
						variant="ghost"
						size="sm"
						className="gap-1 text-primary hover:text-primary hover:bg-primary/10"
					>
						<span>Details</span>
					</Button>
					{project?.github ? (
						<Button
							variant="ghost"
							size="sm"
							asChild
							className="gap-1 text-muted-foreground hover:text-foreground"
						>
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								onClick={(e) => e.stopPropagation()}
							>
								<Github className="h-4 w-4" />
								Code
							</a>
						</Button>
					) : null}
				</CardFooter>
			</Card>
		</motion.div>
	);
}
