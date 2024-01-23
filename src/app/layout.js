import { Inter } from "next/font/google";
import "./globals.css";
import { MincourseContextProvider } from "@/store/store_context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Min Course",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-full mx-auto bg-white">
        <MincourseContextProvider>{children}</MincourseContextProvider>
      </body>
    </html>
  );
}
