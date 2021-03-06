import { useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Link } from '@remix-run/react';
import { useSpring } from 'react-spring';

import TypingWriter from './TypingWriter';

const ParallaxPage = ({loaded, setLoaded}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [height, setHeight] = useState<number | null>(1000);
  const ref = useRef();

  useEffect(() => {
    if (ref.current || !loaded) {
      ref?.current?.scrollTo(13);
      setIsEnabled(true);
      setLoaded(true);
    }
  }, [ref]);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  const { scroll } = useSpring({
    scroll: height,
    from: { scroll: 0 },
    delay: 1000,
    reverse: true,
    config: { mass: 1, tension: 280, friction: 140 },
  });

  return (
    <Parallax
      enabled={isEnabled}
      pages={1.7}
      style={{ top: '0', left: '0' }}
      className="fade-in parallax-banner"
      ref={ref}
      scrollTop={scroll}
    >
      <ParallaxLayer offset={0} speed={0.3} className="parallax">
        <img
          src="/images/mta-landing-hero-01.svg"
          alt=""
          className="parallax-img"
        />
        <div className="bottom" />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.4} className="parallax">
        <img
          src="/images/mta-landing-hero-02.svg"
          alt=""
          className="parallax-img"
        />
        <div className="bottom" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5} className="parallax">
        <img
          src="/images/mta-landing-hero-03.svg"
          alt=""
          className="parallax-img"
        />
        <div className="bottom" />
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
        <div className="bottom" />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.8} className="parallax">
        <img
          src="/images/mta-landing-hero-06.svg"
          alt=""
          className="parallax-img"
        />
        <div className="bottom" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.9} className="parallax">
        <img
          src="/images/mta-landing-hero-07.svg"
          alt=""
          className="parallax-img"
        />
        <div className="bottom" />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={1} className="parallax">
        <img
          src="/images/mta-landing-hero-08.svg"
          alt=""
          className="parallax-img"
        />
        <div className="bottom" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.1} className="parallax">
        <img
          src="/images/mta-landing-hero-09.svg"
          alt=""
          className="parallax-img"
        />
        <div className="bottom" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.2} className="parallax">
        <img
          src="/images/mta-landing-hero-10.svg"
          alt=""
          className="parallax-img"
        />
        <div className="bottom" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.3} className="parallax">
        <img
          src="/images/mta-landing-hero-11.svg"
          alt=""
          className="parallax-img"
        />
        <div className="bottom" />
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
          <div className="flex justify-between items-start px-8 pt-8">
            <div>
              <img
                src="/images/mta-logo-2022-web.png"
                alt="Mormon Transhumanist Association Logo"
                className="logo"
              />
            </div>
            <Link to="/content-form" className="underline text-[#86198f]">
              Content Form
            </Link>
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
