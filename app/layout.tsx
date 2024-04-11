import { GeistSans } from "geist/font/sans";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "This is a word",
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  console.log(children);
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
