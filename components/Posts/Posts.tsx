'use client';

import { Box, Card, Stack, Text } from '@mantine/core';

import classes from './Posts.module.css';

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
    title: string;
    body: string;
    author: string;
  };
};

function Post({ post }: PostProps) {
  const { title, body, author } = post;
  return (
    <Box className={classes.postWrapper}>
      <Text>{title}</Text>
      <Card className={classes.card} shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>{body}</Card.Section>
        <Card.Section>
          <Text ta="right" size="lg">
            {author}
          </Text>
        </Card.Section>
      </Card>
    </Box>
  );
}

const dummyPosts: PostProps['post'][] = [
  {
    title: 'incididunt deserunt',
    body: 'Elit dolore deserunt fugiat ad laboris incididunt ipsum ipsum. Do sunt occaecat reprehenderit ex aute ut. Voluptate dolore magna magna consectetur officia eiusmod duis nisi sunt nisi ex culpa. Velit aliquip nulla anim veniam ex deserunt magna culpa mollit ex id dolore nostrud. Irure aliqua ullamco sunt nulla ad consequat excepteur anim. Nisi aliqua officia ullamco labore et officia anim. Elit consectetur ullamco veniam ullamco esse elit quis excepteur.\r\n',
    author: 'Lewis Hickman',
  },
  {
    title: 'culpa Lorem',
    body: 'Enim deserunt consequat nisi elit incididunt fugiat fugiat. Exercitation laborum cillum esse est tempor tempor amet veniam eu labore. Enim nulla sunt eiusmod fugiat fugiat nisi tempor. Id ea ea culpa elit incididunt excepteur ipsum mollit nulla mollit.\r\n',
    author: 'Oconnor Welch',
  },
  {
    title: 'aute consectetur',
    body: 'Ipsum ad ad proident ipsum mollit. Incididunt Lorem cillum ex ex duis veniam elit. Tempor minim adipisicing esse nisi voluptate eu aliqua enim sunt elit nulla mollit. Labore reprehenderit voluptate ea laboris eiusmod velit adipisicing eiusmod dolore nisi ut laboris in. Exercitation et nostrud reprehenderit et. Excepteur eiusmod aliqua cillum reprehenderit magna est ea non aute in in. Est dolor cupidatat culpa anim eiusmod culpa officia consectetur tempor Lorem est sunt.\r\n',
    author: 'Marisol Castro',
  },
  {
    title: 'qui consectetur',
    body: 'Occaecat ipsum ea occaecat commodo tempor deserunt ea pariatur exercitation nostrud. Nisi fugiat eiusmod nulla et commodo deserunt consequat cupidatat. Ut ad nisi esse ea Lorem id anim dolor cillum. Ut aliquip commodo incididunt consectetur adipisicing veniam non Lorem consectetur. In aliquip adipisicing eu proident fugiat laborum proident consectetur Lorem anim pariatur irure et.\r\n',
    author: 'Myrtle May',
  },
  {
    title: 'eiusmod eiusmod',
    body: 'Proident anim consectetur esse labore fugiat aliqua consequat. Culpa nulla nostrud velit do. Proident esse ullamco aliqua in. Fugiat occaecat et dolore minim sunt. Pariatur deserunt sunt est veniam et enim veniam nisi velit.\r\n',
    author: 'Margret Gould',
  },
  {
    title: 'anim amet',
    body: 'Occaecat aliqua tempor et sint occaecat irure amet aliqua irure aliqua. In mollit officia nulla sit Lorem ut. Esse elit exercitation proident sunt nisi sit laborum cillum quis aliquip laboris elit dolor cupidatat. Exercitation cupidatat proident commodo exercitation laboris Lorem do sunt.\r\n',
    author: 'Brooke Estes',
  },
];
