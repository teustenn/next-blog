import StyledComponentsRegistry from '@/lib/registry';
import { RomanNumeralConverter } from '@/services/roman-numeral-converter';
import { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { GlobalStyles } from './styles';
import Footer from './ui/footer';
import Header from './ui/header';

export interface PostProps {
  params: Promise<{ slug: string }>;
}

export interface Children {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: RomanNumeralConverter.getAge(),
  description: 'Blog about Naruto!',
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }: Readonly<Children>) {
  return (
    <html lang="en">
      <GlobalStyles />
      <StyledComponentsRegistry>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Header />
          {children}
          <Footer />
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
