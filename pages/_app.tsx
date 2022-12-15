import type { AppProps } from "next/app";
import Layout from "../components/common/Layout";
import Head from "next/head";
import Seo from "../components/common/Seo";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { GlobalStyle } from "@/styles/globalStyle";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "../public/static/fonts/style.css";
import Nprogress from "nprogress";
import "../nprogress.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

const theme: DefaultTheme = {
  mainColor: "#0055b8",
  subColor: "#0a4297",
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    Nprogress.configure({ showSpinner: false });

    const handleRouteStart = (url: string) => {
      Nprogress.start();
    };
    const handleRouteChange = (url: string) => {
      Nprogress.done(false);
    };
    router.events.on("routeChangeStart", handleRouteStart);

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <ThemeProvider theme={theme}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || ""}>
        <GlobalStyle />
        <Layout>
          <Seo title="Fall-Vacation" keywords={["농사", "농장", "취미농사"]} descrption="이 앱은 취미농사를 찾는 사람들을 위한 앱입니다" />
          <Component {...pageProps} />
        </Layout>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
