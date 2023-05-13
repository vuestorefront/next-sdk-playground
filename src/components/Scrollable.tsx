import { SfIconOpenInNew, SfScrollable } from '@storefront-ui/react';

export const ScrollableHideScrollbar = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
  return (
    <SfScrollable className="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {Array.isArray(children) && children.length ? children.map((child: React.ReactNode, i: number) => (
        <div
          key={i}
          className="flex items-center justify-center text-gray-300 border border-neutral-400 h-20 px-4 shrink-0 gap-2"
        >
          {child}
          <SfIconOpenInNew className='text-primary-600 fill-current' />
        </div>
      )) : (
        <div
          className="flex items-center justify-center text-gray-300 border w-36 h-36 shrink-0 border-neutral-400"
        >
          {children}
          <SfIconOpenInNew className='text-primary-600 fill-current' />
        </div>
      )}
    </SfScrollable>
  );
}