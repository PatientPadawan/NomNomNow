import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import Notification from "@/app/_components/notification";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "./authContext";
import { Suspense } from "react";
import LoadingSkeleton from "./_components/loadingSkeleton";

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
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`font-sans ${inter.variable}`}
      >
        <TRPCReactProvider>
          <AuthContext>
            <Notification />
            <Navbar />
            <Suspense fallback={<LoadingSkeleton />}>{children}</Suspense>
            <Footer />
            <ToastContainer position="bottom-right" autoClose={3000} />
          </AuthContext>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
