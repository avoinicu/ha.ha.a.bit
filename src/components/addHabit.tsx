import '@radix-ui/react-select';
import { useAtom, useSetAtom } from 'jotai';
import { Plus } from 'lucide-react';
import { useState } from 'react';

import { habitFormAtom } from '~/atoms/habitForm.atom';
import { habitsAtom } from '~/atoms/habits.atom';
import { EMPTY_HABIT } from '~/lib/constants';
import { Button } from '~ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '~ui/dialog';

import { HabitForm } from './habitForm';

const AddHabit = () => {
  const addHabit = useSetAtom(habitsAtom);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useAtom(habitFormAtom);

  const handleAddHabit = () => {
    addHabit((prev) => [
      ...prev,
      ...[
        {
          ...formData,
          id: crypto.randomUUID(),
        },
      ],
    ]);
    setOpen(false);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setOpen(false);
      setFormData(EMPTY_HABIT);
    } else {
      setOpen(true);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={handleOpenChange}
    >
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
        >
          <Plus className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new habit</DialogTitle>
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
            onClick={handleAddHabit}
          >
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

AddHabit.displayName = 'AddHabit';
export { AddHabit };
