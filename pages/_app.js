import { useEffect } from "react";
// import "@/styles/404.css";
import "@/styles/globals.css";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.querySelector("body").classList.add("font-tessan");
  });
  if (Component.getLayout) {
    const getLayout = Component.getLayout || ((page) => page);

    return getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}

export default MyApp;
