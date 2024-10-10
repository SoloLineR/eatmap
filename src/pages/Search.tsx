import Card_list from "@/components/Card_list";
import SearchBar from "@/components/SearchBar";

export default function Search() {
  return (
    <div className="container mx-auto outline-dashed">
      <SearchBar />
      <Card_list />
    </div>
  );
}
