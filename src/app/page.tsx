"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Highlight } from "@/components/ui/hero-highlight";
import GithubContributions from "@/components/github-contributions";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { WavingHand } from "@/components/waving-hand";
import { ThemedFlickeringGrid } from "@/components/themed-flickering-grid";

const BLUR_FADE_DELAY = 0.04;
import { CollaborationForm } from '@/components/collaboration-form';

export default function Page() {

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-3xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-6">
              <div className="flex-col flex flex-1">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={
                    <>
                      Hi, I&apos;m <LineShadowText className="text-gradient-light dark:text-gradient-dark tracking-tight" shadowColor="#6ece4b">{DATA.name.split(" ")[0]}</LineShadowText> <span className="hidden">Jana</span> <WavingHand />
                    </>
                  }
                />
                <BlurFadeText delay={BLUR_FADE_DELAY} text={
                  <div className="flex gap-2">
                    <div className="w-fit rounded-sm bg-gradient-to-r from-[#8FC47B] to-[#b56b36] text-background  px-[6px] sm:px-3 py-[2px] sm:py-1 text-sm">
                      also known as <span className="font-semibold">a063</span>
                    </div>
                    <Badge variant="secondary" className="gap-1 bg-gradient-to-r from-[#c8773e] dark:from-[#b76d38] to-transparent bg-no-repeat hidden sm:flex pt-1.5"><MapPin className="size-3 inline-block mb-[2px]" /> Kolkata, West Bengal, India</Badge>
                  </div>
                } />

              </div>
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="flex justify-center items-center p-1 bg-gradient-to-tl from-transparent to-primary/30 border-[0.5px] border-[#585958] rounded-full">
                <Avatar className="size-16 xs:size-10 sm:size-12 md:size-28 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="contributions">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">Contributions</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex justify-center items-center border rounded-md p-[6px] sm:p-2">
              <Link href="https://github.com/Subhadipjana95" className="w-full rounded-sm overflow-hidden">
                <GithubContributions />
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge variant="secondary" className="flex items-center gap-1.5">
                  {skill.icon && <span className="inline-flex">{skill.icon}</span>}
                  {skill.name}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="relative">
        <div className="hidden lg:block absolute left-1/2 top-0 h-[1px] w-screen -translate-x-1/2 border-t border-dashed border-muted-foreground/25 [mask-image:linear-gradient(to_right,transparent,black_6%,black_90%,transparent)]" />
        <div className="space-y-12 w-full py-6 sm:py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <div className="relative inline-block mb-3 sm:mb-2">
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[1px] w-screen border-t border-dashed border-muted-foreground/25 -z-10 lg:hidden"
                    style={{
                      maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                      WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                    }}
                  />
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my <Highlight><SparklesText className="text-inherit text-shadow-secondary-foreground text-shadow-sm" sparklesCount={12}>latest work</SparklesText></Highlight>
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to stunning web apps. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  imageDark={project.imageDark}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons" className="relative">
        <div className="hidden lg:block absolute left-1/2 top-0 h-[1px] w-screen -translate-x-1/2 border-t border-dashed border-muted-foreground/25 [mask-image:linear-gradient(to_right,transparent,black_6%,black_90%,transparent)]" />
        <div className="space-y-12 w-full py-6 sm:py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <div className="relative inline-block mb-3 sm:mb-2">
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[1px] w-screen border-t border-dashed border-muted-foreground/25 -z-10 lg:hidden"
                    style={{
                      maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                      WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                    }}
                  />
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Hackathons
                  </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like <Highlight><SparklesText className="text-inherit" sparklesCount={12}>building stuffs</SparklesText></Highlight>
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I have attended{" "}
                  {DATA.hackathons.length}+ hackathons. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                    win={(project as any).win}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="personalChoices" className="relative">
        <div className="hidden lg:block absolute left-1/2 top-0 h-[1px] w-screen -translate-x-1/2 border-t border-dashed border-muted-foreground/25 [mask-image:linear-gradient(to_right,transparent,black_6%,black_90%,transparent)]" />
        <div className="space-y-12 w-full py-6 sm:py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-4">
              <div className="space-y-6">
                <div className="relative inline-block mb-3 sm:mb-2">
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-screen border-t border-dashed border-muted-foreground/25 -z-10 lg:hidden"
                    style={{
                      maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                      WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                    }}
                  />
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Favs
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    What I <Highlight><SparklesText className="text-inherit text-shadow-secondary-foreground text-shadow-sm" sparklesCount={12}>love?</SparklesText></Highlight>
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    These are some of my favorite things to be showcased.
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <Card className="border border-dashed border-[#6A2C12] dark:border-[#F0A57F] shadow-sm max-w-2xl mx-auto rounded-xl overflow-hidden">
                <iframe
                  data-testid="embed-iframe"
                  className="w-full block"
                  src="https://open.spotify.com/embed/album/61nvyXELOalbsxDgSDeKPR?utm_source=generator"
                  width=""
                  height="352"
                  frameBorder="0"
                  allowFullScreen={false}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="contact" className="relative">
        <div className="lines hidden lg:block">
          <div className="absolute left-1/2 top-0 h-[1px] w-screen -translate-x-1/2 border-t border-dashed border-muted-foreground/25 [mask-image:linear-gradient(to_right,transparent,black_6%,black_90%,transparent)]" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -left-[88px] top-0 -translate-x-1/2 -translate-y-1/2 size-2 text-muted-foreground2">
            <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -right-[88px] top-0 translate-x-1/2 -translate-y-1/2 size-2 text-muted-foreground2">
            <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"></path>
          </svg>
        </div>
        <div className="grid items-center justify-center gap-4 text-center w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>

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
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
