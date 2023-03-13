import "../src/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createWrapper } from 'next-redux-wrapper';
import Head from "next/head";
import Script from "next/script";
// import store from '../src/stores/index'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Provider store={store}> */}
      <Component {...pageProps} />
      {/* </Provider> */}
    </>
  );
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore, { debug: false });
export default MyApp;
