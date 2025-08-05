"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth"
import Link from "next/link"

export default function CustomerOrders() {
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

  // Mock order data
  const orders = [
    {
      id: "#1234",
      date: "2024-01-15",
      items: [
        { name: "Margherita Pizza", quantity: 1, price: 18.0 },
        { name: "Caesar Salad", quantity: 1, price: 12.0 },
      ],
      total: 30.0,
      status: "delivered",
      type: "delivery",
    },
    {
      id: "#1235",
      date: "2024-01-10",
      items: [
        { name: "Spaghetti Carbonara", quantity: 1, price: 22.0 },
        { name: "Tiramisu", quantity: 1, price: 12.0 },
      ],
      total: 34.0,
      status: "delivered",
      type: "pickup",
    },
    {
      id: "#1236",
      date: "2024-01-08",
      items: [
        { name: "Osso Buco", quantity: 1, price: 32.0 },
        { name: "House Wine", quantity: 1, price: 25.0 },
      ],
      total: 57.0,
      status: "delivered",
      type: "delivery",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800 border-green-200"
      case "preparing":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "ready":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Orders</h1>
        <p className="text-muted-foreground">View your order history and track current orders</p>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Order {order.id}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="capitalize">
                    {order.type}
                  </Badge>
                  <Badge className={getStatusColor(order.status)} variant="outline">
                    {order.status}
                  </Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Ordered on {order.date}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">
                      {item.quantity}x {item.name}
                    </span>
                    <span className="text-sm font-medium">${(item.quantity * item.price).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-2 flex justify-between items-center">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${order.total.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button asChild>
          <Link href="/menu">Order Again</Link>
        </Button>
      </div>
    </div>
  )
}
