import { START_OF_WEEK, THEMES } from '~/lib/utils';

export type THabit = {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
};

export type TCommits = Record<string, string[]>;

export type TSettings = {
  startOfWeek: keyof typeof START_OF_WEEK;
  theme: typeof THEMES[number];
};
