import Footer from './footer';
import Home from '../routes/home';
// import Home from 'async!./home';

const App = () => (
  <div id="app" className="app">
    <Home path="/" />
    <Footer />
  </div>
);

export default App;
