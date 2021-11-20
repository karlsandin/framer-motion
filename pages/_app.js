import "normalize.css";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Header from "components/Header/Header";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Header />

      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
