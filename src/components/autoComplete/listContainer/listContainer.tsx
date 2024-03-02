import ListData from "./listData";
import { ListContainerProps } from "../autoComplete.types";

import "./listContainer.css";

const ListContainer = ({
  isError,
  isFetching,
  data,
  selected,
  setSelected,
}: ListContainerProps) => {
  if (isFetching) {
    return <div className="list-container">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="list-container">
        Oops! There was an error while fetching the countries!
      </div>
    );
  }

  if (data.length) {
    return (
      <div className="list-container">
        <ListData data={data} selected={selected} setSelected={setSelected} />
      </div>
    );
  }

  return null;
};

export default ListContainer;
