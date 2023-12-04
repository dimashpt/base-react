'use client';

import './header.scss';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from '@nextui-org/react';
import { ThemeToggle } from '@/components';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useMainStore } from '@/store';

type HeaderProps = {
  toggleSidebar: () => void;
};

const HeaderComponent: React.FC<HeaderProps> = ({
  toggleSidebar,
}: HeaderProps) => {
  const { user } = useMainStore();

  return (
    <header className="header">
      <Button
        isIconOnly
        variant="light"
        title="Sidebar Toggle"
        onClick={toggleSidebar}
      >
        <HamburgerMenuIcon />
      </Button>
      <div className="flex gap-2">
        <ThemeToggle />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <User
              as="button"
              avatarProps={{ src: '' }}
              className="transition-transform"
              description={user?.email ?? ''}
              name={user?.name ?? ''}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem
              color="danger"
              className="text-danger"
              onClick={() => {}}
            >
              Sign out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  );
};

export default HeaderComponent;
