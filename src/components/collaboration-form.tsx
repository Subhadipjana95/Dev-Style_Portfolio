"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CollaborationForm({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = React.useState(false)
    const [mounted, setMounted] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    // Form state
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        service: "",
        budget: "",
        description: "",
    })

    // Honeypot field for spam protection (hidden from users)
    const [honeypot, setHoneypot] = React.useState("")

    React.useEffect(() => {
        setMounted(true)
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Spam protection: if honeypot is filled, reject silently
        if (honeypot) {
            setOpen(false)
            return
        }

        setLoading(true)

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || "Failed to send")
            }

            // Success
            setOpen(false)
            setFormData({
                name: "",
                email: "",
                service: "",
                budget: "",
                description: "",
            })

            // Show success message
            alert("🚀 Request sent successfully! I'll get back to you soon.")
        } catch (error) {
            console.error("Form submission error:", error)
            alert("❌ Something went wrong. Please try again or contact me directly on LinkedIn.")
        } finally {
            setLoading(false)
        }
    }

    const handleClose = () => {
        setOpen(false)
    }

    const modalContent = (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop with blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-background/60 backdrop-blur-md"
                        onClick={handleClose}
                    />

                    {/* Form Card Container */}
                    <div
                        className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none p-4 overflow-y-auto modal-scroll"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch',
                        } as React.CSSProperties & { WebkitOverflowScrolling?: string }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                                duration: 0.4
                            }}
                            className="w-full max-w-md pointer-events-auto my-auto"
                        >
                            <Card className="relative border-border bg-card p-4 sm:p-5 shadow-2xl rounded-lg">
                                {/* Close Button */}
                                <button
                                    onClick={handleClose}
                                    className="absolute right-3 top-3 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                    aria-label="Close"
                                    type="button"
                                >
                                    <X className="h-4 w-4" />
                                </button>

                                {/* Header */}
                                <div className="mb-3">
                                    <h2 className="text-lg font-semibold text-foreground">Start a Project</h2>
                                    <p className="text-sm text-muted-foreground mt-0.5">
                                        Tell me about your project and I&apos;ll get back to you shortly.
                                    </p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit}>
                                    {/* Honeypot field - hidden from users */}
                                    <input
                                        type="text"
                                        name="website"
                                        value={honeypot}
                                        onChange={(e) => setHoneypot(e.target.value)}
                                        style={{ display: "none" }}
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />

                                    <FieldSet className="gap-3">
                                        <FieldGroup className="gap-3">
                                            <Field>
                                                <FieldLabel htmlFor="name" className="text-sm">Name</FieldLabel>
                                                <Input
                                                    id="name"
                                                    placeholder="John Doe"
                                                    className="h-9"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, name: e.target.value })
                                                    }
                                                    disabled={loading}
                                                />
                                            </Field>
                                            <Field>
                                                <FieldLabel htmlFor="email" className="text-sm">Email</FieldLabel>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    className="h-9"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, email: e.target.value })
                                                    }
                                                    disabled={loading}
                                                />
                                            </Field>
                                            <Field>
                                                <FieldLabel htmlFor="service" className="text-sm">Service</FieldLabel>
                                                <Select
                                                    required
                                                    value={formData.service}
                                                    onValueChange={(value) =>
                                                        setFormData({ ...formData, service: value })
                                                    }
                                                >
                                                    <SelectTrigger id="service" className="h-9">
                                                        <SelectValue placeholder="Select a service" />
                                                    </SelectTrigger>
                                                    <SelectContent className="z-[102]">
                                                        <SelectItem value="web-design">Web Design</SelectItem>
                                                        <SelectItem value="web-dev">Web Development</SelectItem>
                                                        <SelectItem value="mobile-app">Mobile App</SelectItem>
                                                        <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                                                        <SelectItem value="other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </Field>
                                            <Field>
                                                <FieldLabel htmlFor="budget" className="text-sm">Budget (Optional)</FieldLabel>
                                                <Input
                                                    id="budget"
                                                    placeholder="e.g. $500 - $1000"
                                                    className="h-9"
                                                    value={formData.budget}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, budget: e.target.value })
                                                    }
                                                    disabled={loading}
                                                />
                                            </Field>
                                            <Field>
                                                <FieldLabel htmlFor="description" className="text-sm">Project Description</FieldLabel>
                                                <Textarea
                                                    id="description"
                                                    placeholder="Describe your project goals and requirements..."
                                                    className="min-h-[70px] resize-none text-sm"
                                                    required
                                                    value={formData.description}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, description: e.target.value })
                                                    }
                                                    disabled={loading}
                                                />
                                            </Field>
                                            <Button
                                                type="submit"
                                                className="w-full h-9 mt-1 bg-gradient-to-r from-[#8FC47B] to-[#b56b36] text-black hover:opacity-90"
                                                disabled={loading}
                                            >
                                                {loading ? "Sending..." : "Submit Request"}
                                            </Button>
                                        </FieldGroup>
                                    </FieldSet>
                                </form>
                            </Card>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="inline border-0 bg-transparent p-0 m-0 cursor-pointer align-baseline"
                type="button"
            >
                {children}
            </button>

            {mounted && createPortal(modalContent, document.body)}
        </>
    )
}
