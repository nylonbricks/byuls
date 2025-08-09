import { getTranslations } from 'next-intl/server';
import { Background } from './_components/background';
import { ByulsAudio } from './_components/byuls-audio';
import { Card } from './_components/card';
import { Hero } from './_components/hero';
import { PageLayout } from './_components/page-layout';

const Page = async () => {
  const t = await getTranslations('home');

  return (
    <PageLayout>
      <div className="mx-auto flex w-full max-w-[764px] flex-col px-4 pt-20 pb-4">
        <Background />

        <Hero />

        <Card>
          <div>
            <h2 className="font-medium text-base text-neutral-900">Today</h2>
            <p className="mt-2 whitespace-pre-wrap text-base text-neutral-600/80 leading-relaxed">
              {t.rich('today', { audio: () => <ByulsAudio /> })}
            </p>
          </div>

          <div>
            <h2 className="font-medium text-base text-neutral-900">Installation</h2>
            <p className="mt-1 text-base text-neutral-600/80 leading-relaxed">TODO</p>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Page;
