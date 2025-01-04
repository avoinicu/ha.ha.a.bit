import { atomWithStorage, createJSONStorage } from 'jotai/utils';

import type { THabit } from '~/types';

export const habitsAtom = atomWithStorage(
  'habits',
  [] as THabit[],
  createJSONStorage(() => localStorage),
  {
    getOnInit: true,
  }
);
