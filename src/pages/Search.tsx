import Card_list from "@/components/Card_list";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

export default function Search() {
  const [sortType, setSortType] = useState<string>("");
  const [SortTypeVibe, setSortTypeVibe] = useState<string>("");
  return (
    <div className="container mx-auto  ">
      <SearchBar setSortType={setSortType} setSortTypeVibe={setSortTypeVibe} />
      <Card_list sortType={sortType} SortTypeVibe={SortTypeVibe} />
    </div>
  );
}
