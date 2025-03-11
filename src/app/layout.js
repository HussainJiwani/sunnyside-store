import "@fontsource/montserrat"; // Import Montserrat
import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'Sunnyside Country Store',
  description: 'Your neighborhood convenience store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Load Montserrat from Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="font-sans">{children}</body> {/* Default to Montserrat */}
    </html>
  );
}
