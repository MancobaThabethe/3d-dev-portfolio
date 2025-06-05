"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib";

function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const check = () => setIsMobile(window.innerWidth < 768);
		check();
		window.addEventListener("resize", check);
		return () => window.removeEventListener("resize", check);
	}, []);
	return isMobile;
}

export default function Experience() {
	const ref = useRef(null);
	const isMobile = useIsMobile();

	return (
		<section
			id="experience"
			className="py-24 bg-gradient-to-b from-muted/50 to-background/95 relative"
		>
			{/* Add decorative elements */}
			<div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-muted/20 to-transparent pointer-events-none" />
			<div className="absolute -top-10 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-70 pointer-events-none" />
			<div className="absolute bottom-10 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-70 pointer-events-none" />

			<div className="container px-4 md:px-6 relative z-10">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.2 }}
					transition={{ duration: 0.5 }}
					className="space-y-4 text-center mb-16"
				>
					<div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
						Career Path
					</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Developer Journey
					</h2>
					<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
						A timeline of my developer growth and the impactful roles I've held
					</p>
				</motion.div>

				<div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
					{experiences.map((experience, index) => {
						let initial, animate, exit;
						if (isMobile) {
							initial = { opacity: 0, y: 50 };
							animate = {
								opacity: 1,
								y: 0,
								transition: {
									duration: 0.7,
									delay: index * 0.2,
									ease: [0.22, 1, 0.36, 1],
								},
							};
							exit = {
								opacity: 0,
								y: -50,
								transition: { duration: 0.5 },
							};
						} else {
							if (index % 2 === 0) {
								// Even index: fade in from right, fade out to left
								initial = { opacity: 0, x: 50 };
								animate = {
									opacity: 1,
									x: 0,
									transition: {
										duration: 0.7,
										delay: index * 0.2,
										ease: [0.22, 1, 0.36, 1],
									},
								};
								exit = {
									opacity: 0,
									x: -50,
									transition: { duration: 0.5 },
								};
							} else {
								// Odd index: fade in from left, fade out to right
								initial = { opacity: 0, x: -50 };
								animate = {
									opacity: 1,
									x: 0,
									transition: {
										duration: 0.7,
										delay: index * 0.2,
										ease: [0.22, 1, 0.36, 1],
									},
								};
								exit = {
									opacity: 0,
									x: 50,
									transition: { duration: 0.5 },
								};
							}
						}
						return (
							<motion.div
								key={experience.id}
								initial={initial}
								whileInView={animate}
								exit={exit}
								viewport={{ once: false, amount: 0.3 }}
								className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
							>
								<div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-background shadow-md shadow-primary/5 z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
									<span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
								</div>
								<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
									<Card className="border border-border/40 bg-background/80 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
										<CardHeader>
											<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
												<div>
													<CardTitle className="text-xl tracking-tight">
														{experience.role}
													</CardTitle>
													<CardDescription className="text-base">
														{experience.company} | {experience.period}
													</CardDescription>
												</div>
												<Badge
													variant="outline"
													className="w-fit border-primary/30 bg-primary/5 text-primary"
												>
													{index === 0 ? "Current" : `${index} year`}
												</Badge>
											</div>
										</CardHeader>
										<CardContent className="space-y-4">
											<p className="text-muted-foreground">
												{experience.description}
											</p>

											<div className="space-y-2">
												<h4 className="text-sm font-medium">
													Key Achievements:
												</h4>
												<ul className="space-y-1 text-sm text-muted-foreground">
													{experience.achievements.map((achievement, i) => (
														<li
															key={i}
															className="flex items-start"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5"
															>
																<path
																	fillRule="evenodd"
																	d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
																	clipRule="evenodd"
																/>
															</svg>
															{achievement}
														</li>
													))}
												</ul>
											</div>

											<div className="flex flex-wrap gap-2 pt-2">
												{experience.skills.map((skill) => (
													<Badge
														key={skill}
														variant="secondary"
														className="bg-secondary/50"
													>
														{skill}
													</Badge>
												))}
											</div>
										</CardContent>
									</Card>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
