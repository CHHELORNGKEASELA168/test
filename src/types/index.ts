export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
}

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    image: string;
}