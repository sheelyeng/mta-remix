import ParallaxPage from '~/components/Parallax';
import type { LinksFunction } from '@remix-run/node';

import styles from '~/styles/parallax.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function Index() {
  return <ParallaxPage />;
}
