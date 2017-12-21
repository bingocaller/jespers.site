import { JespersMug } from './svg-icons';

const Intro = () => (
  <header className="intro">
    <div className="intro__items">
      <JespersMug className="intro__icon" />
      <div className="intro__headlines">
        <h1 className="intro__headline">Hi there!</h1>
        <h2 className="intro__sub-headline">Welcome to my site</h2>
      </div>
    </div>
  </header>
);

export default Intro;
