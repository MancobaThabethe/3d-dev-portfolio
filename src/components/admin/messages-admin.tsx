"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { format } from "date-fns"
import {
  getContactSubmissions,
  markAsRead,
  markAsUnread,
  deleteSubmission,
  getUnreadCount,
} from "@/app/actions/contact-admin"
import { logout } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination"
import { Search, LogOut, MoreHorizontal, Mail, CheckCircle, XCircle, Trash2, Eye, ArrowLeft } from "lucide-react"

export default function MessagesAdmin() {
  const router = useRouter()
  const [submissions, setSubmissions] = useState([])
  const [total, setTotal] = useState(0)
  const [pages, setPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [filter, setFilter] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [selectedSubmission, setSelectedSubmission] = useState(null)
  const [unreadCount, setUnreadCount] = useState(0)
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    fetchSubmissions()
    fetchUnreadCount()
  }, [currentPage, filter, activeTab])

  async function fetchSubmissions() {
    setIsLoading(true)
    try {
      const filterValue = filter.trim() || undefined
      const result = await getContactSubmissions(currentPage, 10, filterValue)
      setSubmissions(result.submissions)
      setTotal(result.total)
      setPages(result.pages)
      setCurrentPage(result.currentPage)
    } catch (error) {
      console.error("Error fetching submissions:", error)
    } finally {
      setIsLoading(false)
    }
  }

  async function fetchUnreadCount() {
    try {
      const count = await getUnreadCount()
      setUnreadCount(count)
    } catch (error) {
      console.error("Error fetching unread count:", error)
    }
  }

  async function handleMarkAsRead(id) {
    try {
      await markAsRead(id)
      fetchSubmissions()
      fetchUnreadCount()
    } catch (error) {
      console.error("Error marking as read:", error)
    }
  }

  async function handleMarkAsUnread(id) {
    try {
      await markAsUnread(id)
      fetchSubmissions()
      fetchUnreadCount()
    } catch (error) {
      console.error("Error marking as unread:", error)
    }
  }

  async function handleDelete(id) {
    try {
      await deleteSubmission(id)
      fetchSubmissions()
      fetchUnreadCount()
      if (selectedSubmission?.id === id) {
        setSelectedSubmission(null)
      }
    } catch (error) {
      console.error("Error deleting submission:", error)
    }
  }

  async function handleLogout() {
    await logout()
    router.push("/admin/login")
  }

  function handleSearch(e) {
    e.preventDefault()
    setCurrentPage(1)
    fetchSubmissions()
  }

  function handleTabChange(value) {
    setActiveTab(value)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => router.push("/admin")} className="mr-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Link href="/" className="font-bold text-xl tracking-tight">
              <span className="text-primary">Dev</span>Portfolio
            </Link>
            <h1 className="text-xl font-semibold">Message Management</h1>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-primary/10 text-primary">
              {unreadCount} unread messages
            </Badge>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="grid gap-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange} className="w-full md:w-auto">
              <TabsList>
                <TabsTrigger value="all">All Messages</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
                <TabsTrigger value="read">Read</TabsTrigger>
              </TabsList>
            </Tabs>

            <form onSubmit={handleSearch} className="flex w-full md:w-auto gap-2">
              <Input
                placeholder="Search messages..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full md:w-[300px]"
              />
              <Button type="submit" variant="secondary">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Contact Form Submissions</CardTitle>
              <CardDescription>Manage and respond to messages from your portfolio contact form</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : submissions.length === 0 ? (
                <div className="text-center py-8">
                  <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium">No messages found</h3>
                  <p className="text-muted-foreground">
                    {filter ? "Try a different search term" : "You haven't received any messages yet"}
                  </p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">Status</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead className="hidden md:table-cell">Date</TableHead>
                      <TableHead className="w-[70px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((submission) => (
                      <TableRow key={submission.id} className="cursor-pointer hover:bg-muted/50">
                        <TableCell>
                          {submission.isRead ? (
                            <CheckCircle className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <Badge variant="default" className="bg-primary">
                              New
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell
                          className="font-medium"
                          onClick={() => {
                            setSelectedSubmission(submission)
                            if (!submission.isRead) {
                              handleMarkAsRead(submission.id)
                            }
                          }}
                        >
                          {submission.name}
                        </TableCell>
                        <TableCell
                          onClick={() => {
                            setSelectedSubmission(submission)
                            if (!submission.isRead) {
                              handleMarkAsRead(submission.id)
                            }
                          }}
                        >
                          {submission.email}
                        </TableCell>
                        <TableCell
                          onClick={() => {
                            setSelectedSubmission(submission)
                            if (!submission.isRead) {
                              handleMarkAsRead(submission.id)
                            }
                          }}
                        >
                          {submission.subject}
                        </TableCell>
                        <TableCell
                          className="hidden md:table-cell"
                          onClick={() => {
                            setSelectedSubmission(submission)
                            if (!submission.isRead) {
                              handleMarkAsRead(submission.id)
                            }
                          }}
                        >
                          {format(new Date(submission.createdAt), "MMM d, yyyy")}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() => {
                                  setSelectedSubmission(submission)
                                  if (!submission.isRead) {
                                    handleMarkAsRead(submission.id)
                                  }
                                }}
                              >
                                <Eye className="h-4 w-4 mr-2" />
                                View
                              </DropdownMenuItem>
                              {submission.isRead ? (
                                <DropdownMenuItem onClick={() => handleMarkAsUnread(submission.id)}>
                                  <XCircle className="h-4 w-4 mr-2" />
                                  Mark as unread
                                </DropdownMenuItem>
                              ) : (
                                <DropdownMenuItem onClick={() => handleMarkAsRead(submission.id)}>
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  Mark as read
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuItem
                                className="text-destructive focus:text-destructive"
                                onClick={() => handleDelete(submission.id)}
                              >
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}

              {pages > 1 && (
                <div className="mt-4 flex justify-center">
                  <Pagination>
                    <PaginationContent>
                      {Array.from({ length: pages }, (_, i) => i + 1).map((page) => (
                        <PaginationItem key={page}>
                          <PaginationLink isActive={currentPage === page} onClick={() => setCurrentPage(page)}>
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Message Detail Dialog */}
      <Dialog open={!!selectedSubmission} onOpenChange={(open) => !open && setSelectedSubmission(null)}>
        {selectedSubmission && (
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>{selectedSubmission.subject}</DialogTitle>
              <DialogDescription>
                From {selectedSubmission.name} ({selectedSubmission.email})
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="text-sm text-muted-foreground">
                {format(new Date(selectedSubmission.createdAt), "MMMM d, yyyy 'at' h:mm a")}
              </div>
              <div className="border rounded-md p-4 whitespace-pre-wrap">{selectedSubmission.message}</div>
            </div>
            <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between sm:space-x-0">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={`mailto:${selectedSubmission.email}?subject=Re: ${selectedSubmission.subject}`}>
                    Reply via Email
                  </a>
                </Button>
                {selectedSubmission.isRead ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      handleMarkAsUnread(selectedSubmission.id)
                      setSelectedSubmission(null)
                    }}
                  >
                    Mark as Unread
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" onClick={() => handleMarkAsRead(selectedSubmission.id)}>
                    Mark as Read
                  </Button>
                )}
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => {
                  handleDelete(selectedSubmission.id)
                  setSelectedSubmission(null)
                }}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
