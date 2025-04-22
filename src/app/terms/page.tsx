import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="container max-w-3xl py-12">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="pl-0">
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
              className="mr-2 h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Home
          </Button>
        </Link>
      </div>

      <h1 className="text-4xl font-bold tracking-tight mb-6">Terms of Service</h1>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to Mancoba Thabethe's portfolio website. These Terms of Service govern your use of our website located
          at [Your Website URL] and form a binding contractual agreement between you, the user of the Site, and us.
        </p>

        <h2>2. Acceptance of Terms</h2>
        <p>
          By accessing or using the Site, you agree to be bound by these Terms. If you disagree with any part of the
          terms, you may not access the Site.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          The Site and its original content, features, and functionality are owned by Mancoba Thabethe and are protected
          by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary
          rights laws.
        </p>

        <h2>4. User Conduct</h2>
        <p>You agree not to use the Site:</p>
        <ul>
          <li>In any way that violates any applicable national or international law or regulation.</li>
          <li>
            To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail",
            "chain letter," "spam," or any other similar solicitation.
          </li>
          <li>
            To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person
            or entity.
          </li>
        </ul>

        <h2>5. Limitation of Liability</h2>
        <p>
          In no event shall Mancoba Thabethe, nor its directors, employees, partners, agents, suppliers, or affiliates,
          be liable for any indirect, incidental, special, consequential or punitive damages, including without
          limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or
          use of or inability to access or use the Site.
        </p>

        <h2>6. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to
          access or use our Site after those revisions become effective, you agree to be bound by the revised terms.
        </p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at contact@example.com.</p>
      </div>
    </div>
  )
}
