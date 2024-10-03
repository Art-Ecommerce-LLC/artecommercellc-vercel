import './globals.css';  // Add your global styles here
import { Inter } from 'next/font/google';
import {NextUIProvider} from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] });
 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
    <html lang="en">
      <body className={`${inter.className} dark text-foreground bg-background`}>
      <NextUIProvider>
        <main>
          {children}
        </main>
        </NextUIProvider>
      </body>
    </html>
   
  );
}
