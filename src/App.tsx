import { useAtomValue } from 'jotai';

import { habitsAtom } from '~atoms/habits.atom';
import { AddHabit, Habit, Settings } from '~components/index';
import { useTheme } from '~hooks/useTheme';

function App() {
  const habits = useAtomValue(habitsAtom);

  useTheme();

  return (
    <main className="container flex flex-col gap-8 p-4 mx-auto">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">ha.ha.a.bit</h1>
        <div className="flex gap-4">
          <AddHabit />
          <Settings />
        </div>
      </div>

      {habits.map((habit) => (
        <Habit
          key={habit.id}
          {...habit}
        />
      ))}
    </main>
  );
}

export default App;
