import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
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

      <h1 className="text-4xl font-bold tracking-tight mb-6">Privacy Policy</h1>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy describes how your personal information is collected, used, and shared when you visit
          Mancoba Thabethe's portfolio website.
        </p>

        <h2>2. Personal Information We Collect</h2>
        <p>
          When you visit the Site, we automatically collect certain information about your device, including information
          about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
        </p>
        <p>
          Additionally, as you browse the Site, we collect information about the individual web pages that you view,
          what websites or search terms referred you to the Site, and information about how you interact with the Site.
        </p>

        <h2>3. How We Use Your Personal Information</h2>
        <p>We use the information that we collect generally to:</p>
        <ul>
          <li>
            Improve and optimize our Site (for example, by generating analytics about how our visitors browse and
            interact with the Site).
          </li>
          <li>Assess the success of our marketing and outreach efforts.</li>
        </ul>

        <h2>4. Sharing Your Personal Information</h2>
        <p>We do not share your Personal Information with third parties except as described in this Privacy Policy.</p>
        <p>
          We may share your Personal Information with service providers to help us operate our website, conduct our
          business, or service you.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          If you are a European resident, you have the right to access personal information we hold about you and to ask
          that your personal information be corrected, updated, or deleted. If you would like to exercise this right,
          please contact us.
        </p>

        <h2>6. Data Retention</h2>
        <p>
          When you contact us through the Site, we will maintain your Contact Information for our records unless and
          until you ask us to delete this information.
        </p>

        <h2>7. Changes</h2>
        <p>
          We may update this privacy policy from time to time in order to reflect, for example, changes to our practices
          or for other operational, legal or regulatory reasons.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          For more information about our privacy practices, if you have questions, or if you would like to make a
          complaint, please contact us by e-mail at privacy@example.com.
        </p>
      </div>
    </div>
  )
}
