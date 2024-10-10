import { CustomSelect } from "./CustomSelect";
const moods = [
  "любая",
  "уютная",
  "романтическая",
  "веселая",
  "неформальная",
  "спокойная",
  "экзотическая",
  "гостеприимная",
  "традиционная",
  "сладкая",
  "тихая",
  "дружелюбная",
  "разнообразная",
  "семейная",
  "классическая",
  "освежающая",
];
const sortTypeNumbers = [
  "дистанции",
  "свободным местам",
  "рейтингу",
  "популярности",
];
export default function SearchBar({
  setSortType,
  setSortTypeVibe,
}: {
  setSortType: (value: string) => void;
  setSortTypeVibe: (value: string) => void;
}) {
  return (
    <div className="flex flex-col  gap-4 p-3 md:flex-row  ">
      <CustomSelect
        sortLabel={"Атмосфер"}
        sortTypeValue={moods}
        setSortType={setSortTypeVibe}
      />
      <CustomSelect
        sortLabel={"Сотировка по:"}
        sortTypeValue={sortTypeNumbers}
        setSortType={setSortType}
      />
    </div>
  );
}
