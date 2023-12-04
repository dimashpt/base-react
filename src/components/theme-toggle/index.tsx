'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';

type Props = {
  buttonClassName?: string;
};

const ThemeToggleComponent: React.FC<Props> = ({ buttonClassName }: Props) => {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button
          isIconOnly
          variant="light"
          className={buttonClassName}
          title="Theme Button"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Theme toggle">
        <DropdownItem key="light" onClick={() => {}}>
          Light
        </DropdownItem>
        <DropdownItem key="dark" onClick={() => {}}>
          Dark
        </DropdownItem>
        <DropdownItem key="system" onClick={() => {}}>
          System
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ThemeToggleComponent;
