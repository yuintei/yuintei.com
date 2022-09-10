import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import { title } from "process";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
