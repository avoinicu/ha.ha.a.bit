import dayjs from 'dayjs';

import { Tooltip, TooltipContent, TooltipTrigger } from '~ui/tooltip';
import { cn, getCurrentYear, getDateFromDateNumber } from '~utils';

const Day = ({ day, color = 'zinc' }: { day: number; color?: string }) => {
  const date = getDateFromDateNumber(day);
  const formattedDate = date.format('dddd ll');
  const currentYear = getCurrentYear();

  const isEnabled = date.isAfter(dayjs(`${currentYear - 1}-12-31`)) && date.isBefore(dayjs());

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            'w-full rounded-sm aspect-square',
            ...(isEnabled
              ? ['cursor-pointer', `bg-${color}-200`, `dark:bg-${color}-800`]
              : [`bg-${color}-100`, `dark:bg-${color}-900`])
          )}
        />
      </TooltipTrigger>
      <TooltipContent>{formattedDate}</TooltipContent>
    </Tooltip>
  );
};

Day.displayName = 'Day';
export { Day };
