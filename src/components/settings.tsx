import { useAtom } from 'jotai';
import { Settings2Icon } from 'lucide-react';
import { useState } from 'react';

import { settingsAtom } from '~/atoms/settings.atom';
import { Label } from '~/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { START_OF_WEEK, THEMES } from '~/lib/utils';
import { TSettings } from '~/types';
import { Button } from '~ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '~ui/dialog';

const Settings = () => {
  const [settings, saveSettings] = useAtom(settingsAtom);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<TSettings>(settings);

  const handleOpenSettings = (open: boolean) => {
    if (!open) {
      setOpen(false);
      setFormData(settings);
    } else {
      setOpen(true);
    }
  };

  const handleSaveSettings = () => {
    saveSettings(formData);
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={handleOpenSettings}
    >
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
        >
          <Settings2Icon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Edit settings</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-8 py-8">
          <div className="flex flex-col gap-2">
            <Label htmlFor="theme">Theme</Label>
            <Select
              name="theme"
              onValueChange={(theme: TSettings['theme']) => setFormData((prev) => ({ ...prev, theme }))}
              value={formData.theme}
            >
              <SelectTrigger className="capitalize dark:text-muted-foreground">
                <SelectValue placeholder="Select a theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {THEMES.map((theme) => (
                    <SelectItem
                      key={theme}
                      value={theme}
                      className="mb-2 text-center capitalize"
                    >
                      {theme}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="startOfWeek">Start of the week</Label>
            <Select
              name="startOfWeek"
              onValueChange={(startOfWeek: TSettings['startOfWeek']) =>
                setFormData((prev) => ({ ...prev, startOfWeek }))
              }
              value={formData.startOfWeek}
            >
              <SelectTrigger className="dark:text-muted-foreground">
                <SelectValue placeholder="Select a color" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {Object.keys(START_OF_WEEK).map((day) => (
                    <SelectItem
                      key={day}
                      value={day}
                      className="mb-2 text-center"
                    >
                      {day}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={handleSaveSettings}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

Settings.displayName = 'Settings';
export { Settings };
