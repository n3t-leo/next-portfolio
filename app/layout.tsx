import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Leo Black™",
  description: "Remade from Webflow export using Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/webflow.css" />
        <link rel="stylesheet" href="/css/leo-black-66b9b6.webflow.css" />
      </head>
      <body className="body">
        <Header />
        {children}
        <Footer />
        <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6894596fba8f48b222841017" crossOrigin="anonymous" />
        <script src="/js/webflow.js" />
      </body>
    </html>
  );
}
