import { useAtomValue } from 'jotai';
import { useEffect } from 'react';

import { settingsAtom } from '~/atoms/settings.atom';
import { THEMES } from '~/lib/utils';

export const useTheme = () => {
  const theme = useAtomValue(settingsAtom).theme;

  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = () => {
      root.classList.remove('light', 'dark');

      if (theme !== THEMES[0]) {
        root.classList.add(theme);
        return;
      }

      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    };

    applyTheme();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => applyTheme();
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);
};
