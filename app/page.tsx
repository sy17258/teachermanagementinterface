"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  GraduationCap,
  BookOpen,
  Calendar,
  DollarSign,
  TrendingUp,
  Clock,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

const stats = [
  {
    title: "Total Teachers",
    value: "12",
    change: "+2",
    changeType: "increase" as const,
    icon: GraduationCap,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Total Students",
    value: "156",
    change: "+12",
    changeType: "increase" as const,
    icon: Users,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Active Courses",
    value: "8",
    change: "+1",
    changeType: "increase" as const,
    icon: BookOpen,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Today's Classes",
    value: "24",
    change: "-2",
    changeType: "decrease" as const,
    icon: Calendar,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "Monthly Revenue",
    value: "$12,450",
    change: "+8.2%",
    changeType: "increase" as const,
    icon: DollarSign,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Attendance Rate",
    value: "94.2%",
    change: "+1.2%",
    changeType: "increase" as const,
    icon: TrendingUp,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
]

const recentActivities = [
  {
    id: 1,
    type: "enrollment",
    message: "Sarah Johnson enrolled in Advanced Piano",
    time: "2 minutes ago",
    icon: Users,
  },
  {
    id: 2,
    type: "class",
    message: "Guitar Basics class completed",
    time: "1 hour ago",
    icon: Clock,
  },
  {
    id: 3,
    type: "teacher",
    message: "New teacher Michael Brown joined",
    time: "3 hours ago",
    icon: GraduationCap,
  },
  {
    id: 4,
    type: "alert",
    message: "Low attendance in Vocal Training",
    time: "5 hours ago",
    icon: AlertCircle,
  },
]

const upcomingClasses = [
  {
    id: 1,
    course: "Piano Intermediate",
    teacher: "Emma Wilson",
    time: "10:00 AM",
    students: 8,
    status: "scheduled",
  },
  {
    id: 2,
    course: "Guitar Basics",
    teacher: "John Smith",
    time: "11:30 AM",
    students: 12,
    status: "scheduled",
  },
  {
    id: 3,
    course: "Vocal Training",
    teacher: "Alynia Allan",
    time: "2:00 PM",
    students: 6,
    status: "scheduled",
  },
  {
    id: 4,
    course: "Music Theory",
    teacher: "David Brown",
    time: "3:30 PM",
    students: 15,
    status: "scheduled",
  },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Overview of your teaching management system</p>
        </div>
        <Button>
          <Calendar className="h-4 w-4 mr-2" />
          View Full Schedule
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      {stat.changeType === "increase" ? (
                        <ArrowUpRight className="h-4 w-4 text-green-600" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-600" />
                      )}
                      <span
                        className={`text-sm font-medium ml-1 ${
                          stat.changeType === "increase" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {stat.change}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">from last month</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => {
                const Icon = activity.icon
                return (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Icon className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Classes */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingClasses.map((class_) => (
                <div key={class_.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{class_.course}</h4>
                    <p className="text-sm text-gray-600">{class_.teacher}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-sm text-gray-500">{class_.time}</span>
                      <span className="text-sm text-gray-500">{class_.students} students</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {class_.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
