import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/Footer";
import ProtectedRoute from "../components/ProtectedRoute";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) {
  console.log(pageProps);
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
