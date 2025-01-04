import { Day } from '~/components/day';

const Week = ({ week, color }: { week: number; color?: string }) => {
  return (
    <div className="grid grid-cols-1 gap-1 grid-rows-7">
      {[...Array(7)].map((_, i) => (
        <Day
          key={i}
          day={week * 7 + i}
          color={color}
        />
      ))}
    </div>
  );
};

Week.displayName = 'Week';
export { Week };
