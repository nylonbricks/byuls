import { Fragment } from 'react';
import { getDiscussions } from '~/api/discussions';

const Page = async () => {
  const data = await getDiscussions();
  return (
    <Fragment>
      {data.map(discussion => {
        return <div key={discussion.id}>{discussion.title}</div>;
      })}
    </Fragment>
  );
};

export default Page;
