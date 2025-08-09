import { Fragment, type PropsWithChildren } from 'react';

export const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <div
        className="translate-z-0 pointer-events-none fixed top-0 left-0 z-overlay h-16 w-full select-none opacity-95 backdrop-blur-[6px] [mask-image:linear-gradient(to_bottom,var(--color-black)_25%,transparent)] md:h-24"
        aria-hidden={true}
      />
      <div className="flex h-full w-full flex-col bg-white">{children}</div>
    </Fragment>
  );
};
