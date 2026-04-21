import Navbar from '@/ui/Navbar'
import '@/app/globals.css'
import Providers from './providers';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={cn("font-sans", geist.variable)}>
      <body className='bg-mauve-950'>
        <Navbar />
        <main>
          <Providers>
            {children}
          </Providers>
          </main>
      </body>
    </html>
  );
}
