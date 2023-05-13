import { SfIconOpenInNew, SfIconViewList, SfIconVisibilityOff } from '@storefront-ui/react';
import Link from 'next/link';
import { ScrollableHideScrollbar } from './Scrollable';

export const LeftDrawer = ({ methodRoutes }: any) => {
  return (
    <div
      className="fixed bottom-0 left-0 w-full h-52 z-10 bg-neutral-900 md:w-72 md:h-screen md:relative text-neutral-900 flex flex-col items-center mr-0 border py-2 md:py-8 px-2 md:px-4"
    >
      {/* Mobile view */}
      <div className='flex w-full md:w-72 md:justify-center md:items-end border-b border-primary-600 justify-start items-start p-2 md:p-4 gap-1'>
        <SfIconViewList className="text-primary-600 w-8 fill-current" />
        <h3 className="typography-headline-3 text-gray-200">
          Methods
        </h3>
      </div>
      <div className={`${!methodRoutes.length ? 'hidden' : 'md:hidden'} overflow-auto w-full pl-4 pr-8 pt-8`}>
        <ScrollableHideScrollbar >
          {methodRoutes.length && (
            methodRoutes.map((route: any) => (
              <Link href={route.path} key={route.name}>
                {route.name}
              </Link>

            ))
          )}
        </ScrollableHideScrollbar>
      </div>
      {/* No routes available */}
      {!methodRoutes.length && (
        <div className="text-gray-500 mt-4 items-center flex md:flex-col gap-2">
          <SfIconVisibilityOff className='md:w-24' />
          No methods available
        </div>
      )}

      {/* Large screen */} 
      <div className='hidden md:flex flex-col border-t mt-2 border-primary-600'>
        {methodRoutes.length ? (
            methodRoutes.map((route: any) => (
              <Link href={route.path} key={route.name} className='text-white flex gap-2 border-b w-72 justify-center p-4'>
                {route.name} <SfIconOpenInNew className='text-primary-600 fill-current' />
              </Link>
            ))
          ) : null}
      </div>
    </div>
  );
};
