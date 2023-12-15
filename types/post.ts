export type Post = {
    id: string;
    title: string;
    body: string;
    author: string;
    upvotes: number;
    downvotes: number;
    created: Date | string;
}