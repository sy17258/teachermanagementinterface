"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, ArrowLeft, ArrowRight } from "lucide-react"
import { PersonalInfoStep } from "./aceternity-steps/personal-info-step"
import { ContactInfoStep } from "./aceternity-steps/contact-info-step"
import { QualificationsStep } from "./aceternity-steps/qualifications-step"
import { AvailabilityStep } from "./aceternity-steps/availability-step"
import { EmergencyContactStep } from "./aceternity-steps/emergency-contact-step"
import { ReviewStep } from "./aceternity-steps/review-step"
import type { TeacherFormData, FormStep } from "@/types/teacher-form"

const initialFormData: TeacherFormData = {
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    profileImage: null,
    bio: "",
  },
  contactInfo: {
    workEmail: "",
    alternatePhone: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
    socialMedia: {
      linkedin: "",
      twitter: "",
      website: "",
    },
  },
  qualifications: [],
  availability: {
    preferredSchedule: "full-time",
    timeSlots: [
      { day: "Monday", startTime: "", endTime: "", available: false },
      { day: "Tuesday", startTime: "", endTime: "", available: false },
      { day: "Wednesday", startTime: "", endTime: "", available: false },
      { day: "Thursday", startTime: "", endTime: "", available: false },
      { day: "Friday", startTime: "", endTime: "", available: false },
      { day: "Saturday", startTime: "", endTime: "", available: false },
      { day: "Sunday", startTime: "", endTime: "", available: false },
    ],
    timezone: "",
    maxStudentsPerClass: 10,
    teachingMethods: [],
  },
  emergencyContact: {
    name: "",
    relationship: "",
    phone: "",
    email: "",
    address: "",
  },
}

const formSteps: FormStep[] = [
  {
    id: "personal",
    title: "Personal Information",
    description: "Basic details about the teacher",
    completed: false,
    icon: "user",
  },
  {
    id: "contact",
    title: "Contact Information",
    description: "Contact and location details",
    completed: false,
    icon: "contact",
  },
  {
    id: "qualifications",
    title: "Qualifications",
    description: "Teaching subjects and certifications",
    completed: false,
    icon: "graduation-cap",
  },
  {
    id: "availability",
    title: "Availability",
    description: "Schedule preferences and time slots",
    completed: false,
    icon: "calendar",
  },
  {
    id: "emergency",
    title: "Emergency Contact",
    description: "Emergency contact information",
    completed: false,
    icon: "phone",
  },
  {
    id: "review",
    title: "Review & Submit",
    description: "Review all information before submitting",
    completed: false,
    icon: "check",
  },
]

export function AddTeacherForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<TeacherFormData>(initialFormData)
  const [steps, setSteps] = useState(formSteps)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const updateFormData = <K extends keyof TeacherFormData>(section: K, data: Partial<TeacherFormData[K]>) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }))
  }

  const markStepCompleted = (stepIndex: number) => {
    setSteps((prev) => prev.map((step, index) => (index === stepIndex ? { ...step, completed: true } : step)))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      markStepCompleted(currentStep)
      setCurrentStep(currentStep + 1)
      setErrors({})
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setErrors({})
    }
  }

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true)
      setSubmitError("")
      setSubmitSuccess(false)
      
      // Here you would submit the form data to your backend
      console.log("Submitting teacher data:", formData)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setSubmitSuccess(true)
      alert("Teacher added successfully!")

      // Reset form
      setFormData(initialFormData)
      setCurrentStep(0)
      setSteps(formSteps)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitError("Error adding teacher. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalInfoStep
            data={formData.personalInfo}
            onChange={(data) => updateFormData("personalInfo", data)}
            errors={errors}
            onErrorsChange={setErrors}
          />
        )
      case 1:
        return (
          <ContactInfoStep
            data={formData.contactInfo}
            onChange={(data) => updateFormData("contactInfo", data)}
            errors={errors}
            onErrorsChange={setErrors}
          />
        )
      case 2:
        return (
          <QualificationsStep
            data={formData.qualifications}
            onChange={(data) => updateFormData("qualifications", data)}
            errors={errors}
            onErrorsChange={setErrors}
          />
        )
      case 3:
        return (
          <AvailabilityStep
            data={formData.availability}
            onChange={(data) => updateFormData("availability", data)}
            errors={errors}
            onErrorsChange={setErrors}
          />
        )
      case 4:
        return (
          <EmergencyContactStep
            data={formData.emergencyContact}
            onChange={(data) => updateFormData("emergencyContact", data)}
            errors={errors}
            onErrorsChange={setErrors}
          />
        )
      case 5:
        return (
          <ReviewStep 
            data={formData} 
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            submitSuccess={submitSuccess}
            submitError={submitError}
          />
        )
      default:
        return null
    }
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Add New Teacher</CardTitle>
          <div className="space-y-4">
            <Progress value={progress} className="w-full" />
            <div className="flex flex-wrap gap-2">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {step.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <Circle className={`h-5 w-5 ${index === currentStep ? "text-blue-600" : "text-gray-400"}`} />
                    )}
                    <Badge
                      variant={index === currentStep ? "default" : step.completed ? "secondary" : "outline"}
                      className="text-xs"
                    >
                      {step.title}
                    </Badge>
                  </div>
                  {index < steps.length - 1 && <ArrowRight className="h-4 w-4 text-gray-400" />}
                </div>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">{steps[currentStep].title}</h3>
            <p className="text-gray-600">{steps[currentStep].description}</p>
          </div>

          {renderCurrentStep()}

          <div className="flex justify-between pt-6 border-t mt-6">
            <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            {currentStep === steps.length - 1 ? (
              <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                Submit Application
              </Button>
            ) : (
              <Button onClick={handleNext} disabled={Object.keys(errors).length > 0}>
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
