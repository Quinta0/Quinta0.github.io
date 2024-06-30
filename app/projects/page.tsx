"use client";

import { useState } from "react";
import useGitHubRepos from "@/hooks/useGitHubRepos";
import { Button } from "@/components/ui/button";

// Define the types for the projects and groupedProjects
interface Project {
    name: string;
    description: string;
    image: string;
    url: string;
    languages: Record<string, number>;
    topics: string[];
}

interface GroupedProjects {
    [key: string]: Project[];
}

export default function ProjectsPage() {
    const projects: Project[] = useGitHubRepos();
    const [selectedTag, setSelectedTag] = useState("All");

    // Group projects by tags
    const groupedProjects: GroupedProjects = projects.reduce((acc: GroupedProjects, project: Project) => {
        project.topics.forEach((topic: string) => {
            if (!acc[topic]) {
                acc[topic] = [];
            }
            acc[topic].push(project);
        });
        return acc;
    }, { "All": projects });

    const tags = ["All", ...Object.keys(groupedProjects).filter(tag => tag !== "All")];

    return (
        <div className="container py-12 md:py-24 lg:py-32">
            <h1 className="text-4xl font-bold mb-8">My Projects</h1>

            <div className="mb-8 flex flex-wrap gap-2">
                {tags.map(tag => (
                    <Button
                        className="rounded-[36px]"
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        variant={selectedTag === tag ? "default" : "outline"}

                    >
                        {tag}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groupedProjects[selectedTag]?.map((project, index) => (
                    <div key={index} className="bg-[#0f1d30] rounded-[36px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(229,231,235,0.1)]">
                        <img src={project.image} alt={project.name} className="w-full h-50 object-contain" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                            <p className=" dark:text-gray-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap mb-4">
                                {Object.keys(project.languages).map((language, langIndex) => (
                                    <span key={langIndex} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1 text-sm mr-2 mb-2">
                                        {language}
                                    </span>
                                ))}
                            </div>
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
