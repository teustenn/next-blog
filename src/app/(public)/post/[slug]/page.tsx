import Comments from '@/app/ui/comments';
import Details from '@/app/ui/details';
import Heading from '@/app/ui/heading';
import Paragraph from '@/app/ui/paragraph';
import { PostsService } from '@/services/posts-service';
import { PostContent } from '@/types/post';
import Image from 'next/image';
import { Container } from './styles';

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await PostsService.getOne({ id: slug, searchTerm: 'populate=*' });
  const content = post.content;

  const handleListOrder = (list: PostContent, index: number) => {
    return list.format === 'ordered' ? (
      <ol key={`list-${index}`} type="1">
        {handleList(list)}
      </ol>
    ) : (
      <ul key={`list-${index}`}>{handleList(list)}</ul>
    );
  };

  const handleList = (list: PostContent) => {
    return list.children.map((listItem, listItemIndex) => {
      return listItem.children.map((listContent, listContentIndex) => {
        if (listContent.type === 'text') {
          return <li key={`item-${listItemIndex}-${listContentIndex}`}>{listContent.text}</li>;
        }

        if (listContent.type === 'list-item') {
          return (
            <ul key={`sub-list-${listItemIndex}-${listContentIndex}`} className="sub-item">
              {listContent.children.map((subItem, subItemIndex) => {
                return <li key={`item-${subItemIndex}-${listItemIndex}`}>{subItem.text}</li>;
              })}
            </ul>
          );
        }
      });
    });
  };

  return (
    <Container>
      {post.cover && (
        <Image
          src={post.cover.url}
          width={post.cover.width}
          height={post.cover.height}
          alt={`${post.cover.url} cover`}
          priority
        />
      )}

      <Details author={post.author.name} publishedAt={post.publishedAt} />

      <div className="content">
        {content.map((item, index) => {
          if (item.type === 'heading') {
            return item.children.map((child, childIndex) => (
              <Heading key={`heading-${index}-${childIndex}`} level={item.level} text={child.text} />
            ));
          }

          if (item.type === 'paragraph') {
            return item.children.map((child, childIndex) => (
              <Paragraph key={`paragraph-${index}-${childIndex}`} text={child.text} bold={child.bold} />
            ));
          }

          if (item.type === 'list') {
            return handleListOrder(item, index);
          }

          return null;
        })}

        <Comments identifier={post.documentId} title={post.title} slug={post.documentId} />
      </div>
    </Container>
  );
}
