import { Dispatch, InputHTMLAttributes } from "react";

export type DataItem = { id: string; name: string };

export type SelectedItem = { id?: string; name: string };

export type SetSelected = Dispatch<React.SetStateAction<SelectedItem>>;

export type AutoCompleteProps = {
  fetchData: (text: string) => Promise<DataItem[]>;
} & InputHTMLAttributes<HTMLInputElement>;

export type ListDataProps = {
  data: DataItem[];
  selected: SelectedItem;
  setSelected: SetSelected;
};

export type ListContainerProps = {
  isFetching: boolean;
  isError: boolean;
  data: DataItem[];
  selected: SelectedItem;
  setSelected: SetSelected;
};

export type UseAutoCompleteProps = {
  value: string;
  fetchData: (text: string) => Promise<DataItem[]>;
};
