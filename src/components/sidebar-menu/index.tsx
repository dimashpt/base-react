'use client';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export type Menu = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  path?: string;
  submenu?: Omit<Menu, 'icon' | 'description'>[];
};

type MenuProps = {
  menu: Menu[];
};

const SidebarMenu: React.FC<MenuProps> = ({ menu }: MenuProps) => {
  return (
    <ul className="flex flex-col gap-1 px-3">
      {menu.map((item) => (
        <SidebarMenuItem key={item.path} item={item} />
      ))}
    </ul>
  );
};

type MenuItemProps = {
  item: Menu;
};

const SidebarMenuItem: React.FC<MenuItemProps> = ({ item }: MenuItemProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <li
      className={`menu-item ${
        window.location.pathname === item.path ? 'menu-active' : ''
      }`}
    >
      <Link
        to={item.submenu ? {} : { pathname: item.path }}
        onClick={() => {
          if (item.submenu) setExpanded((prev) => !prev);
        }}
        className="flex flex-1 basis-auto flex-row items-center gap-3 px-3 py-1"
      >
        {item.icon}
        <div className="flex-1">
          <span className="text-sm">{item.title}</span>
          <p className="whitespace-nowrap text-xs text-[#94a3b8]">
            {item.description}
          </p>
        </div>
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            className={expanded ? 'rotate-90' : ''}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m9 6 6 6-6 6"
            />
          </svg>
        )}
      </Link>
      {item.submenu && (
        <ul
          className={`mt-1 flex min-h-0 flex-col gap-1 ${
            expanded
              ? `h-[${item.submenu.length * 48}px]`
              : 'h-0 overflow-hidden'
          }`}
        >
          {item.submenu.map((subitem) => (
            <li
              key={subitem.path}
              className={`menu-item${
                window.location.pathname === subitem.path ? ' menu-active' : ''
              }`}
            >
              <Link
                to={{ pathname: subitem.path }}
                className="flex flex-1 basis-auto flex-row items-center gap-2 px-3 py-1"
              >
                <div className="flex-auto">
                  <span className="ml-8 text-sm">{subitem.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarMenu;
