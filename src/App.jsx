import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/team">
            <TeamPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
