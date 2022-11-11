import axios from "axios";
import Link from "next/link";
import Button from "../../Components/UI/Button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Country } from "../../types";
import type { NextPage } from "next";

const Country: NextPage = () => {
  const [error, setError] = useState(false);
  const [country, setCountry] = useState<Country | null>(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://restcountries.com/v3.1/name/${router.query.name}`
        );

        setCountry(data[0]);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

  const parseCurrencies = (currencies: Country["currencies"]) => {
    let finalCurrencies: { name: string; symbol: string }[] = [];

    const keys: string[] = Object.keys(currencies);
    keys.forEach((key) => {
      finalCurrencies.push({
        name: currencies[key].name,
        symbol: currencies[key].symbol,
      });
    });

    return finalCurrencies;
  };

  const parseLanguages = (languages: Country["languages"]) => {
    let finalLanguages: string[] = [];

    const keys = Object.keys(languages);
    keys.forEach((key) => {
      finalLanguages.push(languages[key]);
    });

    return finalLanguages;
  };

  const parseNativeNames = (nativeName: Country["name"]["nativeName"]) => {
    let finalNames: string[] = [];

    const keys = Object.keys(nativeName);
    keys.forEach((key) => {
      finalNames.push(nativeName[key].official);
    });

    return finalNames;
  };

  if (error) {
    return (
      <div className="w-full text-center">
        <p className="text-light-mode-text dark:text-dark-mode-text text-lg font-semibold">
          Oops, an error happened {":("}
        </p>
      </div>
    );
  }

  if (!country) {
    return (
      <div className="w-full text-center">
        <p className="text-light-mode-text dark:text-dark-mode-text text-lg font-semibold">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="px-20 lg:px-6 mt-12">
      <Link href="/">
        <Button>Back</Button>
      </Link>
      <div className="mt-12 grid grid-cols-2 lg:flex lg:flex-col gap-28">
        <img
          src={country.flags.svg}
          alt="flag"
          style={{ width: "max(530px, 100%)" }}
        />
        <div className="flex-grow flex flex-col justify-around gap-6">
          <h1 className="text-3xl font-bold">{country.name.common}</h1>

          <div className="flex flex-wrap justify-between gap-12">
            <div className="flex flex-col gap-3">
              <p>
                <span className="font-semibold">Native Name:</span>{" "}
                {parseNativeNames(country.name.nativeName).join(", ")}
              </p>
              <p>
                <span className="font-semibold">Population:</span>{" "}
                {country.population}
              </p>
              <p>
                <span className="font-semibold">Region:</span> {country.region}
              </p>
              <p>
                <span className="font-semibold">Sub Region:</span>{" "}
                {country.subregion}
              </p>
              <p>
                <span className="font-semibold">Capital:</span>{" "}
                {country.capital}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p>
                <span className="font-semibold">Top Level Domain:</span>{" "}
                {country.tld}
              </p>
              <p>
                <span className="font-semibold">Currencies:</span>{" "}
                {parseCurrencies(country.currencies).map(
                  (currency) => `${currency.name}(${currency.symbol})`
                )}
              </p>
              <p>
                <span className="font-semibold">Languages:</span>{" "}
                {parseLanguages(country.languages).join(", ")}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <p className="font-semibold">Border Countries:</p>
            <div className="flex flex-wrap gap-4 text-light-mode-text dark:text-dark-mode-text">
              {country.borders?.length ? (
                <>
                  {country.borders.map((border, borderIdx) => (
                    <div
                      key={borderIdx}
                      className="px-10 rounded-md text-light-mode-text dark:text-dark-mode-text shadow-md text-sm py-2 bg-light-mode-element dark:bg-dark-mode-element"
                    >
                      {border}
                    </div>
                  ))}
                </>
              ) : (
                "No borders found"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
