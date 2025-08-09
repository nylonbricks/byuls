import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { site } from '~/constants';
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
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
