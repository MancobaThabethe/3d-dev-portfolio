"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Form validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormInputs = z.infer<typeof ContactFormSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const rawFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const validatedFields = ContactFormSchema.safeParse(rawFormData)

    // If validation fails, return errors
    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Invalid form data. Please check your inputs.",
      }
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number.parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: validatedFields.data.email,
      subject: `Portfolio Contact: ${validatedFields.data.subject}`,
      text: `
        Name: ${validatedFields.data.name}
        Email: ${validatedFields.data.email}
        
        Message:
        ${validatedFields.data.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedFields.data.name}</p>
        <p><strong>Email:</strong> ${validatedFields.data.email}</p>
        <p><strong>Subject:</strong> ${validatedFields.data.subject}</p>
        <h3>Message:</h3>
        <p>${validatedFields.data.message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Store in database (optional)
    // await saveContactSubmission(validatedFields.data)

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    }
  }
}

// Optional: Database storage function
async function saveContactSubmission(data: ContactFormInputs) {
}
