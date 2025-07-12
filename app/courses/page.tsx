"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Plus, Search, Filter, MoreHorizontal, Users, Calendar, Edit, Trash2, Eye, BookOpen, Clock } from "lucide-react"
import type { Course } from "@/types"

const mockCourses: Course[] = [
  {
    id: "1",
    name: "Piano Intermediate",
    code: "PI-101",
    description: "Intermediate piano lessons focusing on classical and contemporary pieces",
    teacherId: "1",
    teacherName: "Emma Wilson",
    students: 8,
    maxStudents: 12,
    schedule: [
      { day: "Monday", startTime: "10:00", endTime: "11:00" },
      { day: "Wednesday", startTime: "10:00", endTime: "11:00" },
    ],
    status: "active",
    startDate: "2024-01-15",
    endDate: "2024-06-15",
    price: 120,
  },
  {
    id: "2",
    name: "Guitar Basics",
    code: "GB-101",
    description: "Learn the fundamentals of guitar playing",
    teacherId: "2",
    teacherName: "John Smith",
    students: 12,
    maxStudents: 15,
    schedule: [
      { day: "Tuesday", startTime: "14:00", endTime: "15:00" },
      { day: "Thursday", startTime: "14:00", endTime: "15:00" },
    ],
    status: "active",
    startDate: "2024-01-10",
    endDate: "2024-05-10",
    price: 100,
  },
  {
    id: "3",
    name: "Vocal Training",
    code: "VT-201",
    description: "Advanced vocal techniques and performance skills",
    teacherId: "3",
    teacherName: "Alynia Allan",
    students: 6,
    maxStudents: 10,
    schedule: [
      { day: "Monday", startTime: "15:00", endTime: "16:00" },
      { day: "Friday", startTime: "15:00", endTime: "16:00" },
    ],
    status: "active",
    startDate: "2024-02-01",
    endDate: "2024-07-01",
    price: 150,
  },
  {
    id: "4",
    name: "Music Theory",
    code: "MT-101",
    description: "Fundamentals of music theory and composition",
    teacherId: "4",
    teacherName: "David Brown",
    students: 15,
    maxStudents: 20,
    schedule: [
      { day: "Wednesday", startTime: "16:00", endTime: "17:00" },
      { day: "Friday", startTime: "16:00", endTime: "17:00" },
    ],
    status: "active",
    startDate: "2024-01-08",
    endDate: "2024-06-08",
    price: 80,
  },
  {
    id: "5",
    name: "Drums Advanced",
    code: "DA-301",
    description: "Advanced drumming techniques and rhythm patterns",
    teacherId: "5",
    teacherName: "Michael Brown",
    students: 4,
    maxStudents: 8,
    schedule: [
      { day: "Tuesday", startTime: "17:00", endTime: "18:00" },
      { day: "Saturday", startTime: "10:00", endTime: "11:00" },
    ],
    status: "inactive",
    startDate: "2024-03-01",
    endDate: "2024-08-01",
    price: 140,
  },
]

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>(mockCourses)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.teacherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getEnrollmentColor = (current: number, max: number) => {
    const percentage = (current / max) * 100
    if (percentage >= 90) return "text-red-600"
    if (percentage >= 75) return "text-yellow-600"
    return "text-green-600"
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Courses</h1>
          <p className="text-gray-600">Manage course offerings and enrollment</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Course
        </Button>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{course.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {course.code}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setSelectedCourse(course)}>
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge className={getStatusColor(course.status)}>{course.status}</Badge>
                <span className="text-lg font-bold text-gray-900">${course.price}</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <BookOpen className="h-4 w-4" />
                  <span>Teacher: {course.teacherName}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-gray-600" />
                  <span className={getEnrollmentColor(course.students, course.maxStudents)}>
                    {course.students}/{course.maxStudents} students
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(course.startDate).toLocaleDateString()} - {new Date(course.endDate).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Schedule</p>
                <div className="space-y-1">
                  {course.schedule.map((slot, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                      <Clock className="h-3 w-3" />
                      <span>
                        {slot.day}: {slot.startTime} - {slot.endTime}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Course Details Modal */}
      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Course Details</DialogTitle>
          </DialogHeader>
          {selectedCourse && (
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{selectedCourse.name}</h3>
                  <p className="text-gray-600 mb-2">{selectedCourse.code}</p>
                  <Badge className={getStatusColor(selectedCourse.status)}>{selectedCourse.status}</Badge>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">${selectedCourse.price}</p>
                  <p className="text-sm text-gray-600">per month</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Description</h4>
                <p className="text-gray-600">{selectedCourse.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Course Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-gray-500" />
                      <span>Teacher: {selectedCourse.teacherName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span>
                        Enrollment: {selectedCourse.students}/{selectedCourse.maxStudents} students
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>
                        Duration: {new Date(selectedCourse.startDate).toLocaleDateString()} -{" "}
                        {new Date(selectedCourse.endDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Schedule</h4>
                  <div className="space-y-2">
                    {selectedCourse.schedule.map((slot, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span>
                          {slot.day}: {slot.startTime} - {slot.endTime}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button variant="outline" className="flex-1 bg-transparent">
                  Edit Course
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  Manage Students
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  View Schedule
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
