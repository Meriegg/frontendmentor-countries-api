import { Search } from "react-ionicons";

interface Props {
  setNameFilter: Function;
  nameFilter: string;
}

const SearchBar = ({ setNameFilter, nameFilter }: Props) => {
  return (
    <div
      className="shadow-sm flex items-center gap-4 px-4 rounded-md bg-light-mode-element dark:bg-dark-mode-element"
      style={{ width: "min(480px, 100%)" }}
    >
      <Search
        cssClasses="!fill-light-mode-text dark:!fill-dark-mode-text"
        height="25px"
        width="25px"
      />

      <input
        type="text"
        className="transition-none bg-transparent border-none py-5 focus:outline-none w-full h-full font-light placeholder:dark:text-dark-mode-text font-light place text-light-mode-text dark:text-dark-mode-text"
        placeholder="Search for a country..."
        onChange={(e) => setNameFilter(e.target.value)}
        value={nameFilter}
      />
    </div>
  );
};

export default SearchBar;
