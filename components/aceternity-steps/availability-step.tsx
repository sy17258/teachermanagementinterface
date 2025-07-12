"use client"

import { motion } from "framer-motion"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input-with-label"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, BookOpen } from "lucide-react"
import type { AvailabilityInfo } from "@/types/teacher-form"

interface AvailabilityStepProps {
  data: AvailabilityInfo
  onChange: (data: Partial<AvailabilityInfo>) => void
  errors: Record<string, string>
  onErrorsChange: (errors: Record<string, string>) => void
}

const timezones = [
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "America/Toronto",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "Asia/Tokyo",
  "Australia/Sydney",
]

const teachingMethods = [
  "In-Person",
  "Online",
  "Hybrid",
  "One-on-One",
  "Group Classes",
  "Workshop Style",
  "Project-Based",
  "Interactive Learning",
]

export function AvailabilityStep({ data, onChange, errors, onErrorsChange }: AvailabilityStepProps) {
  const updateTimeSlot = (day: string, field: "startTime" | "endTime" | "available", value: string | boolean) => {
    const updatedSlots = data.timeSlots.map((slot) => (slot.day === day ? { ...slot, [field]: value } : slot))
    onChange({ timeSlots: updatedSlots })
  }

  const toggleTeachingMethod = (method: string) => {
    const currentMethods = data.teachingMethods || []
    const updatedMethods = currentMethods.includes(method)
      ? currentMethods.filter((m) => m !== method)
      : [...currentMethods, method]
    onChange({ teachingMethods: updatedMethods })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Preferred Schedule */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Schedule Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Label className="text-white">Work Preference</Label>
              <RadioGroup
                value={data.preferredSchedule}
                onValueChange={(value: "full-time" | "part-time" | "flexible") =>
                  onChange({ preferredSchedule: value })
                }
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="full-time" id="full-time" />
                  <Label htmlFor="full-time" className="text-white">
                    Full-time (40+ hours/week)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="part-time" id="part-time" />
                  <Label htmlFor="part-time" className="text-white">
                    Part-time (20-39 hours/week)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="flexible" id="flexible" />
                  <Label htmlFor="flexible" className="text-white">
                    Flexible (Variable hours)
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white">Timezone</Label>
                <Select value={data.timezone} onValueChange={(value) => onChange({ timezone: value })}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select your timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    {timezones.map((timezone) => (
                      <SelectItem key={timezone} value={timezone}>
                        {timezone.replace("_", " ")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Input
                label="Max Students Per Class"
                type="number"
                min="1"
                max="50"
                value={data.maxStudentsPerClass}
                onChange={(e) => onChange({ maxStudentsPerClass: Number.parseInt(e.target.value) || 10 })}
                className="bg-white/10 border-white/20 text-white"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Teaching Methods */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Teaching Methods
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {teachingMethods.map((method) => (
                <motion.div key={method} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Badge
                    variant={data.teachingMethods?.includes(method) ? "default" : "outline"}
                    className={`cursor-pointer p-2 text-center w-full transition-colors ${
                      data.teachingMethods?.includes(method)
                        ? "bg-blue-600 text-white"
                        : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                    }`}
                    onClick={() => toggleTeachingMethod(method)}
                  >
                    {method}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Weekly Availability */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Weekly Availability
            </CardTitle>
            <p className="text-sm text-gray-300">Select the days and times you're available to teach</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.timeSlots.map((slot, index) => (
                <motion.div
                  key={slot.day}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-3 border border-white/20 rounded-lg bg-white/5"
                >
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={slot.day}
                      checked={slot.available}
                      onCheckedChange={(checked) => updateTimeSlot(slot.day, "available", checked as boolean)}
                    />
                    <Label htmlFor={slot.day} className="min-w-[100px] font-medium text-white">
                      {slot.day}
                    </Label>
                  </div>

                  {slot.available && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      className="flex items-center gap-2 flex-1"
                    >
                      <div className="flex items-center gap-2">
                        <Label className="text-sm text-white">From:</Label>
                        <Input
                          type="time"
                          value={slot.startTime}
                          onChange={(e) => updateTimeSlot(slot.day, "startTime", e.target.value)}
                          className="w-32 bg-white/10 border-white/20 text-white"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <Label className="text-sm text-white">To:</Label>
                        <Input
                          type="time"
                          value={slot.endTime}
                          onChange={(e) => updateTimeSlot(slot.day, "endTime", e.target.value)}
                          className="w-32 bg-white/10 border-white/20 text-white"
                        />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
