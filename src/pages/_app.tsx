import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '@/utils/lib/i18next';
import { useMediaQuery } from '@mui/material';
import React, { useMemo } from 'react';
import { useMainStore } from '@/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: 2000,
    },
  },
});

const App: React.FC = () => {
  const systemMode = useMediaQuery('(prefers-color-scheme: dark)');
  const { theme } = useMainStore();

  const mode = useMemo(() => {
    return createTheme({
      palette: {
        mode: theme === 'system' ? (systemMode ? 'dark' : 'light') : theme,
      },
    });
  }, [systemMode, theme]);

  return (
    <ThemeProvider theme={mode}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Outlet />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
