import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../components/Footer";
import ProtectedRoute from "../components/ProtectedRoute";
import "../styles/globals.css";
import { Fragment } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) {
  console.log(pageProps)
  return (
    <Fragment>
      <Head>
        <title>Pro shelter</title>
      </Head>
      <ProtectedRoute router={router}>
        <Component {...pageProps} />
      </ProtectedRoute>
      <Footer />
    </Fragment>
  );
}
