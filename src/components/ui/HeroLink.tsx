"use client"

import { Link, LinkProps } from "@heroui/link"
import NextLink from "next/link"

type HeroLinkProps = Omit<LinkProps, "as">

export default function HeroLink({ children, ...props }: HeroLinkProps) {
  return (
    <Link as={NextLink} {...props}>
      {children}
    </Link>
  )
}
