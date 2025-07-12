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
  status: "active" | "inactive"
}

export interface Qualification {
  id: string
  name: string
  rate: number
  type: "private" | "group"
}

export interface ScheduleSlot {
  id: string
  day: string
  startTime: string
  endTime: string
  subject?: string
  type: "available" | "booked" | "unavailable"
}

export interface TeacherProfile extends Teacher {
  qualifications: Qualification[]
  schedule: ScheduleSlot[]
}
