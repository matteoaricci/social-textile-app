'use client';
import { Post } from '@/types';
import { PostCard } from './Posts';
import { Comment } from '@/types/comment';
import { Box } from '@mantine/core';

type Props = {
  post: Post;
};

export default function Post({ post }: Props) {
  return (
    <>
      <PostCard post={post} />
      {post.comments.map((comment) => {
        return <Comment comment={comment} key={comment.id} />;
      })}
    </>
  );
}

type CommentProps = {
  comment: Comment;
};

function Comment({ comment }: CommentProps) {
  return (
    <>
      <Box >{comment.content}</Box >;
      <Box pl="md">
        {comment.comments?.map((cmnt) => {
          return <Comment key={cmnt.id} comment={cmnt} />;
        })}
      </Box>
    </>
  );
}
