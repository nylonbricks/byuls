import { notFound } from 'next/navigation';
import { Fragment } from 'react';
import { getDiscussions } from '~/api/discussions';

type Props = {
  searchParams: Promise<{ repoId: string; categoryId: string }>;
};

const Page = async ({ searchParams }: Props) => {
  const { repoId, categoryId } = await searchParams;
  if (!repoId || !categoryId) {
    return notFound();
  }

  const data = await getDiscussions(repoId, categoryId);

  return (
    <Fragment>
      {data.map(discussion => {
        return <div key={discussion.id}>{discussion.title}</div>;
      })}
    </Fragment>
  );
};

export default Page;
