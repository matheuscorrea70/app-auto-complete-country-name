import "./App.css";
import AutoComplete from "./components/autoComplete";
import { CountriesService } from "./service/countries";

function App() {
  const handleFetchData = async (name: string) => {
    const countries = await CountriesService.getCountries(name);

    return countries.map((item) => ({
      id: item.cca2,
      name: item.name.common,
    }));
  };

  return (
    <AutoComplete
      fetchData={handleFetchData}
      placeholder="Type a country name"
    />
  );
}

export default App;
