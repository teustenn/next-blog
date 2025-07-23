import Image from 'next/image';
import Link from 'next/link';
import { Container } from './styles';

interface PostParams {
  id: number;
  documentId: string;
  title: string;
  url: string;
  width: number;
  height: number;
  alt: string;
  slug: string;
}

export default function PostCard(post: PostParams) {
  return (
    <Link href="/post/[slug]" as={`/post/${post.documentId}`}>
      <Container>
        <Image src={post.url} width={post.width} height={post.height} alt={`${post.title} cover`} priority={true} />
        <span>{post.title}</span>
      </Container>
    </Link>
  );
}
