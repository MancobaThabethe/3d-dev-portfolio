<div align="center">
<h1>🚀 Next.js 3D Developer Portfolio</h1>
<p>A stunning, interactive 3D portfolio for developers built with Next.js 15, Three.js, and Tailwind CSS</p>

<p>
  <a href="#"><img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Three.js-Latest-black?style=for-the-badge&logo=three.js" alt="Three.js" /></a>
  <a href="#"><img src="https://img.shields.io/badge/TypeScript-Latest-blue?style=for-the-badge&logo=typescript" alt="TypeScript" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Tailwind-Latest-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" /></a>
</p>

<img src="https://github.com/MancobaThabethe/3d-dev-portfolio/raw/main/public/preview.png" alt="Portfolio Preview" width="800" />
</div>

## ✨ Features

- **🖥️ Interactive 3D Hero Section** - Captivating laptop model with animated code display
- **📱 Fully Responsive Design** - Optimized for all devices from mobile to desktop
- **🎭 Project Modals** - Detailed project information with image carousels
- **⏳ Work Experience Timeline** - Visually appealing professional journey display
- **🛠️ Skills & Technologies Showcase** - Interactive tech stack visualization
- **📬 Contact Form** - Functional contact form with validation and email notifications
- **🔒 Admin Dashboard** - Secure admin area to view and manage contact form submissions
- **🎨 Stunning Visual Effects** - Particle animations, gradients, and smooth transitions
- **📄 Legal Pages** - Professional Terms and Privacy Policy pages
- **🔍 SEO Optimized** - Meta tags and structured data for better search engine visibility
- **🌙 Animated Background** - Dynamic particle system that responds to interaction
- **🔄 Smooth Scrolling** - Seamless navigation between sections
- **⚡ Performance Optimized** - Fast loading and rendering on all devices
- **🔌 API Routes** - Backend API for projects and experience data
- **📊 Database Integration** - PostgreSQL database for storing contact submissions

## 🚀 Live Demo

Check out the live demo: [3D Developer Portfolio](https://your-portfolio-url.com)

## 🛠️ Technologies Used

This portfolio is built with modern technologies and best practices:

- **Frontend Framework**: Next.js 15
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Database**: PostgreSQL (Neon)
- **Form Validation**: Zod
- **Email**: Nodemailer
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18.17.0 or later
- npm or yarn package manager
- Git
- PostgreSQL database (or Neon account)

## 🔧 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/MancobaThabethe/3d-dev-portfolio.git
cd nextjs-3d-portfolio
2. **Install dependencies**


```shellscript
npm install
# or
yarn install
```

3. **Set up environment variables**


Copy the example environment file and update it with your values:

```shellscript
cp app/env.example .env.local
```

Required environment variables:

- `EMAIL_HOST`: SMTP server host
- `EMAIL_PORT`: SMTP server port
- `EMAIL_SECURE`: Use TLS (true/false)
- `EMAIL_USER`: SMTP username
- `EMAIL_PASSWORD`: SMTP password
- `EMAIL_FROM`: Sender email address
- `EMAIL_TO`: Recipient email address
- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_SECRET`: Secret for NextAuth.js
- `NEXTAUTH_URL`: URL for NextAuth.js
- `ADMIN_EMAIL`: Email for admin login
- `ADMIN_PASSWORD`: Password for admin login


4. **Set up the database**


```shellscript
npx prisma db push
```

5. **Run the development server**


```shellscript
npm run dev
# or
yarn dev
```

6. **Open your browser**


Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio in action!

## 🔐 Admin Dashboard

The portfolio includes a secure admin dashboard to view and manage contact form submissions:

1. Access the admin dashboard at `/admin`
2. Log in with your admin credentials (set in `.env.local`)
3. View, filter, and manage all contact form submissions
4. Mark messages as read/unread or delete them


## 🎨 Customization

### Personal Information

Update your information in the following files:

- **Hero Section**: Edit `components/hero.tsx` to update your name and title
- **Projects**: Modify the projects array in `app/api/projects/route.ts`
- **Experience**: Update your work history in `app/api/experience/route.ts`
- **Skills**: Change your tech stack in `components/technologies.tsx`
- **Contact**: Update your contact details in `components/contact.tsx`
- **Footer**: Edit your copyright information in `components/footer.tsx`


### 3D Elements

The portfolio features a custom 3D laptop model with animated code display:

- Modify the laptop model in `components/hero.tsx`
- Change the animated code by updating the `codeLines` array
- Adjust camera settings and positioning for different visual effects


### Styling

The project uses Tailwind CSS with a custom color scheme:

- Edit `tailwind.config.ts` to change the color palette
- Modify `app/globals.css` for global styles
- Each component has its own styling that can be customized


## 📁 Project Structure

```plaintext
3d-dev-portfolio/
├── app/                  # Next.js app directory
│   ├── page.tsx          # Main page component
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   ├── actions/          # Server actions
│   ├── api/              # API routes
│   ├── admin/            # Admin dashboard
│   ├── privacy/          # Privacy policy page
│   └── terms/            # Terms of service page
├── components/           # React components
│   ├── hero.tsx          # 3D hero section
│   ├── projects.tsx      # Projects with modals
│   ├── experience.tsx    # Work experience timeline
│   ├── technologies.tsx  # Skills & technologies
│   ├── contact.tsx       # Contact form
│   ├── navbar.tsx        # Navigation bar
│   ├── footer.tsx        # Footer component
│   └── tech-icons.tsx    # Technology icons
├── hooks/                # Custom React hooks
│   ├── use-mobile.tsx    # Mobile detection hook
│   └── use-projects.ts   # Projects data fetching
├── lib/                  # Utility functions
│   ├── db.ts             # Database client
│   └── utils.ts          # Helper functions
├── prisma/               # Prisma ORM
│   └── schema.prisma     # Database schema
├── public/               # Static assets
└── README.md             # Project documentation
```

## 🚀 Deployment

### Deploying to Vercel (Recommended)

1. Push your repository to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Vercel will automatically detect Next.js and configure the build settings
5. Your portfolio will be deployed and available at your Vercel URL


## 🤝 Contributing

Contributions are welcome! If you'd like to improve this portfolio template:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


<!-- ## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details. -->

## 🙏 Acknowledgements

- [Three.js](https://threejs.org/) - 3D graphics library
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - React renderer for Three.js
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Next.js](https://nextjs.org/) - React framework
- [Neon](https://neon.tech/) - Serverless PostgreSQL


---

<div align="center">
<p>Designed and developed with ❤️ by <a href="https://github.com/MancobaThabethe">Mancoba Thabethe</a></p>
<p>
  <a href="https://www.linkedin.com/in/mancoba-thabethe-b54007259/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://github.com/MancobaThabethe"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
</p>
</div>