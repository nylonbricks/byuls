import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { Pretendard } from '~/app/_fonts';
import { Layout } from '~/components/layout';
import { site } from '~/constants';
import '~/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.title,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: site.title }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: ['/og-image.png'],
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={Pretendard.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
