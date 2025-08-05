"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session on mount
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (credentials) => {
    // Mock authentication - replace with real API call
    const { email, password } = credentials

    // Mock users database
    const mockUsers = [
      {
        id: 1,
        email: "admin@bellavista.com",
        password: "admin123",
        role: "admin",
        name: "Restaurant Admin",
        phone: "+1 (555) 123-4567",
      },
      {
        id: 2,
        email: "customer@example.com",
        password: "customer123",
        role: "customer",
        name: "John Doe",
        phone: "+1 (555) 987-6543",
      },
    ]

    const foundUser = mockUsers.find((u) => u.email === email && u.password === password)

    if (foundUser) {
      const userData = { ...foundUser }
      delete userData.password // Don't store password
      setUser(userData)
      localStorage.setItem("user", JSON.stringify(userData))
      return { success: true, user: userData }
    } else {
      return { success: false, error: "Invalid credentials" }
    }
  }

  const register = async (userData) => {
    // Mock registration - replace with real API call
    const newUser = {
      id: Date.now(),
      ...userData,
      role: "customer", // Default role for new registrations
    }
    delete newUser.password // Don't store password
    delete newUser.confirmPassword // Remove confirm password field

    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
    return { success: true, user: newUser }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const value = {
    user,
    login,
    register,
    logout,
    loading,
    isAdmin: user?.role === "admin",
    isCustomer: user?.role === "customer",
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
