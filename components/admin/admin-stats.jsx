import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, ShoppingCart, Users, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "Today's Revenue",
    value: "$2,847.50",
    change: "+12.5%",
    changeType: "positive",
    icon: DollarSign,
  },
  {
    title: "Orders Today",
    value: "47",
    change: "+8.2%",
    changeType: "positive",
    icon: ShoppingCart,
  },
  {
    title: "Reservations",
    value: "23",
    change: "-2.1%",
    changeType: "negative",
    icon: Users,
  },
  {
    title: "Average Order",
    value: "$60.50",
    change: "+5.4%",
    changeType: "positive",
    icon: TrendingUp,
  },
]

export default function AdminStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className={`text-xs ${stat.changeType === "positive" ? "text-green-600" : "text-red-600"}`}>
              {stat.change} from yesterday
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
