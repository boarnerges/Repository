import Nav from "./componenets/nav/Nav";
import About from "./componenets/about/About";

import Portfolio from "./componenets/portfolio/Portfolio";

import NewHeader from "./componenets/newheader/NewHeader";
import Cta from "./componenets/CTA/cta";

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
