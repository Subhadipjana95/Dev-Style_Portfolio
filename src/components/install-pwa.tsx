'use client';

import { useEffect, useState } from 'react';
import { Download, X, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function InstallPWA() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [isInstallable, setIsInstallable] = useState(false);
    const [showPrompt, setShowPrompt] = useState(false);
    const [hasShownBefore, setHasShownBefore] = useState(false);

    // Check if user has seen the prompt before
    useEffect(() => {
        const hasSeenPrompt = localStorage.getItem('pwa-install-prompt-shown');
        if (hasSeenPrompt === 'true') {
            setHasShownBefore(true);
        }
    }, []);

    useEffect(() => {
        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e as BeforeInstallPromptEvent);
            setIsInstallable(true);
        };

        window.addEventListener('beforeinstallprompt', handler);

        // Check if already installed
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsInstallable(false);
        }

        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    // Combined trigger logic - whichever happens first
    useEffect(() => {
        if (!isInstallable || hasShownBefore) return;

        let timerTriggered = false;
        let scrollTriggered = false;

        // Timer-based trigger (1 minute)
        const timer = setTimeout(() => {
            if (!scrollTriggered) {
                timerTriggered = true;
                setShowPrompt(true);
                localStorage.setItem('pwa-install-prompt-shown', 'true');
            }
        }, 60000); // 1 minute

        // Scroll-based trigger
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const clientHeight = window.innerHeight;

            // Check if user has scrolled to bottom (within 50px threshold)
            if (scrollHeight - (scrollTop + clientHeight) < 50 && !timerTriggered && !scrollTriggered) {
                scrollTriggered = true;
                // Show prompt 2 seconds after reaching bottom
                setTimeout(() => {
                    setShowPrompt(true);
                    localStorage.setItem('pwa-install-prompt-shown', 'true');
                }, 2000);
                // Clear the timer since scroll happened first
                clearTimeout(timer);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isInstallable, hasShownBefore]);

    const handleInstall = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            setDeferredPrompt(null);
            setIsInstallable(false);
            setShowPrompt(false);
        }
    };

    const handleClose = () => {
        setShowPrompt(false);
    };

    if (!isInstallable) return null;

    return (
        <AnimatePresence>
            {showPrompt && (
                <>
                    {/* Backdrop with blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    {/* Install Card */}
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
                        className="fixed left-1/2 top-1/2 z-[101] w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2"
                    >
                        <Card className="relative border-border bg-card p-6 shadow-2xl ro">
                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                aria-label="Close"
                            >
                                <X className="h-4 w-4" />
                            </button>

                            {/* Icon */}
                            <div className="mb-4 flex justify-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                    className="rounded-full bg-primary/10 p-4"
                                >
                                    <Smartphone className="h-8 w-8 text-primary" />
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className="text-center">
                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="mb-2 text-xl font-semibold text-foreground"
                                >
                                    Install a063
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mb-6 text-sm text-muted-foreground"
                                >
                                    Get instant & reliable access from your home screen.
                                </motion.p>

                                {/* Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-col gap-3 sm:flex-row"
                                >
                                    <Button
                                        onClick={handleInstall}
                                        className="flex-1 gap-2"
                                        size="lg"
                                    >
                                        <Download className="h-4 w-4" />
                                        Install Now
                                    </Button>

                                    <Button
                                        onClick={handleClose}
                                        variant="outline"
                                        className="flex-1"
                                        size="lg"
                                    >
                                        Maybe Later
                                    </Button>
                                </motion.div>
                            </div>
                        </Card>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
