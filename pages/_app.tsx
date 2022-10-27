import type { AppProps } from "next/app";
import Layout from "../components/common/Layout";
import Head from "next/head";
import Seo from "../components/common/Seo";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { GlobalStyle } from "@/styles/globalStyle";
import "../public/static/fonts/style.css";

const theme: DefaultTheme = {
  mainColor: "#0055b8",
  subColor: "#0a4297",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Seo title="Fall-Vacation" keywords={["농사", "농장", "취미농사"]} descrption="이 앱은 취미농사를 찾는 사람들을 위한 앱입니다" />

        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
