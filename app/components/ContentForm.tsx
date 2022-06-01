import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const ParallaxPage = () => {
  return (
    <Parallax pages={2} style={{ top: '0', left: '0' }}>
      <ParallaxLayer offset={0} speed={0}>
        <img src="/images/mta-long-page_19.svg" alt="" className="w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.1}>
        <img src="/images/mta-long-page_18.svg" alt="" className="w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.2}>
        <img src="/images/mta-long-page_17.svg" alt="" className="w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <img src="/images/mta-long-page_16.svg" alt="" className="w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <img src="/images/mta-long-page_15.svg" alt="" className="w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <img src="/images/mta-long-page_14.svg" alt="" className="w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.6}>
        <img src="/images/mta-long-page_13.svg" alt="" className="w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.7}>
        <img src="/images/mta-long-page_12.svg" alt="" className="w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.8}>
        <img src="/images/mta-long-page_11.svg" alt="" className="w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.9}>
        <img src="/images/mta-long-page_10.svg" alt="" className="w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1}>
        <img src="/images/mta-long-page_9.svg" alt="" className="w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.1}>
        <img src="/images/mta-long-page_8.svg" alt="" className="w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.2}>
        <img src="/images/mta-long-page_7.svg" alt="" className="w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.3}>
        <img src="/images/mta-long-page_6.svg" alt="" className="w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.4}>
        <img src="/images/mta-long-page_5.svg" alt="" className="w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.5}>
        <img src="/images/mta-long-page_4.svg" alt="" className="w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.6}>
        <img src="/images/mta-long-page_3.svg" alt="" className="w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.7}>
        <img src="/images/mta-long-page_2.svg" alt="" className="w-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.8}>
        <img src="/images/mta-long-page_1.svg" alt="" />
        <div className="bottom" style={{ height: '200vh' }} />
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxPage;
