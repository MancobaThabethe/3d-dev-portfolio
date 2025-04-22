"use server"
import { mockSubmissions } from "@/lib"
import { requireAdmin } from "./auth"

export async function getContactSubmissions(page = 1, limit = 10, filter?: string, status?: string) {
  await requireAdmin()

  const skip = (page - 1) * limit

  let filteredSubmissions = [...mockSubmissions]

  if (filter) {
    const searchTerm = filter.toLowerCase()
    filteredSubmissions = filteredSubmissions.filter(
      (submission) =>
        submission.name.toLowerCase().includes(searchTerm) ||
        submission.email.toLowerCase().includes(searchTerm) ||
        submission.subject.toLowerCase().includes(searchTerm) ||
        submission.message.toLowerCase().includes(searchTerm),
    )
  }

  if (status === "read") {
    filteredSubmissions = filteredSubmissions.filter((submission) => submission.isRead)
  } else if (status === "unread") {
    filteredSubmissions = filteredSubmissions.filter((submission) => !submission.isRead)
  }

  // Sort by date (newest first)
  filteredSubmissions.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  // Paginate results
  const paginatedSubmissions = filteredSubmissions.slice(skip, skip + limit)

  return {
    submissions: paginatedSubmissions,
    total: filteredSubmissions.length,
    pages: Math.ceil(filteredSubmissions.length / limit),
    currentPage: page,
  }
}

export async function markAsRead(id: string) {
  await requireAdmin()

  const submissionIndex = mockSubmissions.findIndex((s) => s.id === id)
  if (submissionIndex !== -1) {
    mockSubmissions[submissionIndex].isRead = true
  }

  return mockSubmissions[submissionIndex]
}

export async function markAsUnread(id: string) {
  await requireAdmin()

  const submissionIndex = mockSubmissions.findIndex((s) => s.id === id)
  if (submissionIndex !== -1) {
    mockSubmissions[submissionIndex].isRead = false
  }

  return mockSubmissions[submissionIndex]
}

export async function deleteSubmission(id: string) {
  await requireAdmin()

  const submissionIndex = mockSubmissions.findIndex((s) => s.id === id)
  if (submissionIndex !== -1) {
    mockSubmissions.splice(submissionIndex, 1)
  }

  return { success: true }
}

export async function getUnreadCount() {
  await requireAdmin()

  return mockSubmissions.filter((s) => !s.isRead).length
}

export async function getMessageStats() {
  await requireAdmin()

  const totalMessages = mockSubmissions.length
  const unreadMessages = mockSubmissions.filter((s) => !s.isRead).length
  const lastWeekMessages = mockSubmissions.filter(
    (s) => new Date(s.createdAt).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000,
  ).length

  return {
    total: totalMessages,
    unread: unreadMessages,
    lastWeek: lastWeekMessages,
    responseRate:
      totalMessages > 0 ? (((totalMessages - unreadMessages) / totalMessages) * 100).toFixed(1) + "%" : "0%",
  }
}
