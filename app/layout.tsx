"use` client";
import '@/app/ui/global.css';
import { inter } from '../app/ui/fonts/fonts'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
      <body className={`${inter.className} antialiased`}>{children}</body>
      </AppRouterCacheProvider>
    </html>
  );
}
