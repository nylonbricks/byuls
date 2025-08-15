import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { twMerge } from 'tailwind-merge';
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
    <main className="flex flex-col gap-4">
      {data.map(discussion => {
        return (
          <div className="rounded-md border border-neutral-100 px-4 py-2" key={discussion.id}>
            <h2 className="font-bold text-lg">{discussion.title}</h2>
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => <h1 className="font-bold text-3xl" {...props} />,
                h2: ({ node, ...props }) => <h2 className="font-semibold text-2xl" {...props} />,
                h3: ({ node, ...props }) => <h3 className="font-semibold text-xl" {...props} />,
                h4: ({ node, ...props }) => <h4 className="font-medium text-lg" {...props} />,
                p: ({ node, ...props }) => <p className="" {...props} />,
              }}
            >
              {discussion.body}
            </Markdown>
          </div>
        );
      })}
    </main>
  );
};

export default Page;
