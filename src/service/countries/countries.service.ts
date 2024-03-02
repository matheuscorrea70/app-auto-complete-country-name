import { GetCountriesResponse } from "./countries.types";

let controller: AbortController;

export class CountriesService {
  static async getCountries(name: string) {
    if (!name) {
      return [];
    }

    if (controller) {
      controller.abort();
    }

    /**
     * Using the abort controller to abort the previous request before
     * start another, preventing set the wrong data in the state
     */
    controller = new AbortController();

    const response = await fetch(
      `https://restcountries.com/v3.1/name/${name}`,
      { signal: controller.signal }
    );

    return (await response.json()) as GetCountriesResponse;
  }
}
