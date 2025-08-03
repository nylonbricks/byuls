import { getTranslations } from 'next-intl/server';
import { ByulsAudio } from './_components/byuls-audio';
import { Card } from './_components/card';
import { Hero } from './_components/hero';

const Page = async () => {
  const t = await getTranslations('HomePage');
  const today = t('today').split('[byuls.audio]');

  return (
    <div className="mx-auto flex w-full max-w-[764px] flex-col px-4 py-16">
      <Hero />

      <Card>
        <div>
          <h2 className="font-medium text-base text-neutral-900">Today</h2>
          <p className="mt-2 whitespace-pre-wrap text-base text-neutral-500 leading-relaxed">
            {today[0]}
            <ByulsAudio />
            {today[1]}
          </p>
        </div>

        <div>
          <h2 className="font-medium text-base text-neutral-900">Installation</h2>
          <p className="mt-1 text-base text-neutral-500 leading-relaxed">Hello</p>
        </div>
      </Card>
    </div>
  );
};

export default Page;
