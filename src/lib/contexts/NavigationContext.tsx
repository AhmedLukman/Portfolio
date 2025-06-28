"use client"

import { createContext, PropsWithChildren, use, useState } from "react"

type NavigationContextType = {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (isOpen: boolean) => void
  closeMobileMenu: () => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined,
)

export const NavigationProvider = ({ children }: PropsWithChildren) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <NavigationContext.Provider
      value={{ isMobileMenuOpen, setIsMobileMenuOpen, closeMobileMenu }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigation = () => {
  const context = use(NavigationContext)
  if (context === undefined)
    throw new Error("useNavigation must be used within a NavigationProvider")
  return context
}
