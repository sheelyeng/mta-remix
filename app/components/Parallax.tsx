import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

const ParallaxPage = () => {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[
          { image: '/images/mta-landing-hero-01.png', speed: -110 },
          { image: '/images/mta-landing-hero-02.png', speed: -100 },
          { image: '/images/mta-landing-hero-03.png', speed: -90 },
          { image: '/images/mta-landing-hero-04.png', speed: -80 },
          { image: '/images/mta-landing-hero-05.png', speed: -70 },
          { image: '/images/mta-landing-hero-06.png', speed: -60 },
          { image: '/images/mta-landing-hero-07.png', speed: -50 },
          { image: '/images/mta-landing-hero-08.png', speed: -40 },
          { image: '/images/mta-landing-hero-09.png', speed: -30 },
          { image: '/images/mta-landing-hero-10.png', speed: -20 },
          { image: '/images/mta-landing-hero-11.png', speed: -10 },
          { image: '/images/mta-landing-hero-12.png', speed: -5 },
        ]}
        style={{ aspectRatio: '0.9' }}
      />
    </ParallaxProvider>
  );
};

export default ParallaxPage;
