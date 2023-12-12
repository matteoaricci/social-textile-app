import { Post } from "@/components/Posts/Posts"

const baseUrl = 'http://localhost:3001'

const getPosts = async () => {
    const res = await fetch(baseUrl + '/posts')
    const posts = await res.json()

    return posts as Post[]
}

export {
    getPosts
}