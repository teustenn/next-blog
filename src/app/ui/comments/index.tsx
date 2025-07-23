'use client';
import { DiscussionEmbed } from 'disqus-react';
import { Container } from './styles';

interface Comment {
  identifier: string;
  title: string;
  slug: string;
}

export default function Comments({ identifier, title, slug }: Comment) {
  return (
    <Container>
      <DiscussionEmbed
        shortname="next-blog"
        config={{
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/post/${slug}`,
          identifier: identifier,
          title: title,
        }}
      />
    </Container>
  );
}
