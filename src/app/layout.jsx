import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tehlink",
  description: "Kami adalah dapat membantu pembuatan build app dan design UI profesional yang berpengalaman di bidangnya. ",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" className="bg-white" lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
