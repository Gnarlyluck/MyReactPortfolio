import '../styles/App.css';
import Home from './Home'
import { withRouter } from 'react-router-dom'
import Layout from '../pages/Layout'
import Work from '../components/Work' 

function App() {
  return (
  <Layout>
    <Home></Home>
    <Work></Work>
  </Layout>
  );
}

export default withRouter(App);
