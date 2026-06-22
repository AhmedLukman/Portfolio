"use client"

import { Toast } from "@heroui/react"
import { NavigationProvider } from "../lib/contexts/NavigationContext"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toast.Provider placement="bottom end" />
      <NavigationProvider>{children}</NavigationProvider>
    </>
  )
}
