type article = {
    title: string;
    desc: string;
    link: string;
    views: string;
    published: string;
    tags: string[];
    github_url: string;
}

declare module '*.mp3' {
    const src: string;
    export default src;
}