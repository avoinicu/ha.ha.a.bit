import { useAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { Edit } from 'lucide-react';
import { useState } from 'react';

import { habitFormAtom } from '~/atoms/habitForm.atom';
import { habitsAtom } from '~/atoms/habits.atom';
import { Button } from '~ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '~ui/dialog';

import { HabitForm } from '~/components/habitForm';

const EditHabit = ({ habitId }: { habitId: string }) => {
  const [habits, saveHabit] = useAtom(habitsAtom);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useAtom(habitFormAtom);

  const handleOpenEdit = (open: boolean) => {
    if (!open) {
      setOpen(false);
      setFormData(RESET);
    } else {
      const habitToEdit = habits.find((habit) => habit.id === habitId);
      setFormData(habitToEdit!);
      setOpen(true);
    }
  };

  const handleEditHabit = () => {
    saveHabit((prev) => {
      const index = prev.findIndex((habit) => habit.id === habitId);
      prev[index] = formData;
      return [...prev];
    });
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={handleOpenEdit}
    >
      <DialogTrigger asChild>
        <Button
          className="text-inherit hover:text-inherit"
          variant="outline"
          size="icon"
        >
          <Edit className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Edit habit</DialogTitle>
        </DialogHeader>
        <HabitForm />
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            disabled={!formData.name}
            onClick={handleEditHabit}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

EditHabit.displayName = 'EditHabit';
export { EditHabit };
