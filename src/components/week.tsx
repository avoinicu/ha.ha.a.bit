import { Day } from '~/components/day';

const Week = ({ week, habitId, color }: { week: number; habitId: string; color?: string }) => {
  return (
    <div className="grid grid-cols-1 gap-1 grid-rows-7">
      {[...Array(7)].map((_, i) => (
        <Day
          key={i}
          day={week * 7 + i}
          habitId={habitId}
          color={color}
        />
      ))}
    </div>
  );
};

Week.displayName = 'Week';
export { Week };
