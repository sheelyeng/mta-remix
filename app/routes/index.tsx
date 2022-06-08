import ParallaxPage from '~/components/Parallax';
import type { LinksFunction } from '@remix-run/node';

import parallax from '~/styles/parallax.css';
import { useState } from 'react';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: parallax }];
};

export default function Index() {
  const [loaded, setLoaded] = useState(false);
  return <ParallaxPage loaded={loaded} setLoaded={setLoaded} />;
}
