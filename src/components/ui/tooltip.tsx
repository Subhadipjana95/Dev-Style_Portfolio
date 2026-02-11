"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 4,
  showArrow = true,
  children,
  arrowClassName,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> & { showArrow?: boolean; arrowClassName?: string }) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className="group z-50 overflow-visible animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        {...props}
      >
        {showArrow && (
          <>
            {/* Top arrow (appears at bottom of tooltip when side=top) */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-[7px] w-4 h-[7px] overflow-hidden hidden group-data-[side=top]:block z-0">
              <div className={cn("absolute left-1/2 -translate-x-1/2 -top-[6px] w-3 h-3 rotate-45 bg-foreground", arrowClassName)} />
            </div>
            {/* Bottom arrow (appears at top of tooltip when side=bottom) */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-[7px] w-4 h-[7px] overflow-hidden hidden group-data-[side=bottom]:block z-0">
              <div className={cn("absolute left-1/2 -translate-x-1/2 top-[2px] w-3 h-3 rotate-45 bg-foreground", arrowClassName)} />
            </div>
            {/* Left arrow (appears at right of tooltip when side=left) */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-[7px] w-[7px] h-4 overflow-hidden hidden group-data-[side=left]:block z-0">
              <div className={cn("absolute top-1/2 -translate-y-1/2 -left-[6px] w-3 h-3 rotate-45 bg-foreground", arrowClassName)} />
            </div>
            {/* Right arrow (appears at left of tooltip when side=right) */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-[7px] w-[7px] h-4 overflow-hidden hidden group-data-[side=right]:block z-0">
              <div className={cn("absolute top-1/2 -translate-y-1/2 left-[2px] w-3 h-3 rotate-45 bg-foreground", arrowClassName)} />
            </div>
          </>
        )}
        <div className={cn(
          "relative z-10 w-fit rounded-md px-3 py-1.5 text-xs text-balance bg-foreground text-background",
          className
        )}>
          {children}
        </div>
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
