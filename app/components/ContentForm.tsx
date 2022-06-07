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
  const pages = width / 150 < 8 ? width / 150 : 8;
  return (
    <Parallax pages={pages} style={{ top: '0', left: '0' }}>
      <ParallaxLayer offset={0} speed={0.54}>
        <img src="/images/mta-long-page_19.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <img src="/images/mta-long-page_18.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.415}>
        <img src="/images/mta-long-page_17.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.43}>
        <img src="/images/mta-long-page_16.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.445}>
        <img src="/images/mta-long-page_15.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.46}>
        <img src="/images/mta-long-page_14.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.475}>
        <img src="/images/mta-long-page_13.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.49}>
        <img src="/images/mta-long-page_12.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.505}>
        <img src="/images/mta-long-page_11.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.52}>
        <img src="/images/mta-long-page_10.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.535}>
        <img src="/images/mta-long-page_9.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.55}>
        <img src="/images/mta-long-page_8.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.565}>
        <img src="/images/mta-long-page_7.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.58}>
        <img src="/images/mta-long-page_6.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.595}>
        <img src="/images/mta-long-page_5.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.61}>
        <img src="/images/mta-long-page_4.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.625}>
        <img src="/images/mta-long-page_35.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.64}>
        <img src="/images/mta-long-page_2.svg" alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.655}>
        <img src="/images/mta-long-page_1.svg" alt="" />
        <div className="context-form-bottom" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.67} className="flex justify-end p-8">
        <Link to="/" className="underline text-[#ffffff]">
          Home
        </Link>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxPage;
