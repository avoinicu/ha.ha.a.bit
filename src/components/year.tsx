import { Week } from '~/components/week';

const Year = ({ habitId, color }: { habitId: string; color?: string }) => {
  return (
    <div className="grid gap-1 grid-cols-53">
      {[...Array(53)].map((_, i) => (
        <Week
          key={i}
          week={i}
          habitId={habitId}
          color={color}
        />
      ))}
    </div>
  );
};

Year.displayName = 'Year';
export { Year };
