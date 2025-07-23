import StyledComponentsRegistry from '@/lib/registry';
import { Geist, Geist_Mono } from 'next/font/google';
import { GlobalStyles } from './styles';
import Footer from './ui/footer';
import Header from './ui/header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export interface Children {
  children: React.ReactNode;
}

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
