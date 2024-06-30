"use client";
import Image from 'next/image';
import Link from "next/link";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {JSX, SVGProps} from "react";
import useGitHubRepos from "@/hooks/useGitHubRepos";

export default function Component() {
  const projects = useGitHubRepos();

  return (
      <div className="flex flex-col min-h-[100dvh] bg-[#041225] text-[#e3eefc]">
        <section className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0 bg-gray-900/50 z-10"/>
          <div
              className="relative z-20 container h-full flex items-center justify-center text-center text-gray-50 gap-6 px-4 md:px-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">Quintavalle
                Pietro</h1>
              <p className="max-w-[700px] text-lg md:text-xl">
                I am a Computer Science student with lots of passion about Tech.
              </p>
              <Link
                  href="/projects"
                  className="scroll-smooth inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-900/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
              >
                View My Work
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 flex">
            <div className="w-1/2 h-full overflow-hidden">
              <div className="image-gallery w-full h-full">
                <Image
                    src="/image2.jpg"
                    alt="Hero Image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    quality={75}
                    sizes="(max-width: 600px) 100vw,
                               (max-width: 1200px) 50vw,
                               50vw"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="about">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">About Me</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Get to Know Me
                </h2>
                <p className="text-gray-400">
                  I completed my high school education at the Scuola Cantonale di Commercio di Bellinzona, achieving
                  both the Maturity and AFC.
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Currently, I am pursuing a bachelor's degree in Computer Science at USI, driven by my passion for
                  technology and innovation.
                  As a highly motivated individual, I excel in both independent and group settings, demonstrating strong
                  abilities to handle pressure
                  and efficiently coordinate tasks with others.
                </p>
                <ul className="list-disc pl-5 text-gray-400">
                  <li>Team Collaboration: Proven ability to work effectively in team environments, contributing to group
                    success through effective communication and cooperation.
                  </li>
                  <li>Independent Work: Capable of managing tasks independently with a high level of responsibility and
                    attention to detail.
                  </li>
                  <li>Adaptability: Thrive in fast-paced, dynamic environments, quickly adapting to new challenges and
                    learning opportunities.
                  </li>
                  <li>Leadership: Skilled in coordinating tasks, ensuring both my responsibilities and those of my team
                    are completed efficiently.
                  </li>
                </ul>
                <p className="text-gray-400">
                  I got my first taste of coding in 2019, amidst the COVID-19 pandemic, out of boredom and curiosity.
                  Currently immersed in my computer science studies, I am always eager to learn and grow, seeking
                  opportunities to expand my knowledge and skills in the tech field.
                  My passion for technology drives me to continuously improve and explore new areas, from software
                  development to emerging tech trends.
                </p>
                <p className="text-gray-400">
                  I am excited to connect with professionals and explore opportunities that allow me to apply my skills
                  and learn from experienced individuals.
                  Feel free to reach out for discussions on industry trends, potential job opportunities, or
                  collaborative projects.
                </p>
              </div>
              <div
                  className="after:absolute after:inset-y-0 after:w-px after:bg-gray-400/20 relative pl-6 after:left-0 grid gap-10">
                <div className="grid gap-1 text-sm relative">
                  <div
                      className="aspect-square w-3 bg-gray-50 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1"/>
                  <div className="font-medium">September 2022 - Present - Student at USI Università della Svizzera
                    italiana
                  </div>
                  <div className="text-gray-400">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Pursuing a bachelor's degree in Computer Science.
                  </div>
                </div>
                <div className="grid gap-1 text-sm relative">
                  <div
                      className="aspect-square w-3 bg-gray-50 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1"/>
                  <div className="font-medium">September 2017 - June 2021 - Scuola Cantonale di Commercio di
                    Bellinzona
                  </div>
                  <div className="text-gray-400">
                    Achieved both the Maturity and AFC in Economics.
                  </div>
                </div>
                <div className="grid gap-1 text-sm relative">
                  <div
                      className="aspect-square w-3 bg-gray-50 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1"/>
                  <div className="font-medium">2019 - First taste of coding</div>
                  <div className="text-gray-400">
                    Amidst the COVID-19 pandemic, out of boredom and curiosity.
                  </div>
                </div>
                <div className="grid gap-1 text-sm relative">
                  <div
                      className="aspect-square w-3 bg-gray-50 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1"/>
                  <div className="font-medium">2015 - Worked for Pasteris Nicola in his architectural firm as a beginner
                    architect
                  </div>
                  <div className="text-gray-400">
                    Used programs like AutoCAD.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>

        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center" id="contact">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">Contact</div>
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Get in Touch
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-400">Name</Label>
                    <Input
                        id="name"
                        placeholder="Enter your name"
                        className="bg-gray-800 border-gray-700 text-gray-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-400">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-gray-800 border-gray-700 text-gray-50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-400">Message</Label>
                  <Textarea
                      id="message"
                      placeholder="Enter your message"
                      rows={4}
                      className="bg-gray-800 border-gray-700 text-gray-50"
                  />
                </div>
                <Button
                    type="submit"
                    className="w-full bg-gray-50 text-gray-900 hover:bg-gray-50/90 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-900/90"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>
  );
}

function MoonIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
      </svg>
  );
}

function SunIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2"/>
        <path d="M12 20v2"/>
        <path d="m4.93 4.93 1.41 1.41"/>
        <path d="m17.66 17.66 1.41 1.41"/>
        <path d="M2 12h2"/>
        <path d="M20 12h2"/>
        <path d="m6.34 17.66-1.41 1.41"/>
        <path d="m19.07 4.93-1.41 1.41"/>
      </svg>
  );
}

