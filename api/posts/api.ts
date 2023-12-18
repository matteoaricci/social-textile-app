import { Post } from "@/types";

const baseUrl = 'http://localhost:3001';

const getPosts = async () => {
  const res = await fetch(baseUrl + '/posts');
  const posts = await res.json();

  return posts as Post[];
};

const getPost = async (id: string) => {
  const res = await fetch(baseUrl + '/posts/' + id);
  const post = await res.json();

  return post as Post;
};

const getPostComments = async (id: string) => {
  const res = await fetch(baseUrl + '/posts/' + id + '/comments')
  const comments = await res.json()

  return comments as Comment[]
}

export { getPosts, getPost };
