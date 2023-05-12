import { LeftDrawer } from './LeftDrawer';
import { useEffect, useState } from 'react';

export const Layout = ({ children }: any) => {
  const [methodRoutes, setMethodRoutes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3002/api/getMethodList`)
      .then((res) => res.json())
      .then((data) => {
        setMethodRoutes(data.methodRoutes);
      });
  }, []);

  return (
    <div className='flex'> 
      <LeftDrawer methodRoutes={methodRoutes} />
      <main className='mx-auto'>{children}</main>
    </div>
  );
};
