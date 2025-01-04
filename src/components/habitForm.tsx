import { useAtom } from 'jotai';

import { habitFormAtom } from '~/atoms/habitForm.atom';
import { COLORS } from '~/lib/utils';
import { Input } from '~ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '~ui/select';

const HabitForm = () => {
  const [formData, setFormData] = useAtom(habitFormAtom);
  const { name, description, icon, color } = formData;

  const setName = (name: string) => setFormData((prev) => ({ ...prev, name }));
  const setDescription = (description: string) => setFormData((prev) => ({ ...prev, description }));
  const setIcon = (icon: string) => setFormData((prev) => ({ ...prev, icon }));
  const setColor = (color: string) => setFormData((prev) => ({ ...prev, color }));

  return (
    <div className="flex flex-col gap-4">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <div className="flex gap-4">
        <Input
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          placeholder="Icon"
        />
        <Select onValueChange={setColor} value={color}>
          <SelectTrigger className={color ?`bg-${color}-200 text-${color}-900`: 'dark:text-muted-foreground'}>
            <SelectValue placeholder="Select a color" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {COLORS.map((color) => (
                <SelectItem
                  key={color}
                  value={color}
                  className={`mb-2 text-center bg-${color}-200 text-${color}-900`}
                >
                  {color}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

HabitForm.displayName = 'HabitForm';
export { HabitForm };
