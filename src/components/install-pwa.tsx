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
        // const hasSeenPrompt = localStorage.getItem('pwa-install-prompt-shown');
        // if (hasSeenPrompt === 'true') {
        //    setHasShownBefore(true);
        // }
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
        // Handle iOS
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
        if (isIOS) {
            alert("To install on iOS:\n1. Tap the Share button below\n2. Scroll down and tap 'Add to Home Screen'");
            return;
        }

        // Handle Android/Desktop fallback (if no prompt available, e.g. on HTTP)
        if (!deferredPrompt) {
            alert("To install:\nTap the browser menu (⋮) in the top right\nSelect 'Install App' or 'Add to Home screen'");
            return;
        }

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
                        className="fixed inset-0 z-[100] bg-background/40 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    {/* Install Card Container */}
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
                        className="fixed left-1/2 top-1/2 z-[101] w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                    >
                        <Card className="relative border-border bg-card p-4 sm:p-6 shadow-2xl rounded-lg">
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
                                <div className="rounded-full bg-primary/10 p-4">
                                    <Smartphone className="h-8 w-8 text-primary" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="text-center">
                                <h3 className="mb-2 text-xl font-semibold text-foreground">
                                    Install a063
                                </h3>

                                <p className="mb-6 text-sm text-muted-foreground">
                                    Get instant & reliable access from your home screen.
                                </p>

                                {/* Buttons */}
                                <div className="flex flex-row gap-3">
                                    <Button
                                        onClick={handleClose}
                                        variant="outline"
                                        className="flex-1 h-9 text-sm px-3"
                                    >
                                        Later
                                    </Button>
                                    <Button
                                        onClick={handleInstall}
                                        className="flex-1 gap-2 h-9 text-sm px-3 bg-gradient-to-r from-[#8FC47B] to-[#b56b36] text-black"
                                    >
                                        <Download className="h-4 w-4" />
                                        Install
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
