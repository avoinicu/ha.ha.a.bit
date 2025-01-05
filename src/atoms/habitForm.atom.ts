import { atomWithReset } from 'jotai/utils';

import { EMPTY_HABIT } from '~/lib/constants';
import type { THabit } from '~/types';

export const habitFormAtom = atomWithReset<THabit>(EMPTY_HABIT);
