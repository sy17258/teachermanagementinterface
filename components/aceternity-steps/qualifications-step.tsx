"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input-with-label"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Trash2, GraduationCap, Award } from "lucide-react"
import type { QualificationInfo } from "@/types/teacher-form"

interface QualificationsStepProps {
  data: QualificationInfo[]
  onChange: (data: QualificationInfo[]) => void
  errors: Record<string, string>
  onErrorsChange: (errors: Record<string, string>) => void
}

const subjects = [
  "Mathematics",
  "English",
  "Science",
  "History",
  "Geography",
  "Art",
  "Music",
  "Physical Education",
  "Computer Science",
  "Foreign Languages",
  "Vocal Training",
  "Piano",
  "Guitar",
  "Violin",
  "Biology",
  "Chemistry",
  "Physics",
]

const levels = ["Elementary", "Middle School", "High School", "College", "Graduate", "All Levels"]

const degrees = [
  "High School Diploma",
  "Associate Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "Doctoral Degree",
  "Professional Certificate",
  "Teaching Certificate",
]

export function QualificationsStep({ data, onChange, errors, onErrorsChange }: QualificationsStepProps) {
  const [isAdding, setIsAdding] = useState(false)
  const [newQualification, setNewQualification] = useState<Omit<QualificationInfo, "id">>({
    degree: "",
    institution: "",
    graduationYear: "",
    subject: "",
    level: "",
    certification: "",
    rate: 0,
    type: "private",
    experience: 0,
  })

  const addQualification = () => {
    if (newQualification.subject && newQualification.level && newQualification.rate > 0) {
      const qualification: QualificationInfo = {
        ...newQualification,
        id: Math.random().toString(36).substr(2, 9),
      }
      onChange([...data, qualification])
      setNewQualification({
        degree: "",
        institution: "",
        graduationYear: "",
        subject: "",
        level: "",
        certification: "",
        rate: 0,
        type: "private",
        experience: 0,
      })
      setIsAdding(false)
    }
  }

  const removeQualification = (id: string) => {
    onChange(data.filter((q) => q.id !== id))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-blue-400" />
          <div>
            <h3 className="text-lg font-medium text-white">Teaching Qualifications</h3>
            <p className="text-sm text-gray-300">Add your education and teaching certifications</p>
          </div>
        </div>
        <Button
          onClick={() => setIsAdding(true)}
          disabled={isAdding}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Qualification
        </Button>
      </div>

      {/* Add New Qualification Form */}
      <AnimatePresence>
        {isAdding && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  New Qualification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white">Degree/Certificate</Label>
                    <Select
                      value={newQualification.degree}
                      onValueChange={(value) => setNewQualification((prev) => ({ ...prev, degree: value }))}
                    >
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select degree" />
                      </SelectTrigger>
                      <SelectContent>
                        {degrees.map((degree) => (
                          <SelectItem key={degree} value={degree}>
                            {degree}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Input
                    label="Institution"
                    value={newQualification.institution}
                    onChange={(e) => setNewQualification((prev) => ({ ...prev, institution: e.target.value }))}
                    placeholder="University/School name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    label="Graduation Year"
                    type="number"
                    min="1950"
                    max="2030"
                    value={newQualification.graduationYear}
                    onChange={(e) => setNewQualification((prev) => ({ ...prev, graduationYear: e.target.value }))}
                    placeholder="2020"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <div className="space-y-2">
                    <Label className="text-white">Subject</Label>
                    <Select
                      value={newQualification.subject}
                      onValueChange={(value) => setNewQualification((prev) => ({ ...prev, subject: value }))}
                    >
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject} value={subject}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white">Level</Label>
                    <Select
                      value={newQualification.level}
                      onValueChange={(value) => setNewQualification((prev) => ({ ...prev, level: value }))}
                    >
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        {levels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Input
                  label="Additional Certifications"
                  value={newQualification.certification}
                  onChange={(e) => setNewQualification((prev) => ({ ...prev, certification: e.target.value }))}
                  placeholder="e.g., TESOL Certificate, Music Theory Certification"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    label="Hourly Rate ($)"
                    type="number"
                    min="0"
                    step="0.01"
                    value={newQualification.rate}
                    onChange={(e) =>
                      setNewQualification((prev) => ({ ...prev, rate: Number.parseFloat(e.target.value) || 0 }))
                    }
                    placeholder="50.00"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <div className="space-y-2">
                    <Label className="text-white">Type</Label>
                    <Select
                      value={newQualification.type}
                      onValueChange={(value: "private" | "group") =>
                        setNewQualification((prev) => ({ ...prev, type: value }))
                      }
                    >
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="private">Private</SelectItem>
                        <SelectItem value="group">Group</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Input
                    label="Years of Experience"
                    type="number"
                    min="0"
                    value={newQualification.experience}
                    onChange={(e) =>
                      setNewQualification((prev) => ({ ...prev, experience: Number.parseInt(e.target.value) || 0 }))
                    }
                    placeholder="5"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>

                <div className="flex gap-2 pt-4">
                  <Button onClick={addQualification} className="bg-green-600 hover:bg-green-700">
                    Add Qualification
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsAdding(false)}
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Existing Qualifications */}
      <AnimatePresence>
        {data.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
            <h4 className="font-medium text-white">Added Qualifications ({data.length})</h4>
            {data.map((qualification, index) => (
              <motion.div
                key={qualification.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h5 className="font-medium text-white">{qualification.subject}</h5>
                          <Badge variant="outline" className="border-blue-400 text-blue-400">
                            {qualification.level}
                          </Badge>
                          <Badge variant={qualification.type === "private" ? "default" : "secondary"}>
                            {qualification.type}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-300">
                          <div>
                            {qualification.degree} - {qualification.institution}
                          </div>
                          <div>Rate: ${qualification.rate}/hr</div>
                          <div>Experience: {qualification.experience} years</div>
                        </div>
                        {qualification.certification && (
                          <div className="text-sm text-gray-300 mt-1">Cert: {qualification.certification}</div>
                        )}
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeQualification(qualification.id)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {data.length === 0 && !isAdding && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 text-gray-400">
          <GraduationCap className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>No qualifications added yet. Click "Add Qualification" to get started.</p>
        </motion.div>
      )}
    </motion.div>
  )
}
