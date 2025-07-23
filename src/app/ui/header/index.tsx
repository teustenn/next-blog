import { RomanNumeralConverter } from '@/services/roman-numeral-converter';
import { Uncial_Antiqua } from 'next/font/google';
import Link from 'next/link';
import { Container } from './styles';

const uncialAntiqua = Uncial_Antiqua({
  weight: '400',
  subsets: ['latin'],
});

export default function Header() {
  return (
    <main className={uncialAntiqua.className}>
      <Container>
        <Link href="/">{RomanNumeralConverter.getAge()}</Link>
      </Container>
    </main>
  );
}
