import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import TypingWriter from './TypingWriter';

const ParallaxPage = () => {
  return (
    <Parallax
      pages={1.35}
      style={{ top: '0', left: '0' }}
      className="parallax-banner"
    >
      <ParallaxLayer offset={0} speed={0.3} className="parallax">
        <img
          src="/images/mta-landing-hero-01.svg"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.4} className="parallax">
        <img
          src="/images/mta-landing-hero-02.svg"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5} className="parallax">
        <img
          src="/images/mta-landing-hero-03.svg"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.6} className="parallax">
        <img
          src="/images/mta-landing-hero-04.svg"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.7} className="parallax">
        <img
          src="/images/mta-landing-hero-05.svg"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.8} className="parallax">
        <img
          src="/images/mta-landing-hero-06.svg"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.9} className="parallax">
        <img
          src="/images/mta-landing-hero-07.svg"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={1} className="parallax">
        <img
          src="/images/mta-landing-hero-08.svg"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.1} className="parallax">
        <img
          src="/images/mta-landing-hero-09.svg"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.2} className="parallax">
        <img
          src="/images/mta-landing-hero-10.svg"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.3} className="parallax">
        <img
          src="/images/mta-landing-hero-11.svg"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.4} className="parallax">
        <img
          src="/images/mta-landing-hero-12.svg"
          alt=""
          className="parallax-img"
        />
        <div className="bottom" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.5} className="parallax">
        <div>
          <div className="logo-banner">
            <img
              src="/images/mta-logo-2022-web.png"
              alt="Mormon Transhumanist Association Logo"
              className="logo"
            />
          </div>
          <div className="typing-text">
            <TypingWriter />
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxPage;
