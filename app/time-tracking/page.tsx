"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Clock, Play, Pause, Square, Calendar, Filter, Download, Plus, Edit, Trash2 } from "lucide-react"
import type { TimeEntry } from "@/types"

const mockTimeEntries: TimeEntry[] = [
  {
    id: "1",
    teacherId: "1",
    teacherName: "Emma Wilson",
    date: "2024-01-15",
    clockIn: "09:00",
    clockOut: "17:00",
    totalHours: 8,
    status: "clocked-out",
    notes: "Regular teaching day - Piano lessons",
  },
  {
    id: "2",
    teacherId: "2",
    teacherName: "John Smith",
    date: "2024-01-15",
    clockIn: "10:00",
    clockOut: "16:00",
    totalHours: 6,
    status: "clocked-out",
    notes: "Guitar lessons and practice sessions",
  },
  {
    id: "3",
    teacherId: "3",
    teacherName: "Alynia Allan",
    date: "2024-01-15",
    clockIn: "14:00",
    clockOut: undefined,
    totalHours: 0,
    status: "clocked-in",
    notes: "Vocal training sessions",
  },
  {
    id: "4",
    teacherId: "4",
    teacherName: "David Brown",
    date: "2024-01-15",
    clockIn: "11:00",
    clockOut: "15:00",
    totalHours: 4,
    status: "clocked-out",
    notes: "Music theory classes",
  },
  {
    id: "5",
    teacherId: "1",
    teacherName: "Emma Wilson",
    date: "2024-01-14",
    clockIn: "09:30",
    clockOut: "17:30",
    totalHours: 8,
    status: "clocked-out",
    notes: "Piano lessons and student evaluations",
  },
]

export default function TimeTrackingPage() {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>(mockTimeEntries)
  const [selectedEntry, setSelectedEntry] = useState<TimeEntry | null>(null)
  const [showAddEntry, setShowAddEntry] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "clocked-in":
        return "bg-green-100 text-green-800"
      case "clocked-out":
        return "bg-gray-100 text-gray-800"
      case "break":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "clocked-in":
        return <Play className="h-4 w-4" />
      case "clocked-out":
        return <Square className="h-4 w-4" />
      case "break":
        return <Pause className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const todayEntries = timeEntries.filter((entry) => entry.date === new Date().toISOString().split("T")[0])
  const totalHoursToday = todayEntries.reduce((sum, entry) => sum + entry.totalHours, 0)
  const activeTeachers = todayEntries.filter((entry) => entry.status === "clocked-in").length

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Time Tracking</h1>
          <p className="text-gray-600">Monitor teacher hours and attendance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button onClick={() => setShowAddEntry(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Entry
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today's Total Hours</p>
                <p className="text-2xl font-bold text-gray-900">{totalHoursToday}h</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Teachers</p>
                <p className="text-2xl font-bold text-gray-900">{activeTeachers}</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <Play className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Teachers Today</p>
                <p className="text-2xl font-bold text-gray-900">{todayEntries.length}</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Status */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Current Status</CardTitle>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {todayEntries.map((entry) => (
              <div key={entry.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>
                      {entry.teacherName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-gray-900">{entry.teacherName}</h4>
                    <p className="text-sm text-gray-600">
                      Clock in: {entry.clockIn}
                      {entry.clockOut && ` • Clock out: ${entry.clockOut}`}
                    </p>
                    {entry.notes && <p className="text-xs text-gray-500 mt-1">{entry.notes}</p>}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-medium text-gray-900">
                      {entry.status === "clocked-in" ? "Active" : `${entry.totalHours}h`}
                    </p>
                    <Badge className={getStatusColor(entry.status)}>
                      <span className="flex items-center gap-1">
                        {getStatusIcon(entry.status)}
                        {entry.status}
                      </span>
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setSelectedEntry(entry)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Time Entries History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Entries</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {timeEntries
              .filter((entry) => entry.date !== new Date().toISOString().split("T")[0])
              .slice(0, 10)
              .map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">
                        {entry.teacherName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900">{entry.teacherName}</p>
                      <p className="text-sm text-gray-600">
                        {new Date(entry.date).toLocaleDateString()} • {entry.clockIn} - {entry.clockOut}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-900">{entry.totalHours}h</span>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* Edit Entry Modal */}
      <Dialog open={!!selectedEntry} onOpenChange={() => setSelectedEntry(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Edit Time Entry</DialogTitle>
          </DialogHeader>
          {selectedEntry && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Teacher</label>
                <Input value={selectedEntry.teacherName} disabled />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Date</label>
                <Input type="date" value={selectedEntry.date} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Clock In</label>
                  <Input type="time" value={selectedEntry.clockIn} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Clock Out</label>
                  <Input type="time" value={selectedEntry.clockOut || ""} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Notes</label>
                <Input value={selectedEntry.notes || ""} placeholder="Add notes..." />
              </div>
              <div className="flex gap-2 pt-4">
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
                <Button className="flex-1">Save Changes</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Add Entry Modal */}
      <Dialog open={showAddEntry} onOpenChange={setShowAddEntry}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Add Time Entry</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Teacher</label>
              <select className="w-full p-2 border rounded-md">
                <option value="">Select teacher...</option>
                <option value="1">Emma Wilson</option>
                <option value="2">John Smith</option>
                <option value="3">Alynia Allan</option>
                <option value="4">David Brown</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Date</label>
              <Input type="date" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Clock In</label>
                <Input type="time" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Clock Out</label>
                <Input type="time" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Notes</label>
              <Input placeholder="Add notes..." />
            </div>
            <div className="flex gap-2 pt-4">
              <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setShowAddEntry(false)}>
                Cancel
              </Button>
              <Button className="flex-1">Add Entry</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
