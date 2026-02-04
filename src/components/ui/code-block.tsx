"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import hljs from "highlight.js";
import { useTheme } from "next-themes";
import "highlight.js/styles/atom-one-light.css";
import "highlight.js/styles/atom-one-dark.css";

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    code: string;
    language?: string;
}

export function CodeBlock({
    code,
    language = "text",
    className,
    ...props
}: CodeBlockProps) {
    const [hasCopied, setHasCopied] = React.useState(false);
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    const copyToClipboard = React.useCallback(() => {
        navigator.clipboard.writeText(code);
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
    }, [code]);

    const highlightedCode = React.useMemo(() => {
        try {
            if (language && hljs.getLanguage(language)) {
                return hljs.highlight(code, { language }).value;
            }
            return hljs.highlightAuto(code).value;
        } catch (error) {
            console.error("Highlighting error:", error);
            return code;
        }
    }, [code, language]);

    return (
        <div
            className={cn(
                "relative overflow-hidden border shadow-sm",
                "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950",
                className
            )}
            {...props}
        >
            <div className="flex items-center justify-between border-b px-4 py-2.5 backdrop-blur-sm border-zinc-200 bg-zinc-100/80 dark:border-zinc-800 dark:bg-zinc-900/50">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                    <span className="ml-2 text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                        {language}
                    </span>
                </div>
                <button
                    onClick={copyToClipboard}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-md transition-all focus:outline-none focus:ring-1 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 focus:ring-zinc-300 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 dark:focus:ring-zinc-700"
                    aria-label="Copy code"
                >
                    {hasCopied ? (
                        <Check className="h-3.5 w-3.5 text-green-500" />
                    ) : (
                        <Copy className="h-3.5 w-3.5 scale-100 transition-all" />
                    )}
                </button>
            </div>
            <div className="p-0">
                <pre className="overflow-x-auto pl-6 pr-4 text-sm font-mono leading-relaxed bg-white dark:bg-transparent rounded-none">
                    <code
                        dangerouslySetInnerHTML={{ __html: highlightedCode }}
                        className={cn(
                            "hljs bg-transparent block",
                            currentTheme === "dark" ? "dark" : "light"
                        )}
                    />
                </pre>
            </div>
        </div>
    );
}
