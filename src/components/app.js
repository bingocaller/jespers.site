import Intro from './intro';
import Footer from './footer';
import Home from '../routes/home';
// import Home from 'async!./home';

const App = () => (
  <div id="app" className="app">
    <Intro />
    <Home path="/" />
    <Footer />
  </div>
);

export default App;
