export type Country = {
  cca2: string;
  flag: string;
  name: {
    common: string;
  };
};

export type GetCountriesResponse = Country[];
