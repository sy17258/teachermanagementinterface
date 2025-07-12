"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input-with-label"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Upload, X, Camera } from "lucide-react"
import type { PersonalInfo } from "@/types/teacher-form"

interface PersonalInfoStepProps {
  data: PersonalInfo
  onChange: (data: Partial<PersonalInfo>) => void
  errors: Record<string, string>
  onErrorsChange: (errors: Record<string, string>) => void
}

export function PersonalInfoStep({ data, onChange, errors, onErrorsChange }: PersonalInfoStepProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const validateField = (field: keyof PersonalInfo, value: string) => {
    let error = ""

    switch (field) {
      case "firstName":
      case "lastName":
        if (!value.trim()) error = `${field === "firstName" ? "First" : "Last"} name is required`
        else if (value.length < 2)
          error = `${field === "firstName" ? "First" : "Last"} name must be at least 2 characters`
        break
      case "email":
        if (!value.trim()) error = "Email is required"
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Please enter a valid email address"
        break
      case "phone":
        if (!value.trim()) error = "Phone number is required"
        else if (!/^\+?[\d\s\-()]+$/.test(value)) error = "Please enter a valid phone number"
        break
      case "dateOfBirth":
        if (!value) error = "Date of birth is required"
        else {
          const date = new Date(value)
          const today = new Date()
          const age = today.getFullYear() - date.getFullYear()
          if (age < 18) error = "Must be at least 18 years old"
          if (age > 100) error = "Please enter a valid date of birth"
        }
        break
      case "gender":
        if (!value) error = "Please select a gender"
        break
    }

    onErrorsChange({ ...errors, [field]: error })
  }

  const handleInputChange = (field: keyof PersonalInfo, value: string) => {
    onChange({ [field]: value })
    validateField(field, value)
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      onChange({ profileImage: file })
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const removeImage = () => {
    onChange({ profileImage: null })
    setPreviewUrl(null)
  }

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl)
      }
    }
  }, [previewUrl])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative">
          <Avatar className="h-32 w-32 border-4 border-white/20">
            <AvatarImage src={previewUrl || "/placeholder.svg"} />
            <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-400 to-purple-400 text-white">
              {data.firstName && data.lastName ? (
                `${data.firstName[0]}${data.lastName[0]}`
              ) : (
                <Camera className="h-8 w-8" />
              )}
            </AvatarFallback>
          </Avatar>
          {previewUrl && (
            <Button
              variant="destructive"
              size="sm"
              className="absolute -top-2 -right-2 rounded-full h-8 w-8 p-0"
              onClick={removeImage}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <label htmlFor="profile-image" className="cursor-pointer">
              <Upload className="h-4 w-4 mr-2" />
              Upload Photo
              <input id="profile-image" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            </label>
          </Button>
        </div>
      </motion.div>

      {/* Name Fields */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="space-y-2">
          <Input
            label="First Name *"
            value={data.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            placeholder="Enter first name"
            error={errors.firstName}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
        </div>
        <div className="space-y-2">
          <Input
            label="Last Name *"
            value={data.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            placeholder="Enter last name"
            error={errors.lastName}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
        </div>
      </motion.div>

      {/* Email and Phone */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="space-y-2">
          <Input
            label="Email Address *"
            type="email"
            value={data.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="your@email.com"
            error={errors.email}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
        </div>
        <div className="space-y-2">
          <Input
            label="Phone Number *"
            type="tel"
            value={data.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="+1 (555) 123-4567"
            error={errors.phone}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
        </div>
      </motion.div>

      {/* Date of Birth and Gender */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="space-y-2">
          <Input
            label="Date of Birth *"
            type="date"
            value={data.dateOfBirth}
            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
            error={errors.dateOfBirth}
            className="bg-white/10 border-white/20 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-white">Gender *</Label>
          <Select value={data.gender} onValueChange={(value) => handleInputChange("gender", value)}>
            <SelectTrigger
              className={`bg-white/10 border-white/20 text-white ${errors.gender ? "border-red-500" : ""}`}
            >
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.gender && <p className="text-sm text-red-400">{errors.gender}</p>}
        </div>
      </motion.div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="space-y-2"
      >
        <Label className="text-white">Bio (Optional)</Label>
        <Textarea
          value={data.bio}
          onChange={(e) => onChange({ bio: e.target.value })}
          placeholder="Tell us about yourself, your teaching philosophy, and experience..."
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[100px]"
        />
      </motion.div>
    </motion.div>
  )
}
