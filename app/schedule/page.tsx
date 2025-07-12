"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Plus, ChevronLeft, ChevronRight, Clock, MapPin, Users, Filter } from "lucide-react"
import type { Schedule } from "@/types"

const mockSchedule: Schedule[] = [
  {
    id: "1",
    title: "Piano Intermediate",
    teacherId: "1",
    teacherName: "Emma Wilson",
    courseId: "1",
    courseName: "Piano Intermediate",
    studentIds: ["1", "2", "3"],
    date: "2024-01-15",
    startTime: "10:00",
    endTime: "11:00",
    type: "class",
    status: "scheduled",
    location: "Room 101",
  },
  {
    id: "2",
    title: "Guitar Basics",
    teacherId: "2",
    teacherName: "John Smith",
    courseId: "2",
    courseName: "Guitar Basics",
    studentIds: ["4", "5"],
    date: "2024-01-15",
    startTime: "11:30",
    endTime: "12:30",
    type: "class",
    status: "scheduled",
    location: "Room 102",
  },
  {
    id: "3",
    title: "Vocal Training",
    teacherId: "3",
    teacherName: "Alynia Allan",
    courseId: "3",
    courseName: "Vocal Training",
    studentIds: ["1", "6"],
    date: "2024-01-15",
    startTime: "14:00",
    endTime: "15:00",
    type: "class",
    status: "scheduled",
    location: "Room 103",
  },
  {
    id: "4",
    title: "Music Theory",
    teacherId: "4",
    teacherName: "David Brown",
    courseId: "4",
    courseName: "Music Theory",
    studentIds: ["2", "3", "4", "5"],
    date: "2024-01-15",
    startTime: "15:30",
    endTime: "16:30",
    type: "class",
    status: "scheduled",
    location: "Room 104",
  },
  {
    id: "5",
    title: "Staff Meeting",
    teacherId: "0",
    teacherName: "All Staff",
    courseId: "0",
    courseName: "Staff Meeting",
    studentIds: [],
    date: "2024-01-15",
    startTime: "17:00",
    endTime: "18:00",
    type: "meeting",
    status: "scheduled",
    location: "Conference Room",
  },
]

const timeSlots = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
]

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [viewMode, setViewMode] = useState<"day" | "week">("day")
  const [selectedEvent, setSelectedEvent] = useState<Schedule | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "class":
        return "bg-purple-100 text-purple-800"
      case "meeting":
        return "bg-orange-100 text-orange-800"
      case "event":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const todaySchedule = mockSchedule.filter((item) => item.date === selectedDate.toISOString().split("T")[0])

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Schedule</h1>
          <p className="text-gray-600">Manage classes and appointments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        </div>
      </div>

      {/* Calendar Navigation */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h2 className="text-lg font-semibold">
                {selectedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h2>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant={viewMode === "day" ? "default" : "outline"} size="sm" onClick={() => setViewMode("day")}>
                Day
              </Button>
              <Button
                variant={viewMode === "week" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("week")}
              >
                Week
              </Button>
            </div>
          </div>

          {viewMode === "day" ? (
            /* Day View */
            <div className="space-y-4">
              {todaySchedule.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No events scheduled for this day</p>
                </div>
              ) : (
                todaySchedule
                  .sort((a, b) => a.startTime.localeCompare(b.startTime))
                  .map((event) => (
                    <Card
                      key={event.id}
                      className="hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-gray-900">{event.title}</h3>
                              <Badge className={getTypeColor(event.type)}>{event.type}</Badge>
                              <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>
                                  {event.startTime} - {event.endTime}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{event.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                <span>{event.studentIds.length} students</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">Teacher: {event.teacherName}</p>
                          </div>
                          <Avatar className="h-10 w-10">
                            <AvatarFallback>
                              {event.teacherName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      </CardContent>
                    </Card>
                  ))
              )}
            </div>
          ) : (
            /* Week View */
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                {/* Header */}
                <div className="grid grid-cols-8 gap-1 mb-2">
                  <div className="p-2 text-sm font-medium text-gray-600">Time</div>
                  {days.map((day) => (
                    <div key={day} className="p-2 text-sm font-medium text-center text-gray-900">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Time Grid */}
                <div className="space-y-1">
                  {timeSlots.map((time) => (
                    <div key={time} className="grid grid-cols-8 gap-1">
                      <div className="p-2 text-xs text-gray-600 border-r">{time}</div>
                      {days.map((day) => (
                        <div
                          key={`${day}-${time}`}
                          className="p-2 min-h-[40px] border rounded text-xs bg-gray-50 hover:bg-gray-100 cursor-pointer"
                        >
                          {/* Events would be positioned here based on time */}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Event Details Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Event Details</DialogTitle>
          </DialogHeader>
          {selectedEvent && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">{selectedEvent.title}</h3>
                <div className="flex gap-2 mb-4">
                  <Badge className={getTypeColor(selectedEvent.type)}>{selectedEvent.type}</Badge>
                  <Badge className={getStatusColor(selectedEvent.status)}>{selectedEvent.status}</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">
                    {selectedEvent.startTime} - {selectedEvent.endTime}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{selectedEvent.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{selectedEvent.studentIds.length} students enrolled</span>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Teacher</h4>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      {selectedEvent.teacherName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{selectedEvent.teacherName}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button variant="outline" className="flex-1 bg-transparent">
                  Edit Event
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  Cancel Event
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
