import { Provider } from "react-redux";
import Layout from "../components/UI/Layout";
import Meta from "../components/UI/Meta";
import Navbar from "../components/UI/Navbar";
import newsStore from "../store/news-store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Provider store={newsStore}>
        <Layout>
          <Meta />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
