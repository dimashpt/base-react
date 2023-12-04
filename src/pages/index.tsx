import { Header, Sidebar } from '@/components';
import React, { useState } from 'react';

const PortalLayout: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  return (
    <div className="flex min-w-0 flex-auto">
      <Sidebar show={showSidebar} />
      <div className="relative z-10 flex min-h-full min-w-0 flex-auto flex-col">
        <Header toggleSidebar={() => setShowSidebar(!showSidebar)} />
        <main id="content">Hello</main>
      </div>
    </div>
  );
};

export default PortalLayout;
