'use client';
import { Post } from '@/types';
import { PostCard } from './Posts';

type Props = {
  post: Post;
};

export default function Post({ post }: Props) {
  return;
  <>
    <PostCard post={post} />
  </>;
}


function Comment() {

}