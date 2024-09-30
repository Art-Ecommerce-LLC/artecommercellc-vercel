import './globals.css';  // Add your global styles here
import Navbar from './components/Navbar'; // Import the Navbar
import Footer from './components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.className} flex flex-col bg-white`}>
        <nav>
          <Navbar />
        </nav>
        <main className="bg-white">
          {children}
        </main>
        <footer className="bg-white">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
