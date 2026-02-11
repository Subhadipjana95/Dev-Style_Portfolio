import React from 'react'
import { ThemedFlickeringGrid } from '../themed-flickering-grid'
import { CollaborationForm } from './collaboration-form'
import { SparklesText } from '../magicui/sparkles-text'
import Link from 'next/link'

const ContactCard = () => {
    return (
        <div className="space-y-3 border border-muted-foreground/25 py-8 md:py-12 px-6 md:px-8 rounded-xl relative w-full">
            <div
                className="absolute inset-0 w-full h-28 z-0 overflow-hidden rounded-xl"
                style={{
                    maskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.4) 40%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.4) 40%, transparent 100%)',
                }}
            >
                <ThemedFlickeringGrid />
            </div>
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
            </div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
            </h2>
            <div className="mx-auto max-w-[600px] text-muted-foreground leading-tight md:text-xl/tight lg:text-base/tight xl:text-xl/tight" suppressHydrationWarning>
                Want to collaborate? Tell me your Requirments on{" "}
                <CollaborationForm>
                    <span className="cursor-pointer hover:opacity-80 transition-opacity">
                        <SparklesText className="!text-background text-shadow-sm relative inline-block rounded-sm bg-gradient-to-r from-[#8FC47B] to-[#b56b36] px-1 dark:from-[#8FC47B] dark:to-[#b56b36] border border-dashed border-[#b56b36] dark:border-[#8FC47B]" sparklesCount={3}>this form</SparklesText>
                    </span>
                </CollaborationForm>
                {" "}
                || Want to chat? Just shoot me a dm{" "}
                <Link
                    href="https://wa.me/919832668044"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b56b36] dark:text-[#8FC47B] hover:underline"
                >
                    with your queries on WhatsApp
                </Link>
                . I&apos;ll get back to you ASAP.
            </div>
        </div>
    )
}

export default ContactCard