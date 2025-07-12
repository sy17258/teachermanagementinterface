import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2 } from "lucide-react"
import type { Qualification } from "@/types/teacher"

interface QualificationsSectionProps {
  qualifications: Qualification[]
}

export function QualificationsSection({ qualifications }: QualificationsSectionProps) {
  const privateQualifications = qualifications.filter((q) => q.type === "private")
  const groupQualifications = qualifications.filter((q) => q.type === "group")

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Private Qualifications */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Private Qualifications</CardTitle>
          <Button size="sm" variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {privateQualifications.map((qualification) => (
              <div
                key={qualification.id}
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{qualification.name}</h4>
                  <p className="text-sm text-gray-600">${qualification.rate}/hr</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Private</Badge>
                  <Button size="sm" variant="ghost">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            {privateQualifications.length === 0 && (
              <p className="text-center text-gray-500 py-8">No private qualifications added</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Group Qualifications */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Group Qualifications</CardTitle>
          <Button size="sm" variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {groupQualifications.map((qualification) => (
              <div
                key={qualification.id}
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{qualification.name}</h4>
                  <p className="text-sm text-gray-600">${qualification.rate}/hr</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Group</Badge>
                  <Button size="sm" variant="ghost">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            {groupQualifications.length === 0 && (
              <p className="text-center text-gray-500 py-8">No group qualifications added</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
