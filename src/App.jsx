import { useEffect } from "react";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";

import Portfolio from "./components/portfolio/Portfolio";

import Cta from "./components/cta/Cta";
import Header from "./components/newheader/Header";

const App = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Cta />
    </>
  );
};

export default App;
