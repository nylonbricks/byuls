import type { Metadata } from 'next';
import type { PropsWithChildren, ReactNode } from 'react';
import { Layout } from '~/components/layout';
import { site } from '~/constants';
import { Pretendard } from './_fonts';
import '~/styles/globals.css';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { routing } from '~/i18n/routing';

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

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

const RootLayout = async ({ children, params }: Props) => {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="en">
      <body className={Pretendard.className}>
        <div
          className="translate-z-0 pointer-events-none fixed top-0 left-0 z-overlay h-16 w-full select-none opacity-95 backdrop-blur-[6px] [mask-image:linear-gradient(to_bottom,var(--color-black)_25%,transparent)] md:h-24"
          aria-hidden={true}
        />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
