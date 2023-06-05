import "@/styles/globals.scss";
import { Provider } from "react-redux";
import store from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import cartSlice from "@/store/cartSlice";
import Head from "next/head";
let persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Dune Fast Online Shopping </title>{" "}
        <meta
          name="description"
          content="Dune-online shopping service for all of your need"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />{" "}
        </PersistGate>{" "}
      </Provider>
    </>
  );
}
