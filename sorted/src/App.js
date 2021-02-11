import './App.css';
import Router from './components/Router'
import Home from './pages/Home'
import { withRouter } from 'react-router-dom'
import Nav from './components/Nav'
function App() {
  return (<div>

    <Nav />
    {/* <Home /> */}

  </div>
    // <Router />
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Rebas Website
    //     </p>
       
    //   </header>
    // </div>
  );
}

export default withRouter(App);
