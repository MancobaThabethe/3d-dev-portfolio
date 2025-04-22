"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { z } from "zod"

// In a real application, you would use a secure method to store and validate credentials
// This is a simplified example for demonstration purposes
const ADMIN_USERNAME = "admin"
const ADMIN_PASSWORD = "password123" // In production, use hashed passwords

// Session cookie name
const AUTH_COOKIE = "portfolio_auth_token"

// Simple schema for login validation
const LoginSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
})

export async function login(formData: FormData) {
  // Validate form data
  const validatedFields = LoginSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid credentials",
    }
  }

  const { username, password } = validatedFields.data

  // Check credentials (in a real app, you would check against a database)
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // Set a secure cookie with the session token
    // In a real app, you would generate a secure token
    const token = Buffer.from(Date.now().toString()).toString("base64")

    cookies().set({
      name: AUTH_COOKIE,
      value: token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
    })

    return {
      success: true,
      message: "Login successful",
    }
  }

  return {
    success: false,
    message: "Invalid username or password",
  }
}

export async function logout() {
  cookies().delete(AUTH_COOKIE)
}

export async function isAuthenticated() {
  const token = cookies().get(AUTH_COOKIE)
  return !!token
}

export async function requireAdmin() {
  const authenticated = await isAuthenticated()

  if (!authenticated) {
    redirect("/admin/login")
  }
}
