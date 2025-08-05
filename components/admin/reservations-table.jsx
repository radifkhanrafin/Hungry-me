"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Eye, Search, Filter, Phone, Mail } from "lucide-react"

// Mock data - replace with real data from your backend
const mockReservations = [
  {
    id: "R001",
    customerName: "Sarah Wilson",
    email: "sarah@example.com",
    phone: "+1 (555) 321-0987",
    date: "2024-01-15",
    time: "19:00",
    guests: 4,
    status: "confirmed",
    specialRequests: "Birthday celebration, need high chair",
    createdAt: "2024-01-14 10:30",
  },
  {
    id: "R002",
    customerName: "David Brown",
    email: "david@example.com",
    phone: "+1 (555) 654-3210",
    date: "2024-01-15",
    time: "19:30",
    guests: 2,
    status: "confirmed",
    specialRequests: "Window table preferred",
    createdAt: "2024-01-14 14:15",
  },
  {
    id: "R003",
    customerName: "Lisa Garcia",
    email: "lisa@example.com",
    phone: "+1 (555) 789-0123",
    date: "2024-01-15",
    time: "20:00",
    guests: 6,
    status: "pending",
    specialRequests: "Vegetarian options needed",
    createdAt: "2024-01-15 09:45",
  },
  {
    id: "R004",
    customerName: "Robert Johnson",
    email: "robert@example.com",
    phone: "+1 (555) 456-7890",
    date: "2024-01-16",
    time: "18:30",
    guests: 3,
    status: "confirmed",
    specialRequests: "Anniversary dinner",
    createdAt: "2024-01-13 16:20",
  },
  {
    id: "R005",
    customerName: "Emily Davis",
    email: "emily@example.com",
    phone: "+1 (555) 234-5678",
    date: "2024-01-16",
    time: "20:30",
    guests: 8,
    status: "cancelled",
    specialRequests: "Large group, separate checks",
    createdAt: "2024-01-12 11:10",
  },
]

export default function ReservationsTable() {
  const [reservations, setReservations] = useState(mockReservations)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedReservation, setSelectedReservation] = useState(null)

  const updateReservationStatus = (reservationId, newStatus) => {
    setReservations(
      reservations.map((reservation) =>
        reservation.id === reservationId ? { ...reservation, status: newStatus } : reservation,
      ),
    )
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "confirmed":
        return "bg-green-100 text-green-800 border-green-200"
      case "seated":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "completed":
        return "bg-gray-100 text-gray-800 border-gray-200"
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200"
      case "no-show":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const filteredReservations = reservations.filter((reservation) => {
    const matchesSearch =
      reservation.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.phone.includes(searchTerm)
    const matchesStatus = statusFilter === "all" || reservation.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Reservations Management</span>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search reservations..."
                className="pl-10 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="seated">Seated</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
                <SelectItem value="no-show">No Show</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Reservation ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Guests</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredReservations.map((reservation) => (
              <TableRow key={reservation.id}>
                <TableCell className="font-medium">{reservation.id}</TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{reservation.customerName}</p>
                    <p className="text-sm text-muted-foreground">{reservation.phone}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{new Date(reservation.date).toLocaleDateString()}</p>
                    <p className="text-sm text-muted-foreground">{reservation.time}</p>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{reservation.guests}</TableCell>
                <TableCell>
                  <Select
                    value={reservation.status}
                    onValueChange={(value) => updateReservationStatus(reservation.id, value)}
                  >
                    <SelectTrigger className="w-32">
                      <Badge className={getStatusColor(reservation.status)} variant="outline">
                        {reservation.status}
                      </Badge>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="confirmed">Confirmed</SelectItem>
                      <SelectItem value="seated">Seated</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                      <SelectItem value="no-show">No Show</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {new Date(reservation.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={`tel:${reservation.phone}`}>
                        <Phone className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={`mailto:${reservation.email}`}>
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" onClick={() => setSelectedReservation(reservation)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Reservation Details - {selectedReservation?.id}</DialogTitle>
                        </DialogHeader>
                        {selectedReservation && (
                          <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h3 className="font-semibold mb-2">Customer Information</h3>
                                <p>
                                  <strong>Name:</strong> {selectedReservation.customerName}
                                </p>
                                <p>
                                  <strong>Email:</strong> {selectedReservation.email}
                                </p>
                                <p>
                                  <strong>Phone:</strong> {selectedReservation.phone}
                                </p>
                              </div>
                              <div>
                                <h3 className="font-semibold mb-2">Reservation Details</h3>
                                <p>
                                  <strong>Reservation ID:</strong> {selectedReservation.id}
                                </p>
                                <p>
                                  <strong>Date:</strong> {new Date(selectedReservation.date).toLocaleDateString()}
                                </p>
                                <p>
                                  <strong>Time:</strong> {selectedReservation.time}
                                </p>
                                <p>
                                  <strong>Guests:</strong> {selectedReservation.guests}
                                </p>
                                <p>
                                  <strong>Status:</strong> {selectedReservation.status}
                                </p>
                              </div>
                            </div>

                            <div>
                              <h3 className="font-semibold mb-2">Special Requests</h3>
                              <p className="text-muted-foreground bg-muted p-3 rounded-lg">
                                {selectedReservation.specialRequests || "No special requests"}
                              </p>
                            </div>

                            <div>
                              <h3 className="font-semibold mb-2">Booking Information</h3>
                              <p>
                                <strong>Created:</strong> {new Date(selectedReservation.createdAt).toLocaleString()}
                              </p>
                            </div>

                            <div className="flex gap-2 pt-4">
                              <Button
                                onClick={() => updateReservationStatus(selectedReservation.id, "confirmed")}
                                disabled={selectedReservation.status === "confirmed"}
                              >
                                Confirm
                              </Button>
                              <Button
                                variant="outline"
                                onClick={() => updateReservationStatus(selectedReservation.id, "seated")}
                                disabled={selectedReservation.status === "seated"}
                              >
                                Mark as Seated
                              </Button>
                              <Button
                                variant="destructive"
                                onClick={() => updateReservationStatus(selectedReservation.id, "cancelled")}
                                disabled={selectedReservation.status === "cancelled"}
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
