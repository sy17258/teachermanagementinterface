"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Plus, ChevronLeft, ChevronRight } from "lucide-react"
import type { ScheduleSlot } from "@/types/teacher"

interface ScheduleSectionProps {
  schedule: ScheduleSlot[]
}

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const timeSlots = [
  "7:30am",
  "8am",
  "8:30am",
  "9am",
  "9:30am",
  "10am",
  "10:30am",
  "11am",
  "11:30am",
  "12pm",
  "12:30pm",
  "1pm",
  "1:30pm",
  "2pm",
  "2:30pm",
  "3pm",
  "3:30pm",
  "4pm",
  "4:30pm",
  "5pm",
  "5:30pm",
  "6pm",
]

export function ScheduleSection({ schedule }: ScheduleSectionProps) {
  const getSlotForDayAndTime = (day: string, time: string) => {
    return schedule.find((slot) => slot.day.toLowerCase() === day.toLowerCase() && slot.startTime === time)
  }

  const getSlotColor = (type: string) => {
    switch (type) {
      case "booked":
        return "bg-green-100 border-green-300 text-green-800"
      case "available":
        return "bg-blue-100 border-blue-300 text-blue-800"
      case "unavailable":
        return "bg-gray-100 border-gray-300 text-gray-600"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <CardTitle className="text-lg">Weekly Schedule</CardTitle>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">This Week</span>
            <Button size="sm" variant="ghost">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Button size="sm" variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Add Slot
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header */}
            <div className="grid grid-cols-8 gap-1 mb-2">
              <div className="p-2 text-sm font-medium text-gray-600">Time</div>
              {days.map((day) => (
                <div key={day} className="p-2 text-sm font-medium text-center text-gray-900">
                  {day}
                </div>
              ))}
            </div>

            {/* Schedule Grid */}
            <div className="space-y-1">
              {timeSlots.map((time) => (
                <div key={time} className="grid grid-cols-8 gap-1">
                  <div className="p-2 text-xs text-gray-600 border-r">{time}</div>
                  {days.map((day) => {
                    const slot = getSlotForDayAndTime(day, time)
                    return (
                      <div
                        key={`${day}-${time}`}
                        className={cn(
                          "p-2 min-h-[40px] border rounded text-xs transition-colors hover:opacity-80 cursor-pointer",
                          slot ? getSlotColor(slot.type) : "bg-gray-50 border-gray-200 hover:bg-gray-100",
                        )}
                      >
                        {slot && (
                          <div className="space-y-1">
                            <div className="font-medium">{slot.subject || "Available"}</div>
                            <Badge variant="secondary" className="text-xs">
                              {slot.type}
                            </Badge>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
            <span className="text-sm text-gray-600">Booked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-100 border border-blue-300 rounded"></div>
            <span className="text-sm text-gray-600">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-100 border border-gray-300 rounded"></div>
            <span className="text-sm text-gray-600">Unavailable</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
