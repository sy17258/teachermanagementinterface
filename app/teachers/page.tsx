"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Plus, Search, Filter, MoreHorizontal, Mail, Phone, MapPin, Edit, Trash2, Eye } from "lucide-react"
import type { Teacher } from "@/types"

const mockTeachers: Teacher[] = [
  {
    id: "1",
    name: "Alynia Allan",
    email: "alynia@teacherhub.com",
    workEmail: "alynia.work@teacherhub.com",
    phone: "(416) 555-0123",
    address: {
      street: "123 University Ave",
      city: "Toronto, ON",
      country: "Canada",
    },
    avatar: "/placeholder.svg",
    status: "active",
    department: "Music",
    joinDate: "2023-01-15",
    salary: 65000,
    subjects: ["Vocal Training", "Music Theory"],
  },
  {
    id: "2",
    name: "John Smith",
    email: "john@teacherhub.com",
    workEmail: "john.work@teacherhub.com",
    phone: "(416) 555-0124",
    address: {
      street: "456 College St",
      city: "Toronto, ON",
      country: "Canada",
    },
    status: "active",
    department: "Music",
    joinDate: "2022-09-01",
    salary: 70000,
    subjects: ["Guitar", "Bass"],
  },
  {
    id: "3",
    name: "Emma Wilson",
    email: "emma@teacherhub.com",
    workEmail: "emma.work@teacherhub.com",
    phone: "(416) 555-0125",
    address: {
      street: "789 Queen St",
      city: "Toronto, ON",
      country: "Canada",
    },
    status: "active",
    department: "Music",
    joinDate: "2023-03-10",
    salary: 68000,
    subjects: ["Piano", "Keyboard"],
  },
  {
    id: "4",
    name: "Michael Brown",
    email: "michael@teacherhub.com",
    workEmail: "michael.work@teacherhub.com",
    phone: "(416) 555-0126",
    address: {
      street: "321 King St",
      city: "Toronto, ON",
      country: "Canada",
    },
    status: "pending",
    department: "Music",
    joinDate: "2024-01-05",
    salary: 62000,
    subjects: ["Drums", "Percussion"],
  },
]

export default function TeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>(mockTeachers)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null)

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subjects.some((subject) => subject.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Teachers</h1>
          <p className="text-gray-600">Manage your teaching staff</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Teacher
        </Button>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search teachers..."
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

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher) => (
          <Card key={teacher.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={teacher.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {teacher.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900">{teacher.name}</h3>
                    <p className="text-sm text-gray-600">{teacher.department}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setSelectedTeacher(teacher)}>
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
                <Badge className={getStatusColor(teacher.status)}>{teacher.status}</Badge>
                <span className="text-sm text-gray-500">Joined {new Date(teacher.joinDate).toLocaleDateString()}</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{teacher.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>{teacher.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="truncate">{teacher.address.city}</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Subjects</p>
                <div className="flex flex-wrap gap-1">
                  {teacher.subjects.map((subject) => (
                    <Badge key={subject} variant="secondary" className="text-xs">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Teacher Details Modal */}
      <Dialog open={!!selectedTeacher} onOpenChange={() => setSelectedTeacher(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Teacher Details</DialogTitle>
          </DialogHeader>
          {selectedTeacher && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={selectedTeacher.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {selectedTeacher.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">{selectedTeacher.name}</h3>
                  <p className="text-gray-600">{selectedTeacher.department} Department</p>
                  <Badge className={getStatusColor(selectedTeacher.status)}>{selectedTeacher.status}</Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600">Email:</span>
                      <span className="ml-2">{selectedTeacher.email}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Work Email:</span>
                      <span className="ml-2">{selectedTeacher.workEmail}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Phone:</span>
                      <span className="ml-2">{selectedTeacher.phone}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Address:</span>
                      <span className="ml-2">
                        {selectedTeacher.address.street}, {selectedTeacher.address.city}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Employment Details</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600">Join Date:</span>
                      <span className="ml-2">{new Date(selectedTeacher.joinDate).toLocaleDateString()}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Salary:</span>
                      <span className="ml-2">${selectedTeacher.salary.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Subjects:</span>
                      <div className="mt-1">
                        {selectedTeacher.subjects.map((subject) => (
                          <Badge key={subject} variant="secondary" className="mr-1 mb-1">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
