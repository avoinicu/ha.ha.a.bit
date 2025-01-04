import { atom } from 'jotai';

import { EMPTY_HABIT } from '~/lib/constants';
import type { THabit } from '~/types';

export const habitFormAtom = atom<THabit>(EMPTY_HABIT);
