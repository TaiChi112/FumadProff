import '@/app/global.css';
import 'katex/dist/katex.min.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import 'katex/dist/katex.css'

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          // dir="rtl"
          search={{
            hotKey: [
              {
                display: 'k',
                key: 'k',
              }
            ],
            enabled: true,
          }}
        >{children}</RootProvider>
      </body>
    </html>
  );
}
