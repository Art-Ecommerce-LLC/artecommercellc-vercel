import './globals.css';  // Add your global styles here
import { Inter } from 'next/font/google';
import {NextUIProvider} from "@nextui-org/react";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
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
