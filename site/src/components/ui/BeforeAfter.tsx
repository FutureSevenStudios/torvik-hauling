"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"

type BeforeAfterProps = {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  initial?: number
  caption?: string
  aspect?: string
  priority?: boolean
}

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  initial = 50,
  caption,
  aspect = "aspect-[4/3]",
  priority = false,
}: BeforeAfterProps) {
  const [position, setPosition] = useState(initial)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updateFromClientX = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, next)))
  }, [])

  const startDrag = (clientX: number) => {
    setDragging(true)
    updateFromClientX(clientX)
  }

  useEffect(() => {
    if (!dragging) return
    const onMove = (e: MouseEvent) => updateFromClientX(e.clientX)
    const onUp = () => setDragging(false)
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) updateFromClientX(e.touches[0].clientX)
    }
    const onTouchEnd = () => setDragging(false)

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)
    window.addEventListener("touchmove", onTouchMove, { passive: true })
    window.addEventListener("touchend", onTouchEnd)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("touchend", onTouchEnd)
    }
  }, [dragging, updateFromClientX])

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4))
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4))
    if (e.key === "Home") setPosition(0)
    if (e.key === "End") setPosition(100)
  }

  return (
    <figure className="w-full">
      <div
        ref={containerRef}
        className={`relative w-full ${aspect} select-none rounded-2xl overflow-hidden border border-[color:var(--color-brand-border)] shadow-[var(--shadow-soft)] bg-[color:var(--color-brand-surface)] touch-none`}
      >
        {/* Before image (full width, bottom layer) */}
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          priority={priority}
          draggable={false}
          className="object-cover pointer-events-none"
        />

        {/* After image (top layer, clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            priority={priority}
            draggable={false}
            className="object-cover pointer-events-none"
          />
        </div>

        {/* Pill labels */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[color:var(--color-brand-primary)] text-white text-[11px] font-bold uppercase tracking-wider">
          Before
        </span>
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[color:var(--color-brand-secondary)] text-white text-[11px] font-bold uppercase tracking-wider">
          After
        </span>

        {/* Slider line + handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/90 pointer-events-none"
          style={{ left: `${position}%` }}
        />
        <button
          type="button"
          aria-label={`Comparison slider: showing ${Math.round(position)}% before, ${Math.round(100 - position)}% after`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          role="slider"
          tabIndex={0}
          onMouseDown={(e) => {
            e.preventDefault()
            startDrag(e.clientX)
          }}
          onTouchStart={(e) => {
            if (e.touches[0]) startDrag(e.touches[0].clientX)
          }}
          onKeyDown={handleKey}
          className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-11 w-11 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ew-resize ring-2 ring-[color:var(--color-brand-primary)]/15 hover:ring-[color:var(--color-brand-primary)]/30 transition-[transform,box-shadow] ${
            dragging ? "scale-110 shadow-xl" : ""
          }`}
          style={{ left: `${position}%` }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[color:var(--color-brand-primary)]"
          >
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 6 15 12 9 18" transform="translate(0 0)" />
          </svg>
        </button>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-[color:var(--color-brand-muted)]">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
