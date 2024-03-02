import { useAutoComplete } from "./useAutoComplete";
import { AutoCompleteProps } from "./autoComplete.types";
import ListContainer from "./listContainer";

import "./autoComplete.css";

const AutoComplete = ({ fetchData, ...props }: AutoCompleteProps) => {
  const { selected, handleChange, isError, isFetching, data, setSelected } =
    useAutoComplete({
      fetchData,
      value: props.value ? String(props.value) : "",
    });

  return (
    <div className="auto-complete">
      <input
        {...props}
        value={selected.name}
        type="search"
        className="auto-complete__input"
        onChange={handleChange}
      />
      <ListContainer
        isError={isError}
        isFetching={isFetching}
        selected={selected}
        data={data}
        setSelected={setSelected}
      />
    </div>
  );
};

export default AutoComplete;
