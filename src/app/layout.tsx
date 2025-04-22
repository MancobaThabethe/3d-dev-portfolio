import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: "Mancoba's Portfolio",
	description:
		"Welcome to my portfolio. I am a full-stack software engineer with a passion for building fast, scalable and maintainable software. I am a self-taught developer who strives to learn something new everyday.",
	keywords: [
		"Mancoba",
		"Portfolio",
		"Software Engineer",
		"Full-stack",
    "React",
    "JavaScript",
    "Web developer",
		"Next.js",
		"TypeScript",
		"Tailwind CSS",
		"Prisma",
		"PostgreSQL",
	],
	authors: [{ name: "Mancoba Thabethe", url: "" }],
	creator: "Mancoba Thabethe",
	publisher: "Mancoba Thabethe",
	openGraph: {
		title: "Mancoba Thabethe - Full-stack Software Engineer",
		description:
			"Welcome to my portfolio. I am a full-stack software engineer with a passion for building fast, scalable and maintainable software. I am a self-taught developer who strives to learn something new everyday.",
		url: "https://mancoba.me",
		siteName: "Mancoba Thabethe - Full-stack Software Engineer",
		images: [
			{
				url: "https://mancoba.me/mancoba.jpg",
				width: 800,
				height: 600,
				alt: "Mancoba Thabethe",
			},
		],
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
