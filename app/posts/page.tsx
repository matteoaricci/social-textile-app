import Posts from '@/components/Posts/Posts';
import { getPosts } from '@/api';

export default async function page() {
  const posts = await getPosts();
  return <Posts posts={posts} />;
}
