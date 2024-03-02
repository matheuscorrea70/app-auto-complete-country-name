import { ChangeEvent, useState } from "react";
import {
  DataItem,
  SelectedItem,
  UseAutoCompleteProps,
} from "../autoComplete.types";
import { debounce } from "../../../helpers/debounce";

export const useAutoComplete = ({ value, fetchData }: UseAutoCompleteProps) => {
  const [data, setData] = useState<DataItem[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selected, setSelected] = useState<SelectedItem>({
    id: undefined,
    name: value,
  });

  /**
   * Using the debounce function to prevent call many calls in the API while
   * the user is typing
   */
  const debouncedFetchData = debounce(async (value: string) => {
    try {
      setIsError(false);
      setIsFetching(true);
      const response = await fetchData(value);
      setData(response);
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        setIsError(true);
      }
    } finally {
      setIsFetching(false);
    }
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.value || "";

    setSelected({
      id: undefined,
      name: value,
    });

    debouncedFetchData(value);
  };

  const handleSetSelected = (value: SelectedItem) => {
    if (value.id) {
      setData([]);
    }

    setSelected(value);
  };

  return {
    data,
    isFetching,
    isError,
    selected,
    handleChange,
    setSelected: handleSetSelected,
  };
};
