import { Card } from './_components/card';
import { Hero } from './_components/hero';

const Page = () => {
  return (
    <div className="mx-auto flex w-full max-w-[764px] flex-col py-16">
      <Hero />

      <Card>
        <div>
          <h2 className="font-medium text-base text-neutral-900">Today</h2>
          <p className="mt-1 text-base text-neutral-500 leading-relaxed">Hello</p>
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
