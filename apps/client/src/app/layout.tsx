"use client";

import "./globals.css";
import Sidebar from "./component/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-row">
          <div className="fixed">
            <Sidebar />
          </div>

          <div className="bg-[#EFF5FF] w-full min-h-[100vh] flex items-center justify-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
