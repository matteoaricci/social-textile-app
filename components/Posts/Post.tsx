'use client'

import { Post } from "./Posts"

type Props = {
    post: Post
}

export default function Post({ post }: Props) {
    console.log(post)
  return (
    <div>Post</div>
  )
}