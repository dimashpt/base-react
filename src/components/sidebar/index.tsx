import './sidebar.scss';
import { Icons } from '@/assets';
import { SidebarMenu } from '@/components';
import type { Menu } from '@/components/sidebar-menu';

type SidebarProps = {
  show: boolean;
};

const menu: Menu[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <Icons.Dashboard />,
  },
  {
    title: 'Project',
    description: 'Some menu description',
    path: '/project',
    submenu: [
      { title: 'Visitor', path: '/projects/visitor' },
      { title: 'Clicks', path: '/projects/clicks' },
    ],
    icon: <Icons.Project />,
  },
  {
    title: 'Analytics',
    path: '/analytics',
    submenu: [
      { title: 'Statistics', path: '/analytics/statistics' },
      { title: 'E-Commerce', path: '/analytics/ecommerce' },
    ],
    icon: <Icons.Analytics />,
  },
];

const SidebarComponent: React.FC<SidebarProps> = ({ show }: SidebarProps) => {
  return (
    <aside
      className={`max-w-72 sticky top-0 z-20 h-screen w-0 shrink-0 flex-col overflow-hidden border-r-1 border-solid light:border-[#00000011] light:text-black dark:border-[#ffffff11] dark:text-white ${
        show ? 'lg:w-72' : ''
      }`}
    >
      <div className="flex h-full flex-auto flex-col overflow-hidden">
        <div
          id="aside-header"
          className="flex h-16 min-w-max shrink-0 flex-row items-center justify-between px-4"
        >
          Acme Corp.
        </div>
        <div
          id="aside-content"
          className="scroll-section flex min-h-0 min-w-max flex-1 flex-col overflow-y-auto overflow-x-hidden overscroll-contain font-medium"
        >
          <SidebarMenu menu={menu} />
        </div>
      </div>
    </aside>
  );
};

export default SidebarComponent;
