"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input-with-label"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe, Linkedin, Twitter } from "lucide-react"
import type { ContactInfo } from "@/types/teacher-form"

interface ContactInfoStepProps {
  data: ContactInfo
  onChange: (data: Partial<ContactInfo>) => void
  errors: Record<string, string>
  onErrorsChange: (errors: Record<string, string>) => void
}

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Netherlands",
  "Sweden",
]

export function ContactInfoStep({ data, onChange, errors, onErrorsChange }: ContactInfoStepProps) {
  const validateField = (field: string, value: string) => {
    let error = ""

    if (field === "workEmail" && value) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Please enter a valid work email address"
      }
    }

    onErrorsChange({ ...errors, [field]: error })
  }

  const handleInputChange = (field: string, value: string) => {
    if (field.includes(".")) {
      const [section, subField] = field.split(".")
      onChange({
        [section]: {
          ...data[section as keyof ContactInfo],
          [subField]: value,
        },
      })
    } else {
      onChange({ [field]: value })
    }
    validateField(field, value)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Work Contact */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Globe className="h-5 w-5" />
          Professional Contact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Work Email"
            type="email"
            value={data.workEmail}
            onChange={(e) => handleInputChange("workEmail", e.target.value)}
            placeholder="work@school.edu"
            error={errors.workEmail}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
          <Input
            label="Alternate Phone"
            type="tel"
            value={data.alternatePhone}
            onChange={(e) => handleInputChange("alternatePhone", e.target.value)}
            placeholder="+1 (555) 987-6543"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
        </div>
      </motion.div>

      {/* Address */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-white">Address Information</h3>
        <div className="space-y-4">
          <Input
            label="Street Address"
            value={data.address.street}
            onChange={(e) => handleInputChange("address.street", e.target.value)}
            placeholder="123 Main Street"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="City"
              value={data.address.city}
              onChange={(e) => handleInputChange("address.city", e.target.value)}
              placeholder="New York"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Input
              label="State/Province"
              value={data.address.state}
              onChange={(e) => handleInputChange("address.state", e.target.value)}
              placeholder="NY"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="ZIP/Postal Code"
              value={data.address.zipCode}
              onChange={(e) => handleInputChange("address.zipCode", e.target.value)}
              placeholder="10001"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <div className="space-y-2">
              <Label className="text-white">Country</Label>
              <Select
                value={data.address.country}
                onValueChange={(value) => handleInputChange("address.country", value)}
              >
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Social Media */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-white">Social Media (Optional)</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Linkedin className="h-5 w-5 text-blue-400" />
            <Input
              label="LinkedIn Profile"
              value={data.socialMedia.linkedin || ""}
              onChange={(e) => handleInputChange("socialMedia.linkedin", e.target.value)}
              placeholder="https://linkedin.com/in/yourprofile"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 flex-1"
            />
          </div>
          <div className="flex items-center gap-3">
            <Twitter className="h-5 w-5 text-blue-400" />
            <Input
              label="Twitter Profile"
              value={data.socialMedia.twitter || ""}
              onChange={(e) => handleInputChange("socialMedia.twitter", e.target.value)}
              placeholder="https://twitter.com/yourhandle"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 flex-1"
            />
          </div>
          <div className="flex items-center gap-3">
            <Globe className="h-5 w-5 text-green-400" />
            <Input
              label="Personal Website"
              value={data.socialMedia.website || ""}
              onChange={(e) => handleInputChange("socialMedia.website", e.target.value)}
              placeholder="https://yourwebsite.com"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 flex-1"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
