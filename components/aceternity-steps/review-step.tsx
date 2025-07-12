"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, User, Mail, GraduationCap, Calendar, Phone, AlertCircle, Loader2, Sparkles } from "lucide-react"
import { Button as MovingBorderButton } from "@/components/ui/moving-border"
import type { TeacherFormData } from "@/types/teacher-form"

interface ReviewStepProps {
  data: TeacherFormData
  onSubmit: () => void
  isSubmitting: boolean
  submitSuccess: boolean
  submitError: string
}

export function ReviewStep({ data, onSubmit, isSubmitting, submitSuccess, submitError }: ReviewStepProps) {
  const { personalInfo, contactInfo, qualifications, availability, emergencyContact } = data

  const getAvailableDays = () => {
    return availability.timeSlots
      .filter((slot) => slot.available)
      .map((slot) => `${slot.day} (${slot.startTime} - ${slot.endTime})`)
  }

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-12 w-12 text-green-400" />
          </div>
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl font-bold text-white mb-4"
        >
          Application Submitted Successfully! 🎉
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-300 mb-6"
        >
          Thank you for joining our teaching team. We'll review your application and get back to you soon.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-sm text-gray-400"
        >
          You should receive a confirmation email shortly.
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle className="h-8 w-8 text-blue-400" />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-2">Review Your Application</h3>
        <p className="text-gray-300">Please review all information before submitting your teacher application</p>
      </div>

      {/* Personal Information */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16 border-2 border-white/20">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-400 text-white">
                  {personalInfo.firstName[0]}
                  {personalInfo.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <h4 className="font-medium text-white text-lg">
                  {personalInfo.firstName} {personalInfo.lastName}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-300">
                  <div>Email: {personalInfo.email}</div>
                  <div>Phone: {personalInfo.phone}</div>
                  <div>Date of Birth: {personalInfo.dateOfBirth}</div>
                  <div>Gender: {personalInfo.gender}</div>
                </div>
                {personalInfo.bio && (
                  <div className="text-sm text-gray-300 mt-2">
                    <strong>Bio:</strong> {personalInfo.bio}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>Work Email: {contactInfo.workEmail || "Not provided"}</div>
              <div>Alternate Phone: {contactInfo.alternatePhone || "Not provided"}</div>
            </div>
            <div className="text-sm text-gray-300">
              <strong>Address:</strong>
              <br />
              {contactInfo.address.street}
              <br />
              {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zipCode}
              <br />
              {contactInfo.address.country}
            </div>
            {(contactInfo.socialMedia.linkedin ||
              contactInfo.socialMedia.twitter ||
              contactInfo.socialMedia.website) && (
              <div className="text-sm text-gray-300">
                <strong>Social Media:</strong>
                <div className="mt-1 space-y-1">
                  {contactInfo.socialMedia.linkedin && <div>LinkedIn: {contactInfo.socialMedia.linkedin}</div>}
                  {contactInfo.socialMedia.twitter && <div>Twitter: {contactInfo.socialMedia.twitter}</div>}
                  {contactInfo.socialMedia.website && <div>Website: {contactInfo.socialMedia.website}</div>}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Qualifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Qualifications ({qualifications.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {qualifications.length > 0 ? (
              <div className="space-y-3">
                {qualifications.map((qualification, index) => (
                  <motion.div
                    key={qualification.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 border border-white/20 rounded-lg bg-white/5"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-white">{qualification.subject}</span>
                        <Badge variant="outline" className="border-blue-400 text-blue-400">
                          {qualification.level}
                        </Badge>
                        <Badge variant={qualification.type === "private" ? "default" : "secondary"}>
                          {qualification.type}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-300">
                        {qualification.degree} - {qualification.institution} ({qualification.graduationYear})
                      </div>
                      <div className="text-sm text-gray-300">
                        ${qualification.rate}/hr • {qualification.experience} years experience
                        {qualification.certification && ` • ${qualification.certification}`}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400">No qualifications added</p>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Availability */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Availability
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>Schedule: {availability.preferredSchedule}</div>
              <div>Timezone: {availability.timezone}</div>
              <div>Max Students: {availability.maxStudentsPerClass}</div>
            </div>
            {availability.teachingMethods && availability.teachingMethods.length > 0 && (
              <div>
                <span className="text-sm font-medium text-white">Teaching Methods:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {availability.teachingMethods.map((method) => (
                    <Badge key={method} variant="outline" className="border-green-400 text-green-400">
                      {method}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            <div>
              <span className="text-sm font-medium text-white">Available Days:</span>
              <div className="mt-2 space-y-1">
                {getAvailableDays().length > 0 ? (
                  getAvailableDays().map((day, index) => (
                    <div key={index} className="text-sm text-gray-300">
                      {day}
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-400">No availability set</div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Emergency Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Emergency Contact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-gray-300">
              <div>
                <span className="font-medium text-white">{emergencyContact.name}</span>
                <span className="ml-2">({emergencyContact.relationship})</span>
              </div>
              <div>Phone: {emergencyContact.phone}</div>
              <div>Email: {emergencyContact.email}</div>
              <div>Address: {emergencyContact.address}</div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Submit Error */}
      {submitError && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-red-500/10 border border-red-500/20 rounded-lg p-4"
        >
          <div className="flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-red-400" />
            <div>
              <h5 className="text-red-400 font-medium">Submission Error</h5>
              <p className="text-sm text-red-300">{submitError}</p>
            </div>
          </div>
        </motion.div>
      )}

      <Separator className="bg-white/20" />

      <div className="text-center">
        <MovingBorderButton
          onClick={onSubmit}
          disabled={isSubmitting}
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white min-w-[200px]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Submitting Application...
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4 mr-2" />
              Submit Teacher Application
            </>
          )}
        </MovingBorderButton>
        <p className="text-sm text-gray-400 mt-4">
          By submitting, you agree to our terms and conditions and privacy policy
        </p>
      </div>
    </motion.div>
  )
}
