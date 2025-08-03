import type { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
  return <div className="flex h-full w-full flex-col bg-white">{children}</div>;
};
