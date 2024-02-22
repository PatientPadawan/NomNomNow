import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import Notification from "@/app/_components/notification";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { getServerAuthSession } from "@/server/auth";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "QwikBite",
  description: "A food delivery app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serverSession = await getServerAuthSession();

  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <Notification />
          <Navbar />
          {children}
          <Footer />
          <ToastContainer position="bottom-right" theme="colored" autoClose={3000}/>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
