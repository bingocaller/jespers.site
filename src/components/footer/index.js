import { GithubIcon, TwitterIcon, EmailIcon } from '../svg-icons';
// eslint-disable-next-line import/no-unresolved, import/extensions
import style from './style';

const Footer = () => (
  <footer className={style.footer}>
    <span className={style.heart}>❤</span>, Jesper
    <div className="container">
      <div className={style['icons-row']}>
        <a className={style.icon} href="//github.com/bingocaller"><GithubIcon /></a>
        <a className={style.icon} href="//twitter.com/bingocallr"><TwitterIcon /></a>
        <a className={style.icon} href="mailto:jesper.nellemann@gmail.com"><EmailIcon /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
