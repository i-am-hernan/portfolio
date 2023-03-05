import { createTheme } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { Layout } from "../components/Layout";
import { store } from "../store";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KP3XH6J"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  );
};

export default App;
