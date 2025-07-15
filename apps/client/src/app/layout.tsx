"use client";

import "./globals.css";
import Sidebar from "./component/sidebar";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from '@apollo/client';


const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BACKEND_URL,
  // uri: "http://10.150.149.229:8080/graphql",
  cache: new InMemoryCache(),
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Provider client={client}>
        <div className="flex flex-row">
          <div className="fixed">
            <Sidebar />
          </div>

          <div className="bg-[#EFF5FF] w-full min-h-[100vh] flex items-center justify-center">
            {children}
          </div>
        </div>
        </Provider>
      </body>
    </html>
  );
}
