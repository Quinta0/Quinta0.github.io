// hooks/useGitHubRepos.ts
import { useState, useEffect } from "react";
import axios from "axios";

const GITHUB_TOKEN = process.env.PAT;

const useGitHubRepos = () => {
    const [projects, setProjects] = useState([]);
    const [languageCache, setLanguageCache] = useState({});
    const [imageCache, setImageCache] = useState({});

    useEffect(() => {
        const fetchGitHubRepos = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/Quinta0/repos', {
                    headers: {
                        Authorization: GITHUB_TOKEN,
                    },
                });
                const repos = response.data;

                // Fetch images and languages concurrently
                const projectData = await Promise.all(repos.map(async (repo: { owner: { login: any; }; name: any; description: any; html_url: any; }) => {
                    const [imageUrl, languages] = await Promise.all([
                        fetchImageUrl(repo.owner.login, repo.name),
                        fetchRepoLanguages(repo.owner.login, repo.name)
                    ]);

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
            const cacheKey = `${owner}/${repo}`;
            // @ts-ignore
            if (imageCache[cacheKey]) {
                // @ts-ignore
                return imageCache[cacheKey];
            }

            const formats = ['jpg', 'png', 'jpeg', 'gif', 'webp', 'svg'];
            for (let format of formats) {
                const url = `https://raw.githubusercontent.com/${owner}/${repo}/main/image.${format}`;
                try {
                    const response = await fetch(url);
                    if (response.ok) {
                        setImageCache(prev => ({ ...prev, [cacheKey]: url }));
                        return url;
                    }
                } catch (error) {
                    // Silently catch errors
                }
            }

            return '/image1.jpg'; // Fallback image
        };

        const fetchRepoLanguages = async (owner: any, repo: any) => {
            const cacheKey = `${owner}/${repo}`;
            // @ts-ignore
            if (languageCache[cacheKey]) {
                // @ts-ignore
                return languageCache[cacheKey];
            }

            try {
                const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/languages`, {
                    headers: {
                        Authorization: GITHUB_TOKEN,
                    },
                });
                setLanguageCache(prev => ({ ...prev, [cacheKey]: response.data }));
                return response.data;
            } catch (error) {
                console.error(`Error fetching languages for ${repo}:`, error);
                return {};
            }
        };

        fetchGitHubRepos().then(r => r);
    }, [languageCache, imageCache]);

    return projects;
};

export default useGitHubRepos;
