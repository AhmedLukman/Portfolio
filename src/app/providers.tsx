"use client"

import { HeroUIProvider } from "@heroui/react"
import { useRouter } from "next/navigation"
import { NavigationProvider } from "../lib/contexts/NavigationContext"
import { ToastProvider } from "@heroui/toast"

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <HeroUIProvider navigate={router.push}>
      <ToastProvider />
      <NavigationProvider>{children}</NavigationProvider>
    </HeroUIProvider>
  )
}
