export interface PersonalInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  gender: "male" | "female" | "other" | ""
  profileImage?: File | null
  bio: string
}

export interface ContactInfo {
  workEmail: string
  alternatePhone: string
  address: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  socialMedia: {
    linkedin?: string
    twitter?: string
    website?: string
  }
}

export interface QualificationInfo {
  id: string
  degree: string
  institution: string
  graduationYear: string
  subject: string
  level: string
  certification: string
  rate: number
  type: "private" | "group"
  experience: number
}

export interface AvailabilityInfo {
  preferredSchedule: "full-time" | "part-time" | "flexible"
  timeSlots: {
    day: string
    startTime: string
    endTime: string
    available: boolean
  }[]
  timezone: string
  maxStudentsPerClass: number
  teachingMethods: string[]
}

export interface EmergencyContact {
  name: string
  relationship: string
  phone: string
  email: string
  address: string
}

export interface TeacherFormData {
  personalInfo: PersonalInfo
  contactInfo: ContactInfo
  qualifications: QualificationInfo[]
  availability: AvailabilityInfo
  emergencyContact: EmergencyContact
}

export interface FormStep {
  id: string
  title: string
  description: string
  completed: boolean
  icon: string
}
