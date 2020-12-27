
//Global Style
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
//Import Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
//Router
import { Switch, Route, useLocation } from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';
//Animation
import { AnimatePresence } from "framer-motion"




function App() {
  const location = useLocation()
  console.log(location)
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route>
            <MovieDetail path="/work/:id" />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
