import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

const ParallaxPage = () => {
  return (
    <ParallaxProvider>
      <div className="parallax-banner">
        <ParallaxBanner
          className="parallax-banner-class"
          layers={[
            { image: '/images/mta-landing-hero-01.png', speed: -60 },
            { image: '/images/mta-landing-hero-02.png', speed: -55 },
            { image: '/images/mta-landing-hero-03.png', speed: -50 },
            { image: '/images/mta-landing-hero-04.png', speed: -45 },
            { image: '/images/mta-landing-hero-05.png', speed: -40 },
            { image: '/images/mta-landing-hero-06.png', speed: -35 },
            { image: '/images/mta-landing-hero-07.png', speed: -30 },
            { image: '/images/mta-landing-hero-08.png', speed: -25 },
            { image: '/images/mta-landing-hero-09.png', speed: -20 },
            { image: '/images/mta-landing-hero-10.png', speed: -15 },
            { image: '/images/mta-landing-hero-11.png', speed: -10 },
            { image: '/images/mta-landing-hero-12.png', speed: -5 },
          ]}
        />
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxPage;
