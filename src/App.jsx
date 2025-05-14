import Nav from "./components/nav/Nav";
import About from "./components/about/About";

import Portfolio from "./components/portfolio/Portfolio";

import NewHeader from "./components/newheader/NewHeader";
import Cta from "./components/CTA/cta";

const App = () => {
  return (
    <>
      <NewHeader />
      <Nav />
      <About />
      <Portfolio />
      <Cta />
    </>
  );
};

export default App;
