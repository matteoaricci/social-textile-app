'use client';

import { Flex, Card, Stack, Text, Button } from '@mantine/core';

import classes from './Posts.module.css';
import { useState } from 'react';
import { IconArrowBigUpLines, IconArrowBigDownLines } from '@tabler/icons-react';

export type Post = {
  id: string;
  title: string;
  body: string;
  author: string;
  upvotes: number;
  downvotes: number;
  created: Date | string;
};

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <Stack gap="xl">
      {posts.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </Stack>
  );
}

function Post({ post }: {post: Post}) {
  const { title, body, author, created, upvotes, downvotes } = post;
  const [rated, setRated] = useState<number>(0);
  const handleRatingOnClick = (rating: number) => {
    if (rated === rating) {
      setRated(0);
    } else {
      setRated(rating);
    }
  };
  return (
    <Card className={classes.card} shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section mb="sm" withBorder py="xs" component="h2">
        {title}
      </Card.Section>
      <Card.Section withBorder pb="sm">
        {body}
      </Card.Section>
      <Card.Section pt="sm">
        <Flex justify="space-between">
          <Flex align="center" gap="sm">
            <IconArrowBigUpLines
              className={classes.voteIcons}
              fill={rated === 1 ? 'var(--mantine-color-blue-filled)' : 'none'}
              color="var(--mantine-color-blue-filled)"
              onClick={() => handleRatingOnClick(1)}
            />
            <Text>{upvotes - downvotes + rated}</Text>
            <IconArrowBigDownLines
              className={classes.voteIcons}
              fill={rated === -1 ? 'var(--mantine-color-red-filled)' : 'none'}
              color="var(--mantine-color-red-filled)"
              onClick={() => handleRatingOnClick(-1)}
            />
          </Flex>
          <Text ta="right" size="md">
            Posted: {new Date(created).toLocaleString()}
          </Text>
        </Flex>
      </Card.Section>
    </Card>
  );
}
