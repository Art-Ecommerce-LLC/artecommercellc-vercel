import './globals.css';  // Add your global styles here
import { Inter } from 'next/font/google';
import {NextUIProvider} from "@nextui-org/react";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] });
 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
    <html lang="en">
      <body className={`${inter.className} dark text-foreground bg-background`}>
      <NextUIProvider>
        <main>
          {children}
        </main>
          <Toaster />
        </NextUIProvider>
      </body>
    </html>
   
  );
}
