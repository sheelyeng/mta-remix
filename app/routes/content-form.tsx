import ContentForm from '~/components/ContentForm';
import type { LinksFunction } from '@remix-run/node';

import parallax from '~/styles/parallax.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: parallax }];
};

export default function Index() {
  return <ContentForm />;
}
