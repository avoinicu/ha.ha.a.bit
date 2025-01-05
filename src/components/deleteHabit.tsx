import { DialogDescription } from '@radix-ui/react-dialog';
import { useSetAtom } from 'jotai';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';

import { habitsAtom } from '~/atoms/habits.atom';
import { Button } from '~ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '~ui/dialog';

const DeleteHabit = ({ habitId }: { habitId: string }) => {
  const [open, setOpen] = useState(false);
  const setHabits = useSetAtom(habitsAtom);

  const deleteHabit = () => {
    setHabits((prev) => prev.filter((habit) => habit.id !== habitId));
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button
          className="text-inherit hover:text-inherit"
          variant="outline"
          size="icon"
        >
          <Trash2 className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete habit</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <p>Are you sure you want to delete this habit?</p>
        </DialogDescription>
        <DialogFooter>
          <Button
            onClick={() => setOpen(false)}
            variant="secondary"
          >
            Cancel
          </Button>
          <Button onClick={deleteHabit}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

DeleteHabit.displayName = 'DeleteHabit';
export { DeleteHabit };
