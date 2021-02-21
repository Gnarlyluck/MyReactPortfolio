import '../styles/App.css';
// import { withRouter } from 'react-router-dom'
import { Element } from 'react-scroll'
import Layout from '../components/Layout'
import Work from '../components/Work' 
import AboutMe from '../components/aboutMe'
import Skills from '../components/Skills'
import Header from '../components/Header'
import Promotion from '../components/Promotion'
import Footer from '../components/Footer'


function App() {
  return (
  <Layout>
    <Header></Header>
    {/* <Element name='work' className='workScroll'> */}
    <Work></Work>
    {/* </Element> */}
    <AboutMe></AboutMe>
    <Skills></Skills>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>
  );
}

// export default withRouter(App);
export default App;
