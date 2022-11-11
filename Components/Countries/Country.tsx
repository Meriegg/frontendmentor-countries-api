import Link from "next/link";
import { Country } from "../../types";

interface Props {
  country: Country;
}

const Country = ({ country }: Props) => {
  return (
    <div className="w-72 overflow-hidden rounded-md shadow-md bg-light-mode-element dark:bg-dark-mode-element">
      <Link href={`country/${country.name.common}`}>
        <div
          className="w-full h-40"
          style={{
            backgroundImage: `url(${country.flags.svg})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        ></div>
      </Link>
      <div className="px-7 pt-7 pb-10">
        <p className="text-lg font-extrabold m-0">{country.name.common}</p>
        <div className="mt-4 flex flex-col gap-1">
          <p>
            <span className="font-semibold">Population</span>:{" "}
            {country.population}
          </p>
          <p>
            <span className="font-semibold">Region</span>: {country.region}
          </p>
          <p>
            <span className="font-semibold">Capital</span>: {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
