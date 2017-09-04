import { GithubIcon, TwitterIcon, EmailIcon } from './svg-icons';

const Footer = () => (
  <footer className="footer">
    <span className="heart">❤</span>, Jesper
    <div className="container">
      <div className="icons-row">
        <a className="icons-row__icon" title="Link to my Github profile" href="//github.com/bingocaller"><GithubIcon /></a>
        <a className="icons-row__icon" title="Link to my Twitter profile" href="//twitter.com/bingocallr"><TwitterIcon /></a>
        <a className="icons-row__icon" title="Send me an email" href="mailto:jesper.nellemann@gmail.com"><EmailIcon /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
