// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Class Craft",
  description: "AI teacher planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // You might want to fetch this data from an API or context
  const userData = {
    name: 'Teacher Name',
    email: 'teacher.school@gmail.com',
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar userName={userData.name} userEmail={userData.email} />
          <main className="flex-1 ml-64 h-screen overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}