import { atomWithStorage, createJSONStorage } from 'jotai/utils';

import { THEMES } from '~/lib/utils';
import { TSettings } from '~/types';

export const settingsAtom = atomWithStorage<TSettings>(
  'settings',
  {
    startOfWeek: 'Monday',
    theme: THEMES[0],
  },
  createJSONStorage(() => localStorage),
  {
    getOnInit: true,
  }
);
