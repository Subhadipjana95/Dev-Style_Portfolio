"use client";

import React, { useState } from 'react';
import BlurFade from "@/components/magicui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Check, ExternalLink, Heart } from "lucide-react";
import Image from 'next/image';
import { Highlight } from '@/components/ui/hero-highlight';
import { SparklesText } from '@/components/magicui/sparkles-text';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';

const SupportPage = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      // Skeleton Loader
      <section id="support">
        <div className="space-y-12">
          <Skeleton className="h-10 mb-6 sm:mb-12 w-[80%] max-w-[500px]" />

          <div className="flex flex-col gap-12">
            <div className="space-y-4">
              <Skeleton className="h-6 w-32" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Skeleton className="aspect-square rounded-xl" />
                <Skeleton className="aspect-square rounded-xl" />
              </div>
            </div>

            <div className="space-y-4">
              <Skeleton className="h-6 w-32" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <Skeleton className="h-16 rounded-lg" />
                <Skeleton className="h-16 rounded-lg" />
                <Skeleton className="h-16 rounded-lg" />
              </div>
            </div>

            <div className="space-y-4">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-20 w-full rounded-xl" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  const qrCodes = [
    {
      label: "PayPal (Global)",
      src: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776709389/Paypal_sto56s.webp",
      alt: "Paypal QR",
    },
    {
      label: "UPI (India)",
      src: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776713512/PhonePe_xsvdst.webp",
      alt: "PhonePe QR",
    },
  ];

  const bankDetails = [
    { id: 'acc', label: 'Account Number', value: '42005635831' },
    { id: 'ifsc', label: 'IFSC Code', value: 'SBIN0011387' },
    { id: 'name', label: 'Account Holder', value: 'SUBHADIP JANA' },
  ];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="support" className="mb-10">
      <div className="space-y-12">
        {/* Title */}
        <BlurFade delay={0.1}>
          <h1 className="text-2xl font-semibold tracking-tighter sm:text-3xl mb-6 sm:mb-12">
            <Highlight>
              <SparklesText className="text-inherit" sparklesCount={4}>
                Support{" "}
              </SparklesText>
            </Highlight>{" "}
            Subhadip Jana{" "}
            <Highlight>
              <SparklesText className="text-inherit" sparklesCount={4}>
                (a063)
              </SparklesText>
            </Highlight>
          </h1>
        </BlurFade>

        <div className="flex flex-col gap-12">
          {/* QR Codes Section */}
          <BlurFade delay={0.2}>
            <div className="space-y-2">
              <h2 className="text-xl font-medium">Scan & Pay</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {qrCodes.map((qr) => (
                  <div key={qr.label} className="space-y-2 group text-center">
                    <div className="bg-muted p-1 rounded-xl shadow-sm border border-dashed border-muted-foreground/30 overflow-hidden aspect-square flex items-center justify-center">
                      <Image
                        src={qr.src}
                        alt={qr.alt}
                        width={180}
                        height={180}
                        className="rounded-lg object-contain w-full h-full border border-muted-foreground/50"
                      />
                    </div>
                    <p className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {qr.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* Bank Details Section */}
          <BlurFade delay={0.3}>
            <div className="space-y-2">
              <h2 className="text-xl font-medium">Bank Transfer</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {bankDetails.map((detail) => (
                  <button
                    key={detail.id}
                    onClick={() => copyToClipboard(detail.value, detail.id)}
                    className="text-left group"
                  >
                    <div className="pl-4 pr-2 py-1.5 rounded-lg border border-dashed bg-muted hover:bg-card transition-all duration-200 relative overflow-hidden">
                      <div className="flex justify-between items-center relative z-10">
                        <div className="space-y-[0.05em]">
                          <p className="text-xs font-medium text-muted-foreground tracking-wider">
                            {detail.label}
                          </p>
                          <p className="text-lg font-mono font-medium tracking-tight">
                            {detail.value}
                          </p>
                        </div>
                        <div className="flex items-center justify-center w-8 h-8 rounded-md bg-background border  shadow-sm group-hover: transition-transform">
                          {copiedId === detail.id ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                      {copiedId === detail.id && (
                        <div className="absolute inset-0 bg-green-500/5 transition-opacity duration-300" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* Sponsorship Section */}
          <BlurFade delay={0.4}>
            <div className="space-y-4">
              <h2 className="text-xl font-medium">Sponsorship</h2>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-dashed bg-muted/30">
                <p className="text-sm text-muted-foreground flex-1">
                  If you prefer to support via GitHub, you can sponsor my work here.
                </p>
                <Link href="https://github.com/sponsors/Subhadipjana95?o=esb" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className='bg-muted border-muted-foreground/50 hover:border-rose-400/50 hover:dark:border-rose-700/50 hover:text-rose-500/60 space-x-2 group transition-all duration-200'>
                    <Heart className="stroke-rose-500/60 stroke-2 fill-none group-hover:fill-rose-500/60 size-4" /> <span className='text-muted-foreground group-hover:text-rose-500/60'>Sponsor</span>
                  </Button>
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default SupportPage;