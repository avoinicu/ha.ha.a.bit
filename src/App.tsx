import { useAtomValue } from 'jotai';

import { habitsAtom } from '~atoms/habits.atom';
import { AddHabit, Footer, Habit, Settings, Welcome } from '~components/index';
import { useTheme } from '~hooks/useTheme';

import { cn } from './lib/utils';

function App() {
  const habits = useAtomValue(habitsAtom);

  useTheme();

  return (
    <div className="min-h-screen">
      <header
        className={cn('sticky top-0 w-full', {
          'z-10': !!habits.length,
        })}
      >
        <div className="container flex items-center justify-between p-4 mx-auto border-b-[1px] rounded-b-lg bg-background border-zinc-200 dark:border-zinc-800">
          <h1 className="text-3xl font-bold">ha.ha.a.bit</h1>
          <div className="flex gap-2">
            <AddHabit />
            <Settings />
          </div>
        </div>
      </header>
      <main className="container flex flex-col gap-8 px-4 pt-8 pb-20 mx-auto mb-2">
        {habits.length === 0 ? (
          <Welcome />
        ) : (
          habits.map((habit) => (
            <Habit
              key={habit.id}
              {...habit}
            />
          ))
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
