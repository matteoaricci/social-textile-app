import { getPost } from '@/api';
import Post from '@/components/Posts/Post';

type PostParams = {
  params: {
    id: string;
  };
};

export default async function page({ params }: PostParams) {
  const { id } = params;
  const post = await getPost(id);
  return <Post post={post} />;
}
