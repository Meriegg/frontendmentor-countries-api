import axios from "axios";
import CountryComponent from "./Country";
import SearchBar from "./SearchBar";
import Button from "../UI/Button";
import Dropdown from "./DropdownFilter";
import { Country } from "../../types";
import { useEffect, useState } from "react";

const Countries = () => {
  const [isLoading, setLoading] = useState(false);
  const [renderCount, setRenderCount] = useState(25);
  const [countries, setCountries] = useState<Country[]>([]);
  const [finalCountries, setFinalCountries] = useState<Country[]>([]);
  const [dropdownVal, setDropdownVal] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  const dropdownContinents = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "None",
  ];

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data } = await axios.get("https://restcountries.com/v3.1/all");

      setCountries(data);
      setFinalCountries(data);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    let tempFinalCountries = countries;
    tempFinalCountries = !nameFilter
      ? countries
      : countries.filter((country) =>
          country.name.common.toLowerCase().includes(nameFilter.toLowerCase())
        );

    if (dropdownVal === "None" || !dropdownVal) {
      setFinalCountries(tempFinalCountries);
      return;
    }
    tempFinalCountries = tempFinalCountries.filter(
      (country) => country.region === dropdownVal
    );

    setFinalCountries(() => tempFinalCountries);
  }, [nameFilter, dropdownVal]);

  if (isLoading) {
    return (
      <div className="w-full text-center">
        <p className="text-base text-light-mode-text dark:text-dark-mode-text">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12 px-20 lg:px-4">
      <div className="flex justify-between flex-wrap gap-20">
        <SearchBar setNameFilter={setNameFilter} nameFilter={nameFilter} />
        <Dropdown
          setValue={setDropdownVal}
          value={dropdownVal}
          values={dropdownContinents}
        />
      </div>
      <div className="flex flex-wrap justify-between gap-12 mt-12">
        {finalCountries.length ? (
          <>
            {finalCountries.slice(0, renderCount).map((country, countryIdx) => (
              <CountryComponent country={country} key={countryIdx} />
            ))}
          </>
        ) : (
          <div className="w-full text-center">
            <p className="text-base text-light-mode-text dark:text-dark-mode-text">
              No countries found {":("}
            </p>
          </div>
        )}
      </div>
      <div className="flex justify-center py-6">
        {renderCount < finalCountries.length ? (
          <Button onClick={() => setRenderCount((prevCount) => prevCount + 25)}>
            Load More!
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default Countries;
