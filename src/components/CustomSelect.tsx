import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CustomSelect({
  setSortType,
  sortTypeValue,
  sortLabel,
}: {
  setSortType: (value: string) => void;
  sortTypeValue: string[];
  sortLabel: string;
}) {
  return (
    <Select onValueChange={(e) => setSortType(e)}>
      <SelectTrigger className="max-w-[200px] border-my-red bg-my-yellow ">
        <SelectValue
          className="text-black"
          placeholder={`Выбирите ${sortLabel}у`}
        />
      </SelectTrigger>
      <SelectContent className="bg-my-dark-cream">
        <SelectGroup>
          <SelectLabel>{`${sortLabel}`}</SelectLabel>
          {sortTypeValue.map((value) => (
            <SelectItem className="bg-my-dark-cream" key={value} value={value}>
              {value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
