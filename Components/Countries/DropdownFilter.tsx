import { ChevronDownCircle } from "react-ionicons";
import { useState } from "react";

interface Props {
  value: string;
  values: string[];
  setValue: Function;
}

const Dropdown = ({ value, values, setValue }: Props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="h-[61px] px-6 gap-12 flex justify-between items-center rounded-md font-semibold text-light-mode-text bg-light-mode-element dark:bg-dark-mode-element dark:text-dark-mode-text shadow-sm"
        onClick={() => setOpen(!isOpen)}
      >
        {value === "None" || !value ? "Filter by Region" : value}
        <ChevronDownCircle
          cssClasses="!fill-light-mode-text dark:!fill-dark-mode-text"
          height="20px"
          width="20px"
        />
      </button>
      <div
        className={`transform ${
          isOpen
            ? "translate-y-0 opacity-1 z-10"
            : "-translate-y-2 opacity-0 -z-10"
        } top-20 absolute flex flex-col gap-2 items-start bg-light-mode-element dark:bg-dark-mode-element w-full px-4 py-4 rounded-md shadow-md`}
      >
        {values.map((value, valueIdx) => (
          <button
            className="text-light-mode-text dark:text-dark-mode-text"
            key={valueIdx}
            onClick={() => {
              setOpen(!isOpen);
              setValue(value);
            }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
