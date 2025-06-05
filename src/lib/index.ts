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
		message:
			"I'm interested in working with you on a new project. Can we schedule a call to discuss details?",
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
];

export const navLinks = [
	{ href: "#hero", label: "Home" },
	{ href: "#projects", label: "Projects" },
	{ href: "#experience", label: "Experience" },
	{ href: "#technologies", label: "Skills" },
	{ href: "#contact", label: "Contact" },
];

export const projects = [
	{
		id: 1,
		title: "LAUVA E-Commerce Store",
		description:
			"A full-stack e-commerce platform with real-time inventory, AI-powered product recommendations, and seamless payment processing.",
		longDescription:
			"This comprehensive e-commerce solution features user authentication, product management, shopping cart functionality, secure payment processing with PayFast, and an admin dashboard for inventory management, order management & analytics. The platform includes real-time inventory updates, personalized product recommendations using machine learning, and detailed analytics for business insights.",
		image: "/projects/Project-1-1.png?height=600&width=800",
		additionalImages: [
			"/projects/Project-1-2.png?height=600&width=800&text=Product+Page",
			"/projects/Project-1-3.png?height=600&width=800&text=Checkout+Flow",
			"/projects/Project-1-4.png?height=600&width=800&text=Admin+Dashboard",
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
			"OpenAI",
			"Socket.io",
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
		date: "February 2025 - Present",
		role: "Full Stack Developer",
	},
	{
		id: 2,
		title: "7 Kings VIP Security Services Web Platform",
		description:
			"Transforming VIP security operations with a robust, role-based web platform—empowering clients, staff, and administrators to manage services, incidents, and reporting with ease and confidence.",
		longDescription:
			"The 7 Kings VIP Security Services platform is designed to streamline and elevate every aspect of a modern security business. Clients enjoy a dedicated portal where they can request quotes, track ongoing services, and access detailed, AI-generated reports—ensuring transparency and peace of mind. Staff members efficiently manage client inquiries, prepare quotes, assign services, and log incidents in real time, all from an intuitive dashboard. Administrators benefit from comprehensive oversight, with tools for managing staff, monitoring revenue, overseeing fleet operations, and maintaining service quality. By integrating OpenAI’s API, the platform delivers dynamic, professional-grade reports that turn operational data into actionable insights. This solution not only increases efficiency and accountability but also enhances the client experience—making it an invaluable asset for any security company aiming to stand out in a competitive industry.",
		image: "/projects/project-3-1.png?height=600&width=800",
		additionalImages: [
			"/projects/project-3-2.png?height=600&width=800&text=Client+Dashboard",
			"/projects/project-3-3.png?height=600&width=800&text=Staff+Quote+Management",
			"/projects/project-3-4.png?height=600&width=800&text=Admin+Fleet+Overview",
			"/projects/project-3-5.png?height=600&width=800&text=Admin+Staff+Overview",
			"/projects/project-3-6.png?height=600&width=800&text=Admin+Service+Overview",
			"/projects/project-3-7.png?height=600&width=800&text=Admin+Revenue+Overview",
			"/projects/project-3-8.png?height=600&width=800&text=Admin+Incident+Tracking",
			"/projects/project-3-9.png?height=600&width=800&text=Admin+Report+Generation",
			"/projects/project-3-10.png?height=600&width=800&text=Admin+Report+Generation",
			"/projects/project-3-11.png?height=600&width=800&text=Admin+Report+Generation",
			"/projects/project-3-12.png?height=600&width=800&text=Admin+Report+Generation",
			"/projects/project-3-13.png?height=600&width=800&text=Admin+Report+Generation",
			"/projects/project-3-14.png?height=600&width=800&text=Admin+Report+Generation",
			"/projects/project-3-15.png?height=600&width=800&text=Admin+Report+Generation",
			"/projects/project-3-16.png?height=600&width=800&text=Admin+Report+Generation",
			"/projects/project-3-17.png?height=600&width=800&text=Admin+Report+Generation",
			"/projects/project-3-18.png?height=600&width=800&text=Admin+Report+Generation",
			"/projects/project-3-19.png?height=600&width=800&text=Admin+Report+Generation",
			"/projects/project-3-20.png?height=600&width=800&text=Admin+Report+Generation",
			"/projects/project-3-21.png?height=600&width=800&text=Admin+Report+Generation",
		],
		tags: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Express",
			"PostgreSQL",
			"Prisma",
			"OpenAI API",
			"Fullstack",
			"NextAuth",
		],
		site: "https://7kingsvip.vercel.app/",
		features: [
			"Role-based access system (Admin, Staff, Client)",
			"AI-generated incident and service reports",
			"Quote request and approval workflows",
			"Appointment and service assignment system",
			"Contact form management with staff response tools",
			"Fleet and staff management dashboards",
			"Secure data storage using PostgreSQL and Prisma",
			"Responsive and mobile-friendly interface",
		],
		challenges:
			"Designing a scalable role-based system with secure data segregation and efficient user experiences was a core challenge. Integrating OpenAI’s API to generate accurate and context-aware reports from structured and unstructured data also required thoughtful architecture and prompt engineering.",
		date: "May 2025",
		role: "Fullstack Developer & System Architect",
	},
	{
		id: 3,
		title: "AI Resume Job Matcher",
		description:
			"An AI-powered platform that analyzes your resume with a given job description. It then checks if you are a good fit for the job based on your skills, experience, preferences and keywords that appear on both your resume and job description.",
		longDescription:
			"This application leverages Groq AI's various models to intelligently parse and analyze user resumes, extracting key skills and experience. It then compares this data to your given job listing description, providing personalized job matches and recommendations. The platform features an intuitive interface, real-time feedback on resume optimization, and actionable insights to improve your chances of landing your ideal job.",
		image: "/projects/project-2-1.png?height=600&width=800",
		additionalImages: [
			"/projects/project-2-2.png?height=600&width=800&text=AI+Resume+Job+Matcher",
			"/projects/project-2-3.png?height=600&width=800&text=AI+Resume+Job+Matcher",
			"/projects/project-2-4.png?height=600&width=800&text=AI+Resume+Job+Matcher",
			"/projects/project-2-5.png?height=600&width=800&text=AI+Resume+Job+Matcher",
			"/projects/project-2-6.png?height=600&width=800&text=AI+Resume+Job+Matcher",
			"/projects/project-2-7.png?height=600&width=800&text=AI+Resume+Job+Matcher",
			"/projects/project-2-8.png?height=600&width=800&text=AI+Resume+Job+Matcher",
		],
		tags: [
			"Next.js",
			"GroqAI",
			"Tailwind CSS",
			"TypeScript",
			"ShadcnUI",
			"Node.js",
			"Express",
			"Framer Motion",
		],
		github: "https://github.com/MancobaThabethe/ai-resume-job-matcher",
		demo: "https://ai-resume-job-matcher.vercel.app/",
		features: [
			"Upload your resume and paste any job description for instant analysis",
			"AI-powered matching based on skills, experience, and keywords",
			"Personalized job fit score and recommendations",
			"Highlighting of missing or matching skills between resume and job description",
			"Real-time feedback on resume optimization for specific jobs",
			"Actionable suggestions to improve your resume and job fit",
			"Intuitive and user-friendly interface",
			"Support for multiple resume formats (PDF, DOCX, TXT)",
			"Secure and private resume processing",
			"Export and share your analysis results",
		],
		challenges:
			"Ensuring the Pdf parsing and text extraction was accurate was a challenge but building the API was easy. Another challenge was making sure the the AI model return the correct data type which is a JSON object instead of a string. I solved this by using a generateObject method which is a AI function that takes a schema of the object, then returns the object.",
		date: "May 2025",
		role: "Solo Developer",
	},
];
