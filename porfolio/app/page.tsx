"use client";

import Link from "next/link";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {JSX, SVGProps, useEffect, useState} from "react";
import axios from "axios";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
export default function Component() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Quinta0/repos', {
          headers: {
            Authorization: GITHUB_TOKEN,
          },
        });
        const repos = response.data;

        const projectData = await Promise.all(repos.map(async (repo: { owner: { login: any; }; name: any; description: any; html_url: any; }) => {
          const imageUrl = await fetchImageUrl(repo.owner.login, repo.name);
          const languages = await fetchRepoLanguages(repo.owner.login, repo.name);
          return {
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            image: imageUrl || '/placeholder.svg',
            languages,
          };
        }));

        // @ts-ignore
        setProjects(projectData);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      }
    };

    const fetchImageUrl = async (owner: any, repo: any) => {
      const formats = ['jpg', 'png', 'jpeg', 'gif', 'webp', 'svg'];
      for (let format of formats) {
        const mainUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/image.${format}`;
        // const masterUrl = `https://raw.githubusercontent.com/${owner}/${repo}/master/image.${format}`;

        try {
          const mainResponse = await fetch(mainUrl);
          if (mainResponse.ok) return mainUrl;
        } catch {}

        // try {
        //   const masterResponse = await fetch(masterUrl, { method: 'HEAD' });
        //   if (masterResponse.ok) return masterUrl;
        // } catch {}
      }
      return '/image1.jpg';
    };

    const fetchRepoLanguages = async (owner: any, repo: any) => {
      try {
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/languages`, {
          headers: {
            Authorization: GITHUB_TOKEN,
          },
        });
        return response.data;
      } catch (error) {
        console.error(`Error fetching languages for ${repo}:`, error);
        return {};
      }
    };

    fetchGitHubRepos().then(r => r);
  }, []);

  return (
      <div className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-50">
        <section className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0 bg-gray-900/50 z-10" />
          <div className="relative z-20 container h-full flex items-center justify-center text-center text-gray-50 gap-6 px-4 md:px-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">John Doe</h1>
              <p className="max-w-[700px] text-lg md:text-xl">
                I am a full-stack developer with a passion for creating beautiful and functional web applications.
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
                      <img
                          src={image}
                          alt={`Hero Image ${index + 1}`}
                          className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                    </div>
                ))}
              </div>
            </div>
            <div className="w-1/2 h-full overflow-hidden">
              <div className="image-gallery w-full h-full" style={{ animationDirection: 'reverse' }}>
                {images.map((image, index) => (
                    <div key={index} className={`gallery-column column-${index % 2 === 0 ? 'even' : 'odd'}`}>
                      <img
                          src={image}
                          alt={`Hero Image ${index + 1}`}
                          className="absolute inset-0 w-full h-full object-cover object-center"
                      />
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
                  I am a passionate full-stack developer with a strong background in web development. I love creating beautiful and functional applications that solve real-world problems. In my free time, I enjoy exploring new technologies, contributing to open-source projects, and staying up-to-date with the latest industry trends.
                </p>
              </div>
              <div className="after:absolute after:inset-y-0 after:w-px after:bg-gray-400/20 relative pl-6 after:left-0 grid gap-10">
                <div className="grid gap-1 text-sm relative">
                  <div className="aspect-square w-3 bg-gray-50 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                  <div className="font-medium">June 2020 - Present - Senior Software Engineer at Acme Inc.</div>
                  <div className="text-gray-400">
                    Responsible for designing and implementing complex web applications using React, Node.js, and various other technologies.
                  </div>
                </div>
                <div className="grid gap-1 text-sm relative">
                  <div className="aspect-square w-3 bg-gray-50 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                  <div className="font-medium">September 2018 - May 2020 - Software Engineer at Globex Corp.</div>
                  <div className="text-gray-400">
                    Worked on a team developing a large-scale e-commerce platform using React, Redux, and Django.
                  </div>
                </div>
                <div className="grid gap-1 text-sm relative">
                  <div className="aspect-square w-3 bg-gray-50 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                  <div className="font-medium">May 2016 - August 2018 - Intern at Stark Industries</div>
                  <div className="text-gray-400">
                    Gained experience in full-stack web development, working on various projects using HTML, CSS, JavaScript, and PHP.
                  </div>
                </div>
                <div className="grid gap-1 text-sm relative">
                  <div className="aspect-square w-3 bg-gray-50 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                  <div className="font-medium">
                    September 2012 - May 2016 - Bachelor of Science in Computer Science, University of California, Berkeley
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

        <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
            <div className="space-y-4 text-center">
              <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">Projects</div>
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                My Recent Work
              </h2>
              <Carousel className="w-full max-w-lg mx-auto">
                <CarouselPrevious
                    className="absolute left-4 z-10 top-1/2 transform -translate-y-1/2 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
                  <span className="sr-only">Previous</span>
                  &#10094;
                </CarouselPrevious>
                <CarouselContent>
                  {projects.map((project, index) => (
                      <CarouselItem key={index} className="w-full flex justify-center">
                        <Card className="w-full max-w-sm bg-gray-800">
                          <img src={project.image} alt={project.name}
                               className="min-h-max object-contain rounded-t-md justify-center"/>
                          <CardContent className="p-4">
                            <h3 className="text-2xl font-bold text-gray-200">{project.name}</h3>
                            <p className="text-gray-400 text-justify">{project.description}</p>
                            <div className="flex flex-wrap mt-2 justify-center">
                              {Object.keys(project.languages).map((language, index) => (
                                  <span key={index} className="bg-gray-400 rounded-full px-2 py-1 text-sm mr-2 mb-2">
                              {language}
                            </span>
                              ))}
                            </div>
                            <Link href={project.url} className="mt-4 inline-block text-sm font-medium text-blue-500">
                              View Project
                            </Link>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext
                    className="absolute right-4 z-10 top-1/2 transform -translate-y-1/2 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
                  <span className="sr-only">Next</span>
                  &#10095;
                </CarouselNext>
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
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
];
