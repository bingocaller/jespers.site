const md = require('markdown-it')({
  html: true,
  typographer: true,
}).use(require('markdown-it-classy'));

const content = require('../data/text.md');

const Home = () => (
  <div className="content">
    <div className="container" dangerouslySetInnerHTML={{ __html: md.render(content) }} />
  </div>
);

export default Home;
