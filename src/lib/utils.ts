import { type ClassValue, clsx } from 'clsx';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { twMerge } from 'tailwind-merge';

dayjs.extend(localizedFormat);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCurrentYear = () => {
  return dayjs().year();
};

export const getDateFromDateNumber = (dayNumber: number, year?: number) => {
  if (!year) {
    year = getCurrentYear();
  }
  const firstDay = dayjs(`${year}-01-01`).day();

  return dayjs(`${year}-01-01`).add(dayNumber - firstDay, 'day');
};

export const COLORS = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const;
