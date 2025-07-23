import { Children } from '@/app/layout';
import { Container } from './styles';

export default function MainContainer({ children }: Children) {
  return <Container>{children}</Container>;
}
