// hooks/useGitHubRepos.ts
import { useState, useEffect } from "react";
import axios from "axios";

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_PAT;
const CACHE_EXPIRATION = 1000 * 60 * 60; // 1 hour

interface CacheItem<T> {
    data: T;
    timestamp: number;
}

const axiosInstance = axios.create({
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
    },
});

const useLocalStorage = <T>(key: string, initialValue: T) => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value: T) => {
        try {
            setStoredValue(value);
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(value));
            }
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue] as const;
};

const useGitHubRepos = () => {
    const [projects, setProjects] = useState([]);
    const [cache, setCache] = useLocalStorage<Record<string, CacheItem<any>>>('githubCache', {});

    const getCachedData = <T>(key: string): T | null => {
        const item = cache[key];
        if (item && Date.now() - item.timestamp < CACHE_EXPIRATION) {
            return item.data;
        }
        return null;
    };

    const setCachedData = <T>(key: string, data: T) => {
        setCache({ ...cache, [key]: { data, timestamp: Date.now() } });
    };

    const fetchWithCache = async <T>(key: string, fetchFn: () => Promise<T>): Promise<T> => {
        const cachedData = getCachedData<T>(key);
        if (cachedData) return cachedData;

        const data = await fetchFn();
        setCachedData(key, data);
        return data;
    };

    useEffect(() => {
        const fetchGitHubRepos = async () => {
            try {
                const repos = await fetchWithCache('repos', async () => {
                    try {
                        // Try unauthenticated request first
                        const response = await axios.get('https://api.github.com/users/Quinta0/repos');
                        return response.data;
                    } catch (error) {
                        console.error('Unauthenticated request failed, trying with token');
                        // If unauthenticated request fails, try with token
                        const authenticatedResponse = await axiosInstance.get('https://api.github.com/users/Quinta0/repos');
                        return authenticatedResponse.data;
                    }
                });

                const projectData = await Promise.all(repos.map(async (repo: any) => {
                    const [imageUrl, languages, topics] = await Promise.all([
                        fetchImageUrl(repo.owner.login, repo.name),
                        fetchRepoLanguages(repo.owner.login, repo.name),
                        fetchRepoTopics(repo.owner.login, repo.name)
                    ]);

                    return {
                        name: repo.name,
                        description: repo.description,
                        url: repo.html_url,
                        image: imageUrl,
                        languages,
                        topics,
                    };
                }));

                setProjects(projectData);
            } catch (error) {
                console.error('Error fetching GitHub repos:', error);
                if (axios.isAxiosError(error)) {
                    if (error.response) {
                        console.error('Response error:', error.response.status, error.response.data);
                    } else if (error.request) {
                        console.error('Request error:', error.request);
                    } else {
                        console.error('Error:', error.message);
                    }
                    if (error.response && error.response.status === 403) {
                        console.error('Possible reasons for 403 error:');
                        console.error('1. Invalid or expired token');
                        console.error('2. Insufficient permissions');
                        console.error('3. Rate limit exceeded');
                    }
                }
            }
        };

        fetchGitHubRepos();
    }, []);

    const fetchImageUrl = async (owner: string, repo: string) => {
        const cacheKey = `image_${owner}_${repo}`;
        return fetchWithCache(cacheKey, async () => {
            const formats = ['jpg', 'png', 'jpeg', 'gif', 'webp', 'svg'];
            for (let format of formats) {
                const url = `https://raw.githubusercontent.com/${owner}/${repo}/main/image.${format}`;
                try {
                    const response = await fetch(url, { method: 'HEAD' });
                    if (response.ok) return url;
                } catch (error) {
                    // Silently catch errors
                }
            }
            return '/image1.jpg'; // Fallback image
        });
    };

    const fetchRepoLanguages = async (owner: string, repo: string) => {
        const cacheKey = `languages_${owner}_${repo}`;
        return fetchWithCache(cacheKey, async () => {
            try {
                const response = await axiosInstance.get(`https://api.github.com/repos/${owner}/${repo}/languages`);
                return response.data;
            } catch (error) {
                console.error(`Error fetching languages for ${repo}:`, error);
                return {};
            }
        });
    };

    const fetchRepoTopics = async (owner: string, repo: string) => {
        const cacheKey = `topics_${owner}_${repo}`;
        return fetchWithCache(cacheKey, async () => {
            try {
                const response = await axiosInstance.get(`https://api.github.com/repos/${owner}/${repo}/topics`, {
                    headers: {
                        Accept: 'application/vnd.github.mercy-preview+json'
                    },
                });
                return response.data.names || [];
            } catch (error) {
                console.error(`Error fetching topics for ${repo}:`, error);
                return [];
            }
        });
    };

    return projects;
};

export default useGitHubRepos;