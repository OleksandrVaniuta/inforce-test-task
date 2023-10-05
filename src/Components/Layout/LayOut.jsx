import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header } from './LayOut.styled';

export const Layout = () => {
  return (
    <div>
      <Header>
        <h1>Inforce test task</h1>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
