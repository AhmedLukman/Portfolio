"use client"

import { Button, ButtonProps } from "@heroui/button"
import Link from "next/link"

type HeroButtonProps = Omit<ButtonProps, "as"> & {
  href: string
}

export default function HeroButton({ children, ...props }: HeroButtonProps) {
  return (
    <Button as={Link} {...props}>
      {children}
    </Button>
  )
}
