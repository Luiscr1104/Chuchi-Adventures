import * as React from "react"
import { cn } from "../../lib/utils"

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex transition-transform duration-500 ease-in-out",
      className
    )}
    {...props}
  >
    {children}
  </div>
))
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex-shrink-0 w-full",
      className
    )}
    {...props}
  >
    {children}
  </div>
))
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 shadow-lg transition-all hover:bg-white hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed",
      className
    )}
    {...props}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-stone-700"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
    <span className="sr-only">Previous</span>
  </button>
))
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-stone-200 shadow-lg transition-all hover:bg-white hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed",
      className
    )}
    {...props}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-stone-700"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
    <span className="sr-only">Next</span>
  </button>
))
CarouselNext.displayName = "CarouselNext"

const CarouselDots = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { count: number; active: number }
>(({ className, count, active, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2",
      className
    )}
    {...props}
  >
    {Array.from({ length: count }).map((_, index) => (
      <button
        key={index}
        className={cn(
          "h-2 w-2 rounded-full transition-all duration-300",
          index === active
            ? "bg-white w-6"
            : "bg-white/50 hover:bg-white/70"
        )}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
))
CarouselDots.displayName = "CarouselDots"

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
}