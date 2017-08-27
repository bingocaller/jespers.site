// eslint-disable-next-line import/no-unresolved, import/extensions
import style from './style';

const Intro = () => (
  <div className={style.intro}>
    <div className="container">
      <h1 className={style.headline}>Hello there</h1>
      <h2 className={style['sub-headline']}><em>Something more</em></h2>
    </div>
  </div>
);

export default Intro;
