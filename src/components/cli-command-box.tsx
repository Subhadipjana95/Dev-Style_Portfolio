"use client";

import { Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface CliCommandBoxProps {
    command: string;
}

export function CliCommandBox({ command }: CliCommandBoxProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <div className="w-full max-w-xs">
                    <div className="relative group rounded-md border border-dashed border-[#88410d]/30 dark:border-[#8FC47B]/30 bg-gray-400/5 dark:bg-white/5">
                        <div className="relative flex items-center justify-between gap-3 p-1">
                            <div className="min-w-0">
                                <code className="font-mono text-sm font-medium text-foreground truncate px-1 py-0.5 rounded-sm selection:bg-primary/20 flex items-center gap-2">
                                    <span className="text-muted-foreground/60 select-none user-select-none shrink-0">$</span>
                                    <span className="truncate text-[#8f410a] dark:text-[#87d56a]">{command}</span>
                                </code>
                            </div>

                            <Button
                                size="icon"
                                variant="ghost"
                                className={cn(
                                    "shrink-0 size-8 rounded-sm transition-all duration-200",
                                    copied
                                        ? "dark:bg-[#8FC47B]/10 dark:text-[#8FC47B] dark:hover:bg-[#8FC47B]/20 bg-[#88410d]/10 text-[#88410d] hover:bg-[#88410d]/20"
                                        : "relative bg-transparent text-background transition-colors hover:text-[#8FC47B] dark:hover:text-[#8FC47B] hover:bg-transparent before:absolute before:inset-0 before:-z-20 before:rounded-sm before:bg-gradient-to-r before:from-[#8FC47B] before:to-[#b56b36] after:absolute after:inset-[1px] after:-z-10 after:rounded-[3px] after:bg-background after:opacity-0 hover:after:opacity-90 after:transition-opacity content-center"
                                )
                                }
                                onClick={handleCopy}
                            >
                                {copied ? (
                                    <Check className="size-3.5" />
                                ) : (
                                    <Copy className="size-3.5" />
                                )}
                                <span className="sr-only">Copy command</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </TooltipTrigger>
            <TooltipContent
                side="right"
                sideOffset={6}
                showArrow={true}
                className="flex gap-1 items-center bg-black/5 dark:bg-white/5 backdrop-blur-md border border-muted-foreground2 text-muted-foreground px-3 py-1.5 rounded-md text-xs relative z-50 overflow-hidden"
                arrowClassName="border border-muted-foreground2 bg-black/5 dark:bg-white/5 backdrop-blur-md"
            >
                <Terminal className="size-3.5" />
                <p>Copy & run to view &apos;Me&apos; in your CLI</p>
            </TooltipContent>
        </Tooltip>
    );
}
