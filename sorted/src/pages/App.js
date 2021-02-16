import '../styles/App.css';
import Home from './Home'
import { withRouter } from 'react-router-dom'
import Layout from '../pages/Layout'

function App() {
  return (
  <Layout>
    <Home></Home>
  </Layout>
  );
}

export default withRouter(App);
