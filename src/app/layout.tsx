import Navbar from '@/ui/Navbar'
import '@/app/globals.css'
import Providers from './providers';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
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
