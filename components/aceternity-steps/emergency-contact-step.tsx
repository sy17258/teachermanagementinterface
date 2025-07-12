"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input-with-label"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Phone, MapPin, Heart } from "lucide-react"
import type { EmergencyContact } from "@/types/teacher-form"

interface EmergencyContactStepProps {
  data: EmergencyContact
  onChange: (data: Partial<EmergencyContact>) => void
  errors: Record<string, string>
  onErrorsChange: (errors: Record<string, string>) => void
}

const relationships = ["Parent", "Spouse", "Sibling", "Child", "Relative", "Friend", "Partner", "Other"]

export function EmergencyContactStep({ data, onChange, errors, onErrorsChange }: EmergencyContactStepProps) {
  const validateField = (field: keyof EmergencyContact, value: string) => {
    let error = ""

    switch (field) {
      case "name":
        if (!value.trim()) error = "Emergency contact name is required"
        break
      case "relationship":
        if (!value.trim()) error = "Relationship is required"
        break
      case "phone":
        if (!value.trim()) error = "Emergency contact phone is required"
        else if (!/^\+?[\d\s\-()]+$/.test(value)) error = "Please enter a valid phone number"
        break
      case "email":
        if (!value.trim()) error = "Emergency contact email is required"
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Please enter a valid email address"
        break
      case "address":
        if (!value.trim()) error = "Emergency contact address is required"
        break
    }

    onErrorsChange({ ...errors, [field]: error })
  }

  const handleInputChange = (field: keyof EmergencyContact, value: string) => {
    onChange({ [field]: value })
    validateField(field, value)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-red-500/20 rounded-full">
                <AlertTriangle className="h-8 w-8 text-red-400" />
              </div>
            </div>
            <CardTitle className="text-white flex items-center justify-center gap-2">
              <Heart className="h-5 w-5 text-red-400" />
              Emergency Contact Information
            </CardTitle>
            <p className="text-sm text-gray-300 mt-2">
              Please provide details for someone we can contact in case of emergency
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Name and Relationship */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <Input
                label="Full Name *"
                value={data.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="John Doe"
                error={errors.name}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <div className="space-y-2">
                <Label className="text-white">Relationship *</Label>
                <Select value={data.relationship} onValueChange={(value) => handleInputChange("relationship", value)}>
                  <SelectTrigger
                    className={`bg-white/10 border-white/20 text-white ${errors.relationship ? "border-red-500" : ""}`}
                  >
                    <SelectValue placeholder="Select relationship" />
                  </SelectTrigger>
                  <SelectContent>
                    {relationships.map((relationship) => (
                      <SelectItem key={relationship} value={relationship}>
                        {relationship}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.relationship && <p className="text-sm text-red-400">{errors.relationship}</p>}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <h4 className="text-white font-medium">Contact Details</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Phone Number *"
                  type="tel"
                  value={data.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  error={errors.phone}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Input
                  label="Email Address *"
                  type="email"
                  value={data.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="emergency@example.com"
                  error={errors.email}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-green-400" />
                <h4 className="text-white font-medium">Address</h4>
              </div>
              <Input
                label="Full Address *"
                value={data.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="123 Main Street, City, State, ZIP"
                error={errors.address}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </motion.div>

            {/* Important Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5" />
                <div>
                  <h5 className="text-yellow-400 font-medium mb-1">Important Note</h5>
                  <p className="text-sm text-yellow-200">
                    This contact will only be used in case of emergencies. Please ensure all information is accurate and
                    up-to-date.
                  </p>
                </div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
