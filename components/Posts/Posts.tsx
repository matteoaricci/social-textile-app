'use client';

import { Flex, Card, Stack, Text, Button } from '@mantine/core';

import classes from './Posts.module.css';
import { useState } from 'react';

export default function Posts() {
  return (
    <Stack gap="xl">
      {dummyPosts.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </Stack>
  );
}

type PostProps = {
  post: {
    id: string;
    title: string;
    body: string;
    author: string;
    upvotes: number;
    downvotes: number;
    created: Date | string;
  };
};

function Post({ post }: PostProps) {
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
            <Button color={rated === 1 ? "cyan" : "gray"} onClick={() => handleRatingOnClick(1)}>Up</Button>
            <Text>{Math.max(0, upvotes - downvotes + rated)}</Text>
            <Button color={rated === -1 ? "red" : "gray"} onClick={() => handleRatingOnClick(-1)}>Down</Button>
          </Flex>
          <Text ta="right" size="md">
            Posted: {new Date(created).toLocaleString()}
          </Text>
        </Flex>
      </Card.Section>
    </Card>
  );
}

const dummyPosts: PostProps['post'][] = [
  {
    id: 'e7262db4-43e6-48cf-ac78-e6b87d2aa90a',
    title: 'sint aute',
    body: 'Eiusmod reprehenderit ea dolore tempor quis exercitation est laboris commodo et eu sunt. Officia cupidatat proident tempor cillum tempor. Aliquip aliqua ea commodo adipisicing occaecat aute officia amet consequat deserunt do. Sunt nulla reprehenderit pariatur ipsum laborum enim officia id ipsum ipsum anim officia. In consectetur fugiat tempor nostrud non aute. Mollit duis deserunt id do nostrud qui tempor et labore occaecat labore.\r\n',
    author: 'Holly Mcintyre',
    upvotes: 941,
    downvotes: 1716,
    created: 'Wed Oct 04 1989 21:26:53 GMT-0400 (Eastern Daylight Time)',
  },
  {
    id: '1e4060cd-c213-4a26-a5ec-b8dfb4579438',
    title: 'anim nulla',
    body: 'Laborum et eu consectetur nisi incididunt sint nostrud. Ut consequat incididunt consectetur minim ut cupidatat consectetur excepteur esse. Duis irure ipsum Lorem ullamco anim tempor mollit culpa non eiusmod culpa id. Quis labore reprehenderit occaecat esse ullamco mollit sunt aliquip dolor duis quis dolore.\r\n',
    author: 'Figueroa Griffin',
    upvotes: 629,
    downvotes: 1553,
    created: 'Mon Jan 22 1979 09:59:06 GMT-0500 (Eastern Standard Time)',
  },
  {
    id: '7d4a6e30-82d3-4ea3-8057-dc40e9513801',
    title: 'do exercitation',
    body: 'Velit excepteur veniam sint dolore. Sint officia duis reprehenderit esse cupidatat nostrud id in cupidatat et Lorem minim sint. Proident consequat eiusmod veniam exercitation dolore laboris ut velit. Ut consectetur aliqua reprehenderit ex eiusmod ex sint sit ipsum do mollit eiusmod veniam tempor. Eiusmod consequat ea duis qui nostrud dolore sint esse. Est voluptate dolor ad adipisicing et exercitation. Consequat ea deserunt laborum consequat cupidatat eiusmod esse ullamco.\r\n',
    author: 'Alyson Tran',
    upvotes: 555,
    downvotes: 565,
    created: 'Thu Jul 06 1995 04:25:06 GMT-0400 (Eastern Daylight Time)',
  },
  {
    id: '8ee07e69-3ae0-42f1-89a3-8c59db08a912',
    title: 'non esse',
    body: 'Commodo ad adipisicing id reprehenderit cillum irure aute. Non labore mollit voluptate veniam nostrud et do proident in fugiat culpa non incididunt. Mollit officia labore nulla ipsum. Eiusmod et mollit anim dolore dolore est in. Fugiat dolor esse culpa tempor sint sit ullamco veniam magna ad consectetur consectetur laboris amet. Consequat ea deserunt ut reprehenderit qui ipsum nostrud ullamco fugiat reprehenderit in incididunt aute.\r\n',
    author: 'Gwendolyn Hammond',
    upvotes: 1580,
    downvotes: 90,
    created: 'Sat Aug 03 1996 22:35:38 GMT-0400 (Eastern Daylight Time)',
  },
  {
    id: '0087d348-64f6-4023-9a25-32bbc63be85e',
    title: 'aute cupidatat',
    body: 'Mollit incididunt in deserunt in ullamco in adipisicing. Pariatur ipsum commodo culpa non culpa qui sint nisi esse non laboris veniam eu aliqua. Do ut enim eu consequat. Veniam adipisicing non labore consectetur reprehenderit fugiat pariatur proident consectetur commodo adipisicing elit veniam. Cupidatat pariatur ipsum aute occaecat labore quis. Excepteur qui ad cillum nisi.\r\n',
    author: 'Ebony Cameron',
    upvotes: 770,
    downvotes: 507,
    created: 'Mon Jun 19 2023 23:00:02 GMT-0400 (Eastern Daylight Time)',
  },
];
