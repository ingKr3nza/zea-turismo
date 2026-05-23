import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const asap = localFont({
  src: './fonts/Asap.ttf',
  variable: '--font-asap',
  display: 'swap',
});

const montserrat = localFont({
  src: './fonts/Montserrat.ttf',
  variable: '--font-montserrat',
  display: 'swap',
});

const spaceGrotesk = localFont({
  src: './fonts/SpaceGrotesk.ttf',
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zea Turismo - Descubre el Rinconcito Encantado',
  description: 'Explora Zea, un encantador pueblo andino en Mérida, Venezuela. Descubre Pozo Azul, su cultura cafetera y paisajes montañosos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${asap.variable} ${montserrat.variable} ${spaceGrotesk.variable}`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}