import Link from 'next/link';

export const LeftDrawer = ({ methodRoutes }: any) => {
  return (
    <div className="w-96 bg-green-900 rounded-md fixed top-0 left-0 h-screen">
      {methodRoutes.length ? (
        methodRoutes.map((route: any) => (
          <Link href={route.path} key={route.name}>
            {route.name}
          </Link>
        ))
      ) : (
      <div className="text-white">No routes</div>
      )}
    </div>
  );
};
