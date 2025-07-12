"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Button as MovingBorderButton } from "@/components/ui/moving-border"
import { CheckCircle, ArrowLeft, ArrowRight, Loader2, Sparkles } from "lucide-react"
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
    title: "Personal Info",
    description: "Basic personal details",
    completed: false,
    icon: "👤",
  },
  {
    id: "contact",
    title: "Contact Details",
    description: "Contact information",
    completed: false,
    icon: "📧",
  },
  {
    id: "qualifications",
    title: "Qualifications",
    description: "Education & certifications",
    completed: false,
    icon: "🎓",
  },
  {
    id: "availability",
    title: "Availability",
    description: "Schedule preferences",
    completed: false,
    icon: "📅",
  },
  {
    id: "emergency",
    title: "Emergency Contact",
    description: "Emergency information",
    completed: false,
    icon: "🚨",
  },
  {
    id: "review",
    title: "Review",
    description: "Final review",
    completed: false,
    icon: "✅",
  },
]

export function AceternityTeacherForm() {
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

  const validateCurrentStep = (): boolean => {
    // Add validation logic for each step
    const hasErrors = Object.values(errors).some((error) => error !== "")
    return !hasErrors
  }

  const handleNext = () => {
    if (validateCurrentStep() && currentStep < steps.length - 1) {
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
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 3000))

      console.log("Submitting teacher data:", formData)

      setSubmitSuccess(true)
      markStepCompleted(currentStep)

      // Reset form after success
      setTimeout(() => {
        setFormData(initialFormData)
        setCurrentStep(0)
        setSteps(formSteps)
        setSubmitSuccess(false)
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitError("Failed to submit application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const navItems = steps.map((step, index) => ({
    name: step.title,
    link: `#step-${index}`,
    icon: <span>{step.icon}</span>,
    completed: step.completed,
    current: index === currentStep,
  }))

  const renderCurrentStep = () => {
    const stepProps = {
      errors,
      onErrorsChange: setErrors,
    }

    switch (currentStep) {
      case 0:
        return (
          <PersonalInfoStep
            data={formData.personalInfo}
            onChange={(data) => updateFormData("personalInfo", data)}
            {...stepProps}
          />
        )
      case 1:
        return (
          <ContactInfoStep
            data={formData.contactInfo}
            onChange={(data) => updateFormData("contactInfo", data)}
            {...stepProps}
          />
        )
      case 2:
        return (
          <QualificationsStep
            data={formData.qualifications}
            onChange={(data) => updateFormData("qualifications", data)}
            {...stepProps}
          />
        )
      case 3:
        return (
          <AvailabilityStep
            data={formData.availability}
            onChange={(data) => updateFormData("availability", data)}
            {...stepProps}
          />
        )
      case 4:
        return (
          <EmergencyContactStep
            data={formData.emergencyContact}
            onChange={(data) => updateFormData("emergencyContact", data)}
            {...stepProps}
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <BackgroundBeams />

      <FloatingNav navItems={navItems} />

      <div className="relative z-10 pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Join Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Teaching Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Create your teacher profile and start inspiring students today
            </p>
          </motion.div>

          {/* Progress */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-medium">Progress</span>
                <span className="text-white/70">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between mt-4 text-sm text-white/70">
                <span>
                  Step {currentStep + 1} of {steps.length}
                </span>
                <span>{steps[currentStep].title}</span>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
              <CardHeader className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-6xl mb-4"
                >
                  {steps[currentStep].icon}
                </motion.div>
                <CardTitle className="text-2xl text-white">{steps[currentStep].title}</CardTitle>
                <p className="text-gray-300">{steps[currentStep].description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <AnimatePresence mode="wait">{renderCurrentStep()}</AnimatePresence>

                {/* Navigation */}
                <div className="flex justify-between pt-6 border-t border-white/20">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>

                  {currentStep === steps.length - 1 ? (
                    <MovingBorderButton
                      onClick={handleSubmit}
                      disabled={isSubmitting || submitSuccess}
                      className="bg-gradient-to-r from-green-500 to-blue-500 text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : submitSuccess ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Success!
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-4 w-4 mr-2" />
                          Submit Application
                        </>
                      )}
                    </MovingBorderButton>
                  ) : (
                    <Button
                      onClick={handleNext}
                      disabled={!validateCurrentStep()}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
                    >
                      Next
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
