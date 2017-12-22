import Helmet from 'preact-helmet';
import Intro from './intro';
import Footer from './footer';
import Home from '../routes/home';
// import Home from 'async!./home';

const App = () => (
  <div id="app" className="app">
    <Helmet
      link={[
        { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Overpass+Mono:400,700|Spectral:400,700' },
      ]}
    />
    <Intro />
    <Home path="/" />
    <Footer />
  </div>
);

export default App;
