import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Edit, MoreHorizontal } from "lucide-react"
import type { Teacher } from "@/types/teacher"

interface TeacherProfileHeaderProps {
  teacher: Teacher
}

export function TeacherProfileHeader({ teacher }: TeacherProfileHeaderProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <Avatar className="h-24 w-24 md:h-32 md:w-32">
            <AvatarImage src={teacher.avatar || "/placeholder.svg"} alt={teacher.name} />
            <AvatarFallback className="text-2xl">
              {teacher.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{teacher.name}</h1>
                <p className="text-gray-600">Teacher</p>
              </div>
              <div className="flex gap-2">
                <Badge variant={teacher.status === "active" ? "default" : "secondary"}>{teacher.status}</Badge>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <span>{teacher.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <span>{teacher.workEmail}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>{teacher.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 md:col-span-2 lg:col-span-3">
                <MapPin className="h-4 w-4" />
                <span>
                  {teacher.address.street}, {teacher.address.city}, {teacher.address.country}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
