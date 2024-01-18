import Head from "next/head";
import React from "react";
import Footer from "./footer";
import Header from "./header";
interface MyProp {
  children?: React.ReactNode;
}
export default function Wrapper({ children }: MyProp) {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Blog | supaCheer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Programing, coding, and reviewing blog "
        />
        <meta name="keywords" content="Programing, Coding, Reviewing" />
        <meta name="author" content="Suppachai Thanrukprasert" />
      </Head>
      <div className="flex flex-grow flex-col items-center">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}
