import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const ParallaxPage = () => {
  return (
    <Parallax
      pages={1.3}
      style={{ top: '0', left: '0' }}
      className="parallax-banner"
    >
      <ParallaxLayer offset={0} speed={0.3} className="parallax">
        <img
          src="/images/mta-landing-hero-01.png"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.4} className="parallax">
        <img
          src="/images/mta-landing-hero-02.png"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5} className="parallax">
        <img
          src="/images/mta-landing-hero-03.png"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.6} className="parallax">
        <img
          src="/images/mta-landing-hero-04.png"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.7} className="parallax">
        <img
          src="/images/mta-landing-hero-05.png"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.8} className="parallax">
        <img
          src="/images/mta-landing-hero-06.png"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.9} className="parallax">
        <img
          src="/images/mta-landing-hero-07.png"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={1} className="parallax">
        <img
          src="/images/mta-landing-hero-08.png"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.1} className="parallax">
        <img
          src="/images/mta-landing-hero-09.png"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.2} className="parallax">
        <img
          src="/images/mta-landing-hero-10.png"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.3} className="parallax">
        <img
          src="/images/mta-landing-hero-11.png"
          alt=""
          className="parallax-img"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.4} className="parallax">
        <img
          src="/images/mta-landing-hero-12.png"
          alt=""
          className="parallax-img"
        />
        <div className="bottom" />
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxPage;
