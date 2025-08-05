"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Eye, Search, Filter } from "lucide-react"

// Mock data - replace with real data from your backend
const mockOrders = [
  {
    id: "#1234",
    customer: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    items: [
      { name: "Margherita Pizza", quantity: 1, price: 18.0 },
      { name: "Caesar Salad", quantity: 1, price: 12.0 },
      { name: "Tiramisu", quantity: 2, price: 12.0 },
    ],
    total: 54.0,
    status: "preparing",
    type: "delivery",
    orderTime: "2024-01-15 18:30",
    address: "123 Main St, City, State 12345",
  },
  {
    id: "#1235",
    customer: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 (555) 987-6543",
    items: [
      { name: "Spaghetti Carbonara", quantity: 1, price: 22.0 },
      { name: "Garlic Bread", quantity: 1, price: 8.0 },
    ],
    total: 30.0,
    status: "ready",
    type: "pickup",
    orderTime: "2024-01-15 18:15",
    address: null,
  },
  {
    id: "#1236",
    customer: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1 (555) 456-7890",
    items: [
      { name: "Osso Buco", quantity: 1, price: 32.0 },
      { name: "House Wine", quantity: 1, price: 25.0 },
      { name: "Panna Cotta", quantity: 1, price: 10.0 },
    ],
    total: 67.0,
    status: "delivered",
    type: "delivery",
    orderTime: "2024-01-15 17:45",
    address: "456 Oak Ave, City, State 12345",
  },
  {
    id: "#1237",
    customer: "Sarah Wilson",
    email: "sarah@example.com",
    phone: "+1 (555) 321-0987",
    items: [
      { name: "Bruschetta", quantity: 2, price: 12.0 },
      { name: "Margherita Pizza", quantity: 1, price: 18.0 },
    ],
    total: 42.0,
    status: "pending",
    type: "pickup",
    orderTime: "2024-01-15 19:00",
    address: null,
  },
]

export default function OrdersTable() {
  const [orders, setOrders] = useState(mockOrders)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState(null)

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)))
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "preparing":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "ready":
        return "bg-green-100 text-green-800 border-green-200"
      case "delivered":
        return "bg-gray-100 text-gray-800 border-gray-200"
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Orders Management</span>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search orders..."
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
                <SelectItem value="preparing">Preparing</SelectItem>
                <SelectItem value="ready">Ready</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{order.customer}</p>
                    <p className="text-sm text-muted-foreground">{order.phone}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm">
                    {order.items.slice(0, 2).map((item, index) => (
                      <div key={index}>
                        {item.quantity}x {item.name}
                      </div>
                    ))}
                    {order.items.length > 2 && (
                      <div className="text-muted-foreground">+{order.items.length - 2} more items</div>
                    )}
                  </div>
                </TableCell>
                <TableCell className="font-medium">${order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="capitalize">
                    {order.type}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Select value={order.status} onValueChange={(value) => updateOrderStatus(order.id, value)}>
                    <SelectTrigger className="w-32">
                      <Badge className={getStatusColor(order.status)} variant="outline">
                        {order.status}
                      </Badge>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="preparing">Preparing</SelectItem>
                      <SelectItem value="ready">Ready</SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {new Date(order.orderTime).toLocaleString()}
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" onClick={() => setSelectedOrder(order)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Order Details - {selectedOrder?.id}</DialogTitle>
                      </DialogHeader>
                      {selectedOrder && (
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h3 className="font-semibold mb-2">Customer Information</h3>
                              <p>
                                <strong>Name:</strong> {selectedOrder.customer}
                              </p>
                              <p>
                                <strong>Email:</strong> {selectedOrder.email}
                              </p>
                              <p>
                                <strong>Phone:</strong> {selectedOrder.phone}
                              </p>
                              {selectedOrder.address && (
                                <p>
                                  <strong>Address:</strong> {selectedOrder.address}
                                </p>
                              )}
                            </div>
                            <div>
                              <h3 className="font-semibold mb-2">Order Information</h3>
                              <p>
                                <strong>Order ID:</strong> {selectedOrder.id}
                              </p>
                              <p>
                                <strong>Type:</strong> {selectedOrder.type}
                              </p>
                              <p>
                                <strong>Status:</strong> {selectedOrder.status}
                              </p>
                              <p>
                                <strong>Time:</strong> {new Date(selectedOrder.orderTime).toLocaleString()}
                              </p>
                            </div>
                          </div>

                          <div>
                            <h3 className="font-semibold mb-2">Order Items</h3>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Item</TableHead>
                                  <TableHead>Quantity</TableHead>
                                  <TableHead>Price</TableHead>
                                  <TableHead>Total</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {selectedOrder.items.map((item, index) => (
                                  <TableRow key={index}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>${item.price.toFixed(2)}</TableCell>
                                    <TableCell>${(item.quantity * item.price).toFixed(2)}</TableCell>
                                  </TableRow>
                                ))}
                                <TableRow>
                                  <TableCell colSpan={3} className="font-semibold">
                                    Total
                                  </TableCell>
                                  <TableCell className="font-semibold">${selectedOrder.total.toFixed(2)}</TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
