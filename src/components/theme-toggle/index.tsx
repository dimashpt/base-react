import React, { useState } from 'react';
import { useMainStore } from '@/store';
import { IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { MainState } from '@/store/main';

const ThemeToggleComponent: React.FC = () => {
  const { theme, setTheme } = useMainStore();
  const systemMode = useMediaQuery('(prefers-color-scheme: dark)');
  const appliedTheme =
    theme === 'system' ? (systemMode ? 'dark' : 'light') : theme;
  const [themeAnchor, setThemeAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(themeAnchor);

  function updateTheme(theme: MainState['theme']): void {
    setTheme(theme);
    setThemeAnchor(null);
  }

  return (
    <>
      <IconButton
        id="theme-button"
        onClick={(e) => setThemeAnchor(e.currentTarget)}
      >
        {appliedTheme === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
      <Menu
        id="theme-menu"
        anchorEl={themeAnchor}
        open={open}
        onClose={() => setThemeAnchor(null)}
      >
        <MenuItem
          selected={theme === 'light'}
          onClick={() => updateTheme('light')}
        >
          Light
        </MenuItem>
        <MenuItem
          selected={theme === 'dark'}
          onClick={() => updateTheme('dark')}
        >
          Dark
        </MenuItem>
        <MenuItem
          selected={theme === 'system'}
          onClick={() => updateTheme('system')}
        >
          System
        </MenuItem>
      </Menu>
    </>
  );
};

export default ThemeToggleComponent;
