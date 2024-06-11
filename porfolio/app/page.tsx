"use client";

import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Component() {
  useEffect(() => {
    const interval = setInterval(() => {
      const firstItem = document.querySelector('.carousel-item:first-child');
      if (firstItem) {
        (firstItem as HTMLElement).style.marginLeft = '-100%';
        setTimeout(() => {
          firstItem.parentNode.appendChild(firstItem);
          (firstItem as HTMLElement).style.marginLeft = '0';
        }, 1000); // 1s animation duration
      }
    }, 10000); // change slide every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
      <div className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-50">
        <section className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0 bg-gray-900/50 z-10" />
          <div
              className="relative z-20 container h-full flex items-center justify-center text-center text-gray-50 gap-6 px-4 md:px-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">John Doe</h1>
              <p className="max-w-[700px] text-lg md:text-xl">
                I'm a full-stack developer with a passion for creating beautiful and functional web applications.
              </p>
              <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-900/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
              >
                View My Work
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 flex">
            <div className="w-1/2 h-full overflow-hidden">
              <div className="image-gallery w-full h-full">
                {images.map((image, index) => (
                    <div key={index} className={`gallery-column column-${index % 2 === 0 ? 'even' : 'odd'}`}>
                      <img src={image} alt={`Hero Image ${index + 1}`} className="absolute inset-0 w-full h-full object-cover object-center" />
                    </div>
                ))}
              </div>
            </div>
            <div className="w-1/2 h-full overflow-hidden">
              <div className="image-gallery w-full h-full" style={{ animationDirection: 'reverse' }}>
                {images.map((image, index) => (
                    <div key={index} className={`gallery-column column-${index % 2 === 0 ? 'even' : 'odd'}`}>
                      <img src={image} alt={`Hero Image ${index + 1}`} className="absolute inset-0 w-full h-full object-cover object-center" />
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">About Me</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Get to Know Me
                </h2>
                <p className="text-gray-400">
                  I'm a passionate full-stack developer with a strong background in web development. I love creating
                  beautiful and functional applications that solve real-world problems. In my free time, I enjoy exploring
                  new technologies, contributing to open-source projects, and staying up-to-date with the latest industry
                  trends.
                </p>
              </div>
              <div
                  className="after:absolute after:inset-y-0 after:w-px after:bg-gray-400/20 relative pl-6 after:left-0 grid gap-10">
                <div className="grid gap-1 text-sm relative">
                  <div
                      className="aspect-square w-3 bg-gray-50 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                  <div className="font-medium">June 2020 - Present - Senior Software Engineer at Acme Inc.</div>
                  <div className="text-gray-400">
                    Responsible for designing and implementing complex web applications using React, Node.js, and various
                    other technologies.
                  </div>
                </div>
                <div className="grid gap-1 text-sm relative">
                  <div
                      className="aspect-square w-3 bg-gray-50 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                  <div className="font-medium">September 2018 - May 2020 - Software Engineer at Globex Corp.</div>
                  <div className="text-gray-400">
                    Worked on a team developing a large-scale e-commerce platform using React, Redux, and Django.
                  </div>
                </div>
                <div className="grid gap-1 text-sm relative">
                  <div
                      className="aspect-square w-3 bg-gray-50 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                  <div className="font-medium">May 2016 - August 2018 - Intern at Stark Industries</div>
                  <div className="text-gray-400">
                    Gained experience in full-stack web development, working on various projects using HTML, CSS,
                    JavaScript, and PHP.
                  </div>
                </div>
                <div className="grid gap-1 text-sm relative">
                  <div
                      className="aspect-square w-3 bg-gray-50 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                  <div className="font-medium">
                    September 2012 - May 2016 - Bachelor of Science in Computer Science, University of California,
                    Berkeley
                  </div>
                  <div className="text-gray-400">
                    Graduated with a 3.8 GPA, with a focus on web development and software engineering.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="fixed top-0 left-0 w-full bg-gray-950 z-30 py-2 px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Experience
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Projects
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <SunIcon className="h-5 w-5" />
            <MoonIcon className="h-5 w-5" />
          </div>
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">Projects</div>
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                My Recent Work
              </h2>
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2 rounded-lg border border-gray-800 bg-gray-950 p-4 shadow-sm">
                        <img src="/placeholder.svg" alt="Project 1" className="rounded-lg" />
                        <div className="flex flex-col items-center justify-between h-full">
                          <div>
                            <h3 className="text-lg font-medium">Project 1</h3>
                            <p className="text-gray-400">A web application built with React, Node.js, and MongoDB.</p>
                          </div>
                          <div className="flex justify-center">
                            <Link
                                href="#"
                                className="inline-flex h-8 items-center justify-center rounded-md bg-gray-50 px-4 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-900/90 dark:focus-visible:ring-gray-300"
                                prefetch={false}
                            >
                              View Project
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="grid gap-2 rounded-lg border border-gray-800 bg-gray-950 p-4 shadow-sm">
                        <img src="/placeholder.svg" alt="Project 2" className="rounded-lg" />
                        <div className="flex flex-col items-center justify-between h-full">
                          <div>
                            <h3 className="text-lg font-medium">Project 2</h3>
                            <p className="text-gray-400">A mobile app built with React Native and Firebase.</p>
                          </div>
                          <div className="flex justify-center">
                            <Link
                                href="#"
                                className="inline-flex h-8 items-center justify-center rounded-md bg-gray-50 px-4 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-900/90 dark:focus-visible:ring-gray-300"
                                prefetch={false}
                            >
                              View Project
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2 rounded-lg border border-gray-800 bg-gray-950 p-4 shadow-sm">
                        <img src="/placeholder.svg" alt="Project 3" className="rounded-lg" />
                        <div className="flex flex-col items-center justify-between h-full">
                          <div>
                            <h3 className="text-lg font-medium">Project 3</h3>
                            <p className="text-gray-400">A web application built with React, Node.js, and MongoDB.</p>
                          </div>
                          <div className="flex justify-center">
                            <Link
                                href="#"
                                className="inline-flex h-8 items-center justify-center rounded-md bg-gray-50 px-4 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-900/90 dark:focus-visible:ring-gray-300"
                                prefetch={false}
                            >
                              View Project
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="grid gap-2 rounded-lg border border-gray-800 bg-gray-950 p-4 shadow-sm">
                        <img src="/placeholder.svg" alt="Project 4" className="rounded-lg" />
                        <div className="flex flex-col items-center justify-between h-full">
                          <div>
                            <h3 className="text-lg font-medium">Project 4</h3>
                            <p className="text-gray-400">A mobile app built with React Native and Firebase.</p>
                          </div>
                          <div className="flex justify-center">
                            <Link
                                href="#"
                                className="inline-flex h-8 items-center justify-center rounded-md bg-gray-50 px-4 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-900 dark:text-gray-50 dark:hover:bg-gray-900/90 dark:focus-visible:ring-gray-300"
                                prefetch={false}
                            >
                              View Project
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">Contact</div>
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Get in Touch
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-400">
                      Name
                    </Label>
                    <Input id="name" placeholder="Enter your name"
                           className="bg-gray-800 border-gray-700 text-gray-50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-400">
                      Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-gray-800 border-gray-700 text-gray-50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-400">
                    Message
                  </Label>
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

function MoonIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
  );
}

function SunIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
  );
}

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
];