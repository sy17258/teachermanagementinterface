"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Plus, Search, Send, Paperclip, MoreHorizontal, Star, Archive } from "lucide-react"
import type { Message } from "@/types"

const mockMessages: Message[] = [
  {
    id: "1",
    senderId: "1",
    senderName: "Emma Wilson",
    senderType: "teacher",
    recipientId: "admin",
    recipientName: "Admin",
    recipientType: "admin",
    subject: "Piano Class Schedule Change",
    content:
      "Hi, I need to reschedule tomorrow's piano class due to a family emergency. Can we move it to Thursday at the same time?",
    timestamp: "2024-01-15T10:30:00Z",
    read: false,
    attachments: [],
  },
  {
    id: "2",
    senderId: "2",
    senderName: "Sarah Johnson",
    senderType: "student",
    recipientId: "admin",
    recipientName: "Admin",
    recipientType: "admin",
    subject: "Payment Confirmation",
    content: "Hello, I just made the payment for this month's piano lessons. Could you please confirm receipt?",
    timestamp: "2024-01-15T09:15:00Z",
    read: true,
    attachments: ["payment_receipt.pdf"],
  },
  {
    id: "3",
    senderId: "3",
    senderName: "John Smith",
    senderType: "teacher",
    recipientId: "admin",
    recipientName: "Admin",
    recipientType: "admin",
    subject: "New Student Inquiry",
    content:
      "I received an inquiry from a potential student interested in guitar lessons. Should I direct them to the enrollment process?",
    timestamp: "2024-01-14T16:45:00Z",
    read: true,
    attachments: [],
  },
  {
    id: "4",
    senderId: "4",
    senderName: "Robert Johnson",
    senderType: "student",
    recipientId: "1",
    recipientName: "Emma Wilson",
    recipientType: "teacher",
    subject: "Practice Materials Request",
    content: "Hi Emma, could you please send me the practice sheets we discussed in today's lesson? Thank you!",
    timestamp: "2024-01-14T14:20:00Z",
    read: false,
    attachments: [],
  },
]

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>(mockMessages)
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [showCompose, setShowCompose] = useState(false)
  const [replyContent, setReplyContent] = useState("")

  const filteredMessages = messages.filter(
    (message) =>
      message.senderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.content.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const unreadCount = messages.filter((m) => !m.read).length

  const markAsRead = (messageId: string) => {
    setMessages((prev) => prev.map((msg) => (msg.id === messageId ? { ...msg, read: true } : msg)))
  }

  const getSenderTypeColor = (type: string) => {
    switch (type) {
      case "teacher":
        return "bg-blue-100 text-blue-800"
      case "student":
        return "bg-green-100 text-green-800"
      case "admin":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)

    if (diffInHours < 24) {
      return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
    } else {
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600">Communication center ({unreadCount} unread)</p>
        </div>
        <Button onClick={() => setShowCompose(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Compose
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Inbox</CardTitle>
                <Badge variant="secondary">{unreadCount}</Badge>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[600px]">
                <div className="space-y-1 p-4">
                  {filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-50 ${
                        selectedMessage?.id === message.id ? "bg-blue-50 border border-blue-200" : ""
                      } ${!message.read ? "bg-blue-25 border-l-4 border-l-blue-500" : ""}`}
                      onClick={() => {
                        setSelectedMessage(message)
                        if (!message.read) markAsRead(message.id)
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">
                            {message.senderName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className={`text-sm truncate ${!message.read ? "font-semibold" : "font-medium"}`}>
                              {message.senderName}
                            </p>
                            <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
                          </div>
                          <p className={`text-sm text-gray-600 truncate mb-1 ${!message.read ? "font-medium" : ""}`}>
                            {message.subject}
                          </p>
                          <p className="text-xs text-gray-500 truncate">{message.content}</p>
                          <div className="flex items-center justify-between mt-2">
                            <Badge className={getSenderTypeColor(message.senderType)} variant="secondary">
                              {message.senderType}
                            </Badge>
                            {message.attachments && message.attachments.length > 0 && (
                              <Paperclip className="h-3 w-3 text-gray-400" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2">
          {selectedMessage ? (
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>
                        {selectedMessage.senderName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{selectedMessage.subject}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-gray-600">From: {selectedMessage.senderName}</span>
                        <Badge className={getSenderTypeColor(selectedMessage.senderType)} variant="secondary">
                          {selectedMessage.senderType}
                        </Badge>
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(selectedMessage.timestamp).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Star className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Archive className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 whitespace-pre-wrap">{selectedMessage.content}</p>
                </div>

                {selectedMessage.attachments && selectedMessage.attachments.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">Attachments</h4>
                    <div className="space-y-2">
                      {selectedMessage.attachments.map((attachment, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 border rounded-lg">
                          <Paperclip className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">{attachment}</span>
                          <Button variant="ghost" size="sm" className="ml-auto">
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reply Section */}
                <div className="border-t pt-6">
                  <h4 className="font-medium mb-3">Reply</h4>
                  <div className="space-y-3">
                    <Textarea
                      placeholder="Type your reply..."
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      className="min-h-[100px]"
                    />
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm">
                        <Paperclip className="h-4 w-4 mr-2" />
                        Attach File
                      </Button>
                      <Button>
                        <Send className="h-4 w-4 mr-2" />
                        Send Reply
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="flex items-center justify-center h-[600px]">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8" />
                  </div>
                  <p>Select a message to view details</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Compose Modal */}
      <Dialog open={showCompose} onOpenChange={setShowCompose}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Compose Message</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">To</label>
                <Input placeholder="Select recipient..." />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Type</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Subject</label>
              <Input placeholder="Message subject..." />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <Textarea placeholder="Type your message..." className="min-h-[200px]" />
            </div>
            <div className="flex items-center justify-between pt-4">
              <Button variant="outline">
                <Paperclip className="h-4 w-4 mr-2" />
                Attach File
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setShowCompose(false)}>
                  Cancel
                </Button>
                <Button>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
