export interface Teacher {
  id: string
  name: string
  email: string
  workEmail: string
  phone: string
  address: {
    street: string
    city: string
    country: string
  }
  avatar?: string
  status: "active" | "inactive" | "pending"
  department: string
  joinDate: string
  salary: number
  subjects: string[]
}

export interface Student {
  id: string
  name: string
  email: string
  phone: string
  avatar?: string
  status: "active" | "inactive" | "graduated"
  enrollmentDate: string
  grade: string
  parentName: string
  parentEmail: string
  parentPhone: string
  courses: string[]
}

export interface Course {
  id: string
  name: string
  code: string
  description: string
  teacherId: string
  teacherName: string
  students: number
  maxStudents: number
  schedule: {
    day: string
    startTime: string
    endTime: string
  }[]
  status: "active" | "inactive" | "completed"
  startDate: string
  endDate: string
  price: number
}

export interface Schedule {
  id: string
  title: string
  teacherId: string
  teacherName: string
  courseId: string
  courseName: string
  studentIds: string[]
  date: string
  startTime: string
  endTime: string
  type: "class" | "meeting" | "event"
  status: "scheduled" | "completed" | "cancelled"
  location: string
}

export interface Message {
  id: string
  senderId: string
  senderName: string
  senderType: "teacher" | "student" | "admin"
  recipientId: string
  recipientName: string
  recipientType: "teacher" | "student" | "admin"
  subject: string
  content: string
  timestamp: string
  read: boolean
  attachments?: string[]
}

export interface TimeEntry {
  id: string
  teacherId: string
  teacherName: string
  date: string
  clockIn: string
  clockOut?: string
  totalHours: number
  status: "clocked-in" | "clocked-out" | "break"
  notes?: string
}

export interface DashboardStats {
  totalTeachers: number
  totalStudents: number
  totalCourses: number
  activeClasses: number
  revenue: number
  attendance: number
}
