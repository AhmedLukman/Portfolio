"use client"

import { Button, cn, type ButtonProps } from "@heroui/react"
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion"
import Link, { type LinkProps } from "next/link"
import {
  memo,
  type AnchorHTMLAttributes,
  type CSSProperties,
  type HTMLAttributes,
  type Key,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react"

type RippleType = {
  key: Key
  x: number
  y: number
  size: number
}

type RipplePressEvent = {
  target: Element
  x: number
  y: number
}

type RippleProps = {
  ripples: RippleType[]
  color?: string
  style?: CSSProperties
  onClear: (key: Key) => void
}

const getUniqueID = () => {
  const values = new Uint32Array(1)

  crypto.getRandomValues(values)

  return values[0]?.toString(36) ?? Math.random().toString(36).slice(2)
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

const useRipple = () => {
  const [ripples, setRipples] = useState<RippleType[]>([])
  const ripplesRef = useRef(new Map<Key, RippleType>())

  const onPress = useCallback((event: RipplePressEvent) => {
    const trigger =
      event.target instanceof HTMLElement
        ? event.target
        : event.target.closest("button, a, [role='button']")

    if (!(trigger instanceof HTMLElement)) return

    const size = Math.max(trigger.clientWidth, trigger.clientHeight)
    const key = getUniqueID()
    const ripple = {
      key,
      size,
      x: event.x - size / 2,
      y: event.y - size / 2,
    }

    ripplesRef.current.set(key, ripple)
    setRipples(Array.from(ripplesRef.current.values()))
  }, [])

  const onClear = useCallback((key: Key) => {
    ripplesRef.current.delete(key)
    setRipples(Array.from(ripplesRef.current.values()))
  }, [])

  return { ripples, onClear, onPress }
}

const Ripple = memo(function Ripple({
  color = "currentColor",
  onClear,
  ripples,
  style,
}: RippleProps) {
  const baseStyles = useMemo(
    () => ({
      backgroundColor: color,
      ...style,
    }),
    [color, style],
  )

  return (
    <AnimatePresence mode="popLayout">
      {ripples.map((ripple) => {
        const duration = clamp(
          0.01 * ripple.size,
          0.2,
          ripple.size > 100 ? 0.75 : 0.5,
        )

        return (
          <m.span
            key={ripple.key}
            animate={{ transform: "scale(2)", opacity: 0 }}
            aria-hidden="true"
            className="heroui-ripple pointer-events-none absolute z-0 origin-center touch-none select-none overflow-hidden rounded-full"
            exit={{ opacity: 0 }}
            initial={{ transform: "scale(0)", opacity: 0.35 }}
            transition={{ duration }}
            style={{
              ...baseStyles,
              top: ripple.y,
              left: ripple.x,
              width: ripple.size,
              height: ripple.size,
            }}
            onAnimationComplete={() => onClear(ripple.key)}
          />
        )
      })}
    </AnimatePresence>
  )
})

type RippleButtonProps = ButtonProps & {
  disableRipple?: boolean
  rippleColor?: string
}

export const RippleButton = ({
  children,
  className,
  disableRipple = false,
  isDisabled,
  isPending,
  onPress,
  rippleColor,
  ...props
}: RippleButtonProps) => {
  const { onClear, onPress: onRipplePress, ripples } = useRipple()
  const ripple = (
    <Ripple color={rippleColor} ripples={ripples} onClear={onClear} />
  )
  const content =
    typeof children === "function"
      ? (values: unknown) => (
          <>
            {(children as (values: unknown) => ReactNode)(values)}
            {ripple}
          </>
        )
      : (
          <>
            {children as ReactNode}
            {ripple}
          </>
        )

  const handlePress = useCallback(
    (event: Parameters<NonNullable<ButtonProps["onPress"]>>[0]) => {
      onPress?.(event)

      if (!disableRipple && !isDisabled && !isPending) {
        onRipplePress(event as RipplePressEvent)
      }
    },
    [disableRipple, isDisabled, isPending, onPress, onRipplePress],
  )

  return (
    <LazyMotion features={domAnimation}>
      <Button
        className={cn("relative overflow-hidden", className)}
        isDisabled={isDisabled}
        isPending={isPending}
        onPress={handlePress}
        {...props}
      >
        {content}
      </Button>
    </LazyMotion>
  )
}

type RippleLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    disabled?: boolean
    disableRipple?: boolean
    rippleColor?: string
  }

export const RippleLink = ({
  children,
  className,
  disabled = false,
  disableRipple = false,
  onClick,
  onKeyDown,
  onPointerDown,
  rippleColor,
  tabIndex,
  ...props
}: RippleLinkProps) => {
  const { onClear, onPress: onRipplePress, ripples } = useRipple()

  const addRipple = useCallback(
    (target: HTMLElement, x: number, y: number) => {
      if (disabled || disableRipple) return

      onRipplePress({ target, x, y })
    },
    [disabled, disableRipple, onRipplePress],
  )

  const handlePointerDown = (event: PointerEvent<HTMLAnchorElement>) => {
    onPointerDown?.(event)

    if (
      event.defaultPrevented ||
      (event.pointerType === "mouse" && event.button !== 0)
    ) {
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()

    addRipple(
      event.currentTarget,
      event.clientX - rect.left,
      event.clientY - rect.top,
    )
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
    onKeyDown?.(event)

    if (event.defaultPrevented || event.repeat || !["Enter", " "].includes(event.key)) {
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()

    addRipple(event.currentTarget, rect.width / 2, rect.height / 2)
  }

  return (
    <LazyMotion features={domAnimation}>
      <Link
        aria-disabled={disabled || undefined}
        className={cn("relative overflow-hidden", className)}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault()
            return
          }

          onClick?.(event)
        }}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        tabIndex={disabled ? -1 : tabIndex}
        {...props}
      >
        {children}
        <Ripple color={rippleColor} ripples={ripples} onClear={onClear} />
      </Link>
    </LazyMotion>
  )
}

type RippleSurfaceProps = HTMLAttributes<HTMLDivElement> & {
  disabled?: boolean
  disableRipple?: boolean
  rippleColor?: string
}

export const RippleSurface = ({
  children,
  className,
  disabled = false,
  disableRipple = false,
  onKeyDown,
  onPointerDown,
  rippleColor,
  ...props
}: RippleSurfaceProps) => {
  const { onClear, onPress: onRipplePress, ripples } = useRipple()

  const addRipple = useCallback(
    (target: HTMLElement, x: number, y: number) => {
      if (disabled || disableRipple) return

      onRipplePress({ target, x, y })
    },
    [disabled, disableRipple, onRipplePress],
  )

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    onPointerDown?.(event)

    if (
      event.defaultPrevented ||
      (event.pointerType === "mouse" && event.button !== 0)
    ) {
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()

    addRipple(
      event.currentTarget,
      event.clientX - rect.left,
      event.clientY - rect.top,
    )
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event)

    if (event.defaultPrevented || event.repeat || !["Enter", " "].includes(event.key)) {
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()

    addRipple(event.currentTarget, rect.width / 2, rect.height / 2)
  }

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={cn("relative overflow-hidden", className)}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        {...props}
      >
        {children}
        <Ripple color={rippleColor} ripples={ripples} onClear={onClear} />
      </div>
    </LazyMotion>
  )
}
