import { atomWithStorage } from 'jotai/utils';

import { TCommits } from '~/types';

export const commitsAtom = atomWithStorage<TCommits>('commits', {});
