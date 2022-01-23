// import logo from './logo.svg';
import './App.css';
// import Button from 'react-bootstrap/Button'
import Contactme from './contactMe/contactMe.js';
import Aboutme from './aboutMe/aboutMe.js';
import Skills from './skills/skills.js';
import Protfolio from './protflio/protfolio.js';
import Footer from './footer/footer.js';
import Formfun from './form/form';
import Movies from './Movies/Movies';
import Navbar from './Navbar/Navbar';
import Search from './Search/search';
import MovieDetails from './MovieDetails/MovieDetails';
import Favourite from './Fav/fav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useContext, useState } from 'react';
import {languageContext, LanguageProvider} from './Contexts/languageContext'



function App() {
  //console.log("hello");
  let [signIn, setSignIn] = useState(true);

  const [lang, setLang] = useState("en");

  return (
    <>
      {/* Day1 */}
      {/* <Contactme/>
      <Aboutme/>
      <Skills/>
      <Protfolio/>
      <Footer/> */}

      {/* Day2 */}
      {/* <Formfun/> */}

      {/* Day3 */}



      <Router>
        <LanguageProvider value={{lang, setLang}}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Movies} />
            <Route path="/form" exact component={Formfun} />
            <Route path="/movieDetails/:id" component={MovieDetails} />
            <Route path="/search" component={Search} />
            <Route path="/fav">
              {signIn ? <Favourite /> : <Formfun />}
            </Route>
          </Switch>
          </LanguageProvider>
      </Router>

    </>
  );
}

export default App;
