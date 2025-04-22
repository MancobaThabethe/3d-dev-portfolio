export const experiences = [
	{
		id: 1,
		role: "Full Stack Developer",
		company: "Acme Leads Solutions (Pty) Ltd.",
		period: "Jan 2025 - Present",
		description:
			"Developed and maintained multiple client projects with a focus on performance and accessibility. Implemented both monolithic as well as microservices architecture that improved system reliability and scalability.",
		skills: [
			"Next.js",
			"TypeScript",
			"TailwindCSS",
			"Node.js",
			"PostgreSQL",
			"Docker",
			"AWS",
		],
		achievements: [
			"Built a custom website with a real-time analytics dashboard for a healthcare client",
			"Optimized database queries resulting in 60% faster response times",
			"Implemented automated testing that caught 95% of regressions",
			"Implemented auto scaling and loading balancing to ensure high availability",
		],
	},
	{
		id: 2,
		role: "Freelance Web Developer",
		company: "Self Employed",
		period: "Apr 2024 - Jan 2025",
		description:
			"Created responsive websites for clients across various industries. Created designs to implement pixel-perfect UIs and ensure seamless user experiences across different devices.",
		skills: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
		achievements: [
			"Developed 5+ client websites with 100% on-time delivery",
			"Improved site performance and SEO scores by an average of 30%",
			"Created a custom project management and workflow automation tool to speed up delivery time that I used myself",
		],
	},
];

export const mockSubmissions = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    subject: "Project Inquiry",
    message: "I'm interested in working with you on a new project. Can we schedule a call to discuss details?",
    isRead: false,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    subject: "Job Opportunity",
    message:
      "We have an opening for a senior developer position that matches your skills. Would you be interested in discussing this opportunity?",
    isRead: true,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
  },
  {
    id: "3",
    name: "Alex Johnson",
    email: "alex@example.com",
    subject: "Collaboration Request",
    message:
      "I'm working on an open-source project and would love to have you contribute. The project focuses on creating accessible UI components.",
    isRead: false,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
  },
]


export const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#technologies", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

export const projects = [
	{
		id: 1,
		title: "LAUVA E-Commerce Store",
		description:
			"A full-stack e-commerce platform with real-time inventory, AI-powered product recommendations, and seamless payment processing.",
		longDescription:
			"This comprehensive e-commerce solution features user authentication, product management, shopping cart functionality, secure payment processing with PayFast, and an admin dashboard for inventory management, order management & analytics. The platform includes real-time inventory updates, personalized product recommendations using machine learning, and detailed analytics for business insights.",
		image: "/placeholder.svg?height=600&width=800",
		additionalImages: [
			"/placeholder.svg?height=600&width=800&text=Product+Page",
			"/placeholder.svg?height=600&width=800&text=Checkout+Flow",
			"/placeholder.svg?height=600&width=800&text=Admin+Dashboard",
		],
		tags: [
			"Next.js",
			"TypeScript",
			"Shadcn UI",
			"Tailwind CSS",
			"Redis",
			"Prisma",
			"PostgreSQL",
			"PayFast",
		],
		site: "https://www.lauva.co.za",
		features: [
			"User authentication and profile management",
			"Product catalog with filtering and search",
			"Shopping cart and wishlist functionality",
			"Secure payment processing with PayFast",
			"Admin dashboard for store management & analytics",
			"Order tracking and history",
			"Responsive design for all devices",
		],
		challenges:
			"Implementing real-time inventory updates across multiple concurrent sessions was challenging. I solved this using WebSockets and a custom state management solution that ensures data consistency.",
		date: "February 2025 - May 2025",
		role: "Full Stack Developer",
	},
	{
		id: 2,
		title: "3D Product Configurator",
		description:
			"Interactive 3D product configurator with physics-based rendering, allowing users to customize and visualize products in real-time.",
		longDescription:
			"This 3D product configurator allows users to customize products in real-time with a highly interactive interface. Built with Three.js and React Three Fiber, it features physically-based rendering for realistic materials, dynamic lighting, and environment mapping. Users can change colors, materials, add accessories, and view their customizations from any angle before purchasing.",
		image: "/placeholder.svg?height=600&width=800",
		additionalImages: [
			"/placeholder.svg?height=600&width=800&text=Color+Options",
			"/placeholder.svg?height=600&width=800&text=Material+Selection",
			"/placeholder.svg?height=600&width=800&text=Mobile+View",
		],
		tags: ["React", "Three.js", "React Three Fiber", "TypeScript", "Zustand"],
		site: "https://www.lauva.co.za",
		features: [
			"Real-time 3D visualization of products",
			"Interactive customization of colors, materials, and components",
			"Physics-based rendering for realistic materials",
			"Environment mapping for realistic reflections",
			"Camera controls for viewing from any angle",
			"Screenshot and sharing capabilities",
			"Integration with e-commerce checkout",
		],
		challenges:
			"Optimizing the 3D rendering performance for mobile devices required implementing level-of-detail techniques and texture compression. I also created a custom shader for the material previews to ensure consistent appearance across devices.",
		date: "June 2023",
		role: "Frontend Developer & 3D Specialist",
	},
	{
		id: 3,
		title: "AI Content Generator",
		description:
			"Next-gen content creation tool powered by GPT-4o that generates SEO-optimized blog posts, social media content, and marketing copy.",
		longDescription:
			"This AI-powered content generation platform leverages OpenAI's GPT-4o to create high-quality, SEO-optimized content for various purposes. The application includes specialized templates for blog posts, social media updates, product descriptions, and marketing copy. It features a user-friendly interface with real-time editing, content scoring, and SEO recommendations to ensure the generated content meets both user intent and search engine requirements.",
		image: "/placeholder.svg?height=600&width=800",
		additionalImages: [
			"/placeholder.svg?height=600&width=800&text=Content+Editor",
			"/placeholder.svg?height=600&width=800&text=SEO+Analysis",
			"/placeholder.svg?height=600&width=800&text=Template+Library",
		],
		tags: [
			"Next.js",
			"OpenAI API",
			"Tailwind CSS",
			"TypeScript",
			"Vercel AI SDK",
		],
		github: "https://github.com",
		demo: "https://example.com",
		features: [
			"AI-powered content generation for multiple formats",
			"Customizable templates for different content types",
			"SEO analysis and recommendations",
			"Content readability scoring",
			"Plagiarism checking",
			"Export to WordPress, Markdown, or HTML",
			"User content history and favorites",
		],
		challenges:
			"Ensuring the AI generated content that was both original and factually accurate required implementing a custom verification system. I also developed a fine-tuning pipeline to improve the model's performance for specific content niches.",
		date: "October 2023",
		role: "Lead Developer",
	},
];
