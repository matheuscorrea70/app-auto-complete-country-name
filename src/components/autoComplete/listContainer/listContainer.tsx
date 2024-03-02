import ListData from "./listData";
import { ListContainerProps } from "../autoComplete.types";

const ListContainer = ({
  isError,
  isFetching,
  data,
  selected,
  setSelected,
}: ListContainerProps) => {
  if (isFetching) {
    return <div className="auto-complete__loader">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="auto-complete__error">
        Oops! There was an error while fetching the countries!
      </div>
    );
  }

  return <ListData data={data} selected={selected} setSelected={setSelected} />;
};

export default ListContainer;
