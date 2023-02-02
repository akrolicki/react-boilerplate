import { ReactNode } from 'react';

import Sidebar from './Sidebar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex h-screen flex-row">
      <Sidebar />
      <div className="relative w-full flex-grow overflow-x-hidden bg-gray-100">{children}</div>
    </div>
  );
};

export default Layout;
