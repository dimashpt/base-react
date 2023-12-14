import React from 'react';
import { ThemeToggle } from '@/components';

const PortalLayout: React.FC = () => {
  return (
    <div className="flex min-w-0 flex-auto">
      <main id="content">Hello</main>
      <ThemeToggle />
    </div>
  );
};

export default PortalLayout;
