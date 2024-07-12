import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Navbar/Nav";
import { ThemeProvider } from "@/components/theme-provider";
import Providers from "./providers";
import { Session } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  session,
}: Readonly<{
  session: Session | null;
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark  "
      suppressHydrationWarning={true}
    >
      <body className={inter.className}>
        <Providers session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
          >
            <Nav />
            <div>{children}</div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
