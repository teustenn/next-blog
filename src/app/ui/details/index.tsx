import formatDate from '@/services/format-date';
import { Container } from './styles';

interface Details {
  author: string;
  publishedAt: string;
}

export default function Details(details: Details) {
  return (
    <Container>
      <div className="content">
        <div>
          <span>Autor:</span>
          <span className="info">{details.author}</span>
        </div>

        <div>
          <span>Publicação:</span>
          <span className="info">{formatDate(details.publishedAt)}</span>
        </div>
      </div>
    </Container>
  );
}
