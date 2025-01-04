import { DeleteHabit, EditHabit, Year } from '~components/index';
import { THabit } from '~types/index';

const Habit = ({ name, icon, color, description, id }: THabit) => {
  return (
    <div className="flex flex-col gap-2">
      <div className={`flex items-center justify-between gap-4`}>
        <div>
          <h2 className="m-0 text-xl font-semibold">
            {icon} {name}
          </h2>
          <p className="m-0">{description}</p>
        </div>
        <div className="flex gap-2">
          <EditHabit habitId={id} />
          <DeleteHabit habitId={id} />
        </div>
      </div>
      <Year color={color} />
    </div>
  );
};

Habit.displayName = 'Habit';
export { Habit };
