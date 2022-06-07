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
  const SPEED_CHANGER = 0.02;
  const pages =
    width / (SPEED_CHANGER * 50 * 120) < 9
      ? width / (SPEED_CHANGER * 50 * 120)
      : 9;

  console.log('======>>>> pages', pages);

  const imagesSources = [
    '/images/mta-long-page_19.svg',
    '/images/mta-long-page_18.svg',
    '/images/mta-long-page_17.svg',
    '/images/mta-long-page_16.svg',
    '/images/mta-long-page_15.svg',
    '/images/mta-long-page_14.svg',
    '/images/mta-long-page_13.svg',
    '/images/mta-long-page_12.svg',
    '/images/mta-long-page_11.svg',
    '/images/mta-long-page_10.svg',
    '/images/mta-long-page_9.svg',
    '/images/mta-long-page_8.svg',
    '/images/mta-long-page_7.svg',
    '/images/mta-long-page_6.svg',
    '/images/mta-long-page_5.svg',
    '/images/mta-long-page_4.svg',
    '/images/mta-long-page_3.svg',
    '/images/mta-long-page_2.svg',
    '/images/mta-long-page_1.svg',
  ];
  return (
    <Parallax pages={pages} style={{ top: '0', left: '0' }}>
      {imagesSources?.map((img, index) => (
        <ParallaxLayer key={index} offset={0} speed={index * SPEED_CHANGER}>
          <img src={img} alt="" />
          <div className="context-form-bottom" />
        </ParallaxLayer>
      ))}

      <ParallaxLayer offset={0} speed={0.73} className="flex justify-end p-8">
        <Link to="/" className="underline text-[#ffffff]">
          Home
        </Link>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxPage;
