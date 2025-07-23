import MainContainer from '@/app/ui/main-container';
import PostCard from '@/app/ui/post-card';
import { PostsService } from '../services/posts-service';

export default async function Home() {
  const posts = await PostsService.getAll({ searchTerm: 'populate=*&sort=id:desc' });

  return (
    <MainContainer>
      {posts.map((post) => (
        <PostCard
          slug={post.slug}
          key={post.id}
          id={post.id}
          documentId={post.documentId}
          title={post.title}
          url={post.cover.formats.small.url}
          width={post.cover.formats.small.width}
          height={post.cover.formats.small.height}
          alt={`${post.title} cover`}
        />
      ))}
    </MainContainer>
  );
}
