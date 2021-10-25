import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, About, ContactUs, Projects } from './pages/index'
import { Navbar, Footer } from './components'
import GlobalStyles from './GlobalStyles/GlobalStyle'


function App() {
  return (
    <>
      <Router>
        <GlobalStyles/>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route exact path='/about' component={ About }/>
          <Route exact path='/projects' component={ Projects }/>
          <Route exact path='/contactUs' component={ ContactUs }/>
        </Switch>
        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
