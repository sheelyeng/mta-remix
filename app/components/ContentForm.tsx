import { useEffect, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Link } from '@remix-run/react';

const ParallaxPage = () => {
  const [width, setWidth] = useState<number | null>(null);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  if (!width) {
    return null;
  }
  const pages = width / 200 < 6 ? width / 200 : 6;
  return (
    <Parallax pages={pages} style={{ top: '0', left: '0' }}>
      <ParallaxLayer offset={0} speed={0}>
        <img src="/images/mta-long-page_19.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <img src="/images/mta-long-page_18.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <img src="/images/mta-long-page_17.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.6}>
        <img src="/images/mta-long-page_16.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <img src="/images/mta-long-page_15.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.66}>
        <img src="/images/mta-long-page_14.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.69}>
        <img src="/images/mta-long-page_13.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.72}>
        <img src="/images/mta-long-page_12.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.75}>
        <img src="/images/mta-long-page_11.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.78}>
        <img src="/images/mta-long-page_10.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.81}>
        <img src="/images/mta-long-page_9.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.84}>
        <img src="/images/mta-long-page_8.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.87}>
        <img src="/images/mta-long-page_7.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.9}>
        <img src="/images/mta-long-page_6.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.93}>
        <img src="/images/mta-long-page_5.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.96}>
        <img src="/images/mta-long-page_4.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.99}>
        <img src="/images/mta-long-page_35.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.02}>
        <img src="/images/mta-long-page_2.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.05}>
        <img src="/images/mta-long-page_1.svg" alt="" />
        <div className="context-form-bottom" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.06} className="flex justify-end p-8">
        <Link to="/" className="underline text-[#ffffff]">
          Home
        </Link>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxPage;
