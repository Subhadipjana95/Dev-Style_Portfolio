"use client";

import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/devibeans.css"; // or any other style

export function BlogSyntaxHighlighter() {
    useEffect(() => {
        hljs.highlightAll();
    }, []);

    return null;
}
