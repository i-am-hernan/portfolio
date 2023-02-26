import { Provider } from "react-redux";
import { store } from "../store";
import { createTheme, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "../components/theme";
import { Layout } from "../components/Layout";

const theme = createTheme(darkTheme);

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
