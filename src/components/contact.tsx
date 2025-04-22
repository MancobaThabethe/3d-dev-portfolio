"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })

    setIsSubmitting(false)
    e.target.reset()
  }

  return (
		<section
			id="contact"
			className="py-24 bg-gradient-to-b from-muted/30 to-background relative"
		>
			{/* Add decorative elements */}
			<div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-muted/20 to-transparent pointer-events-none" />
			<div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
			<div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

			<div className="container px-4 md:px-6 relative z-10">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.5 }}
					className="space-y-4 text-center mb-16"
				>
					<div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
						Let's Connect
					</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Get In Touch
					</h2>
					<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
						Have a project in mind or want to collaborate? I'd love to hear from
						you
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-10 items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="space-y-8"
					>
						<div className="bg-muted/30 border border-border/40 rounded-xl p-6 space-y-6">
							<div className="flex items-start space-x-4">
								<div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
									<Mail className="h-5 w-5" />
								</div>
								<div>
									<h3 className="font-medium">Email</h3>
									<p className="text-muted-foreground">
										mancobatthabethe@gmail.com
									</p>
									<a
										href="mailto:mancobatthabethe@gmail.com"
										className="text-sm text-primary hover:underline mt-1 inline-block"
									>
										Send an email
									</a>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
									<MapPin className="h-5 w-5" />
								</div>
								<div>
									<h3 className="font-medium">Location</h3>
									<p className="text-muted-foreground">Nelspruit, Mpumalanga</p>
									<a
										href="https://www.google.com/maps/place/Mbombela/@-25.4809604,30.985988,13z/data=!3m1!4b1!4m6!3m5!1s0x1ee84a158d3e2739:0x7aa50ca83429a0f8!8m2!3d-25.4752984!4d30.9694163!16zL20vMDJqeTZi?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D"
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-primary hover:underline mt-1 inline-block"
									>
										View on map
									</a>
								</div>
							</div>
						</div>

						<div>
							<h3 className="font-medium mb-4">Connect With Me</h3>
							<div className="flex space-x-4">
								<a
									href="https://www.linkedin.com/in/mancoba-thabethe-b54007259/"
									className="h-10 w-10 flex items-center justify-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors"
									aria-label="LinkedIn"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
										<rect
											x="2"
											y="9"
											width="4"
											height="12"
										></rect>
										<circle
											cx="4"
											cy="4"
											r="2"
										></circle>
									</svg>
								</a>
								<a
									href="https://github.com/MancobaThabethe"
									className="h-10 w-10 flex items-center justify-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors"
									aria-label="GitHub"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
										<path d="M9 18c-4.51 2-5-2-7-2"></path>
									</svg>
								</a>
								<a
									href="https://www.instagram.com/metrodooming/"
									className="h-10 w-10 flex items-center justify-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors"
									aria-label="Instagram"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<rect
											x="2"
											y="2"
											width="20"
											height="20"
											rx="5"
											ry="5"
										></rect>
										<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
										<line
											x1="17.5"
											y1="6.5"
											x2="17.51"
											y2="6.5"
										></line>
									</svg>
								</a>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="relative"
					>
						<div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-full blur-xl opacity-70 pointer-events-none" />
						<div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-xl opacity-70 pointer-events-none" />

						<div className="bg-background border border-border/40 rounded-xl p-6 shadow-sm relative z-10">
							<form
								onSubmit={handleSubmit}
								className="space-y-5"
							>
								<h3 className="text-lg font-medium mb-4">Send Me a Message</h3>
								<div className="grid grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label
											htmlFor="name"
											className="text-sm font-medium"
										>
											Name
										</Label>
										<Input
											id="name"
											placeholder="Your name"
											required
											className="border-border/40 focus:border-primary/60 focus:ring-primary/20"
										/>
									</div>
									<div className="space-y-2">
										<Label
											htmlFor="email"
											className="text-sm font-medium"
										>
											Email
										</Label>
										<Input
											id="email"
											type="email"
											placeholder="Your email"
											required
											className="border-border/40 focus:border-primary/60 focus:ring-primary/20"
										/>
									</div>
								</div>
								<div className="space-y-2">
									<Label
										htmlFor="subject"
										className="text-sm font-medium"
									>
										Subject
									</Label>
									<Input
										id="subject"
										placeholder="Subject"
										required
										className="border-border/40 focus:border-primary/60 focus:ring-primary/20"
									/>
								</div>
								<div className="space-y-2">
									<Label
										htmlFor="message"
										className="text-sm font-medium"
									>
										Message
									</Label>
									<Textarea
										id="message"
										placeholder="Your message"
										required
										className="min-h-[150px] border-border/40 focus:border-primary/60 focus:ring-primary/20"
									/>
								</div>
								<Button
									type="submit"
									className="w-full"
									disabled={isSubmitting}
								>
									{isSubmitting ? (
										<span className="flex items-center gap-2">
											<svg
												className="animate-spin -ml-1 mr-2 h-4 w-4 text-background"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
											>
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"
												></circle>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												></path>
											</svg>
											Sending...
										</span>
									) : (
										<span className="flex items-center gap-2">
											<Send className="h-4 w-4" />
											Send Message
										</span>
									)}
								</Button>
							</form>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
