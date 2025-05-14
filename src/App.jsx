import Nav from "./components/nav/Nav";
import About from "./components/about/About";

import Portfolio from "./components/portfolio/Portfolio";

import Cta from "./components/cta/Cta";
import NewHeader from "./components/newheader/newheader";

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
