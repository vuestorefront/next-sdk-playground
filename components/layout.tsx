import { LeftDrawer } from './LeftDrawer';
import { useEffect, useState } from 'react';

export const Layout = ({ children }: any) => {
  const [methodRoutes, setMethodRoutes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/getMethodList`)
      .then((res) => res.json())
      .then((data) => {
        setMethodRoutes(data.methodRoutes);
      });
  }, []);

  return (
    <>
      <LeftDrawer methodRoutes={methodRoutes} />
      <main>{children}</main>
    </>
  );
};
