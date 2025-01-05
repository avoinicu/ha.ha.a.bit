import dayjs from 'dayjs';
import { useAtom, useAtomValue } from 'jotai';

import { commitsAtom } from '~/atoms/commits.atom';
import { settingsAtom } from '~/atoms/settings.atom';
import { Tooltip, TooltipContent, TooltipTrigger } from '~ui/tooltip';
import { START_OF_WEEK, cn, getCurrentYear, getDateFromDateNumber } from '~utils';

const Day = ({ day, habitId, color = 'zinc' }: { day: number; habitId: string; color?: string }) => {
  const [commits, setCommits] = useAtom(commitsAtom);
  const startOfWeek = useAtomValue(settingsAtom).startOfWeek;

  const date = getDateFromDateNumber(day + START_OF_WEEK[startOfWeek]);
  const readableDate = date.format('ddd ll');
  const commitDate = date.format('YYYY-MM-DD');
  const currentYear = getCurrentYear();

  const habitCommits = commits[commitDate]?.filter((c) => c === habitId) || [];

  const isEnabled = date.isAfter(dayjs(`${currentYear - 1}-12-31`)) && date.isBefore(dayjs());

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          disabled={!isEnabled}
          className={cn(
            'w-full rounded-sm aspect-square',
            ...(isEnabled
              ? [
                  `bg-${color}-${habitCommits.length ? '600' : '300'}`,
                  `dark:bg-${color}-${habitCommits.length ? '500' : '800'}`,
                ]
              : [`bg-${color}-100`, `dark:bg-${color}-950`])
          )}
          onClick={() => {
            if (isEnabled) {
              setCommits((prev) => ({
                ...prev,
                [commitDate]: [...(prev[commitDate] || []), habitId],
              }));
            }
          }}
          onContextMenu={(e) => {
            if (isEnabled) {
              e.preventDefault();
              setCommits((prev) => ({
                ...prev,
                [commitDate]: (prev[commitDate] || []).filter((c) => c !== habitId),
              }));
            }
          }}
        />
      </TooltipTrigger>
      <TooltipContent className="text-sm">
        <div className="text-xs">{readableDate}</div>
        {!!habitCommits.length && (
          <>
            <div className="mb-2 font-bold">
              Completed {habitCommits.length} {`time${habitCommits.length === 1 ? '' : 's'}`}
            </div>
            <div className="text-xs text-slate-500">Right-click to clear</div>
          </>
        )}
      </TooltipContent>
    </Tooltip>
  );
};

Day.displayName = 'Day';
export { Day };
