"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth"
import Link from "next/link"

export default function CustomerReservations() {
  const { user, isCustomer, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login")
    } else if (!isCustomer) {
      router.push("/admin")
    }
  }, [isAuthenticated, isCustomer, router])

  if (!isAuthenticated || !isCustomer) {
    return <div>Loading...</div>
  }

  // Mock reservation data
  const reservations = [
    {
      id: "R001",
      date: "2024-01-20",
      time: "19:00",
      guests: 4,
      status: "confirmed",
      specialRequests: "Birthday celebration",
    },
    {
      id: "R002",
      date: "2024-01-25",
      time: "20:30",
      guests: 2,
      status: "pending",
      specialRequests: "Window table preferred",
    },
    {
      id: "R003",
      date: "2024-01-05",
      time: "18:30",
      guests: 6,
      status: "completed",
      specialRequests: "Anniversary dinner",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800 border-green-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "completed":
        return "bg-gray-100 text-gray-800 border-gray-200"
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Reservations</h1>
        <p className="text-muted-foreground">View and manage your table reservations</p>
      </div>

      <div className="space-y-6">
        {reservations.map((reservation) => (
          <Card key={reservation.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Reservation {reservation.id}</CardTitle>
                <Badge className={getStatusColor(reservation.status)} variant="outline">
                  {reservation.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Date & Time</p>
                  <p className="font-medium">
                    {reservation.date} at {reservation.time}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Number of Guests</p>
                  <p className="font-medium">{reservation.guests} guests</p>
                </div>
                {reservation.specialRequests && (
                  <div className="md:col-span-2">
                    <p className="text-sm text-muted-foreground">Special Requests</p>
                    <p className="font-medium">{reservation.specialRequests}</p>
                  </div>
                )}
              </div>
              {reservation.status === "confirmed" && (
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm">
                    Modify
                  </Button>
                  <Button variant="destructive" size="sm">
                    Cancel
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button asChild>
          <Link href="/reservations">Make New Reservation</Link>
        </Button>
      </div>
    </div>
  )
}
