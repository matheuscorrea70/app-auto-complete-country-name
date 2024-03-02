import { ListDataProps } from "../../autoComplete.types";

const ListData = ({ data, selected, setSelected }: ListDataProps) => {
  /**
   * Using this regex to match the text not considering uppercase and lowercase
   */
  const regex = new RegExp(selected.name, "i");

  return (
    <div className="auto-complete__data">
      {data.map(({ name, id }) => {
        let html = name;
        const match = name.match(regex);

        if (match) {
          /**
           * Using the original text in match[0] to replace properly the uppercase
           * and lowercase characters
           */
          html = name.replace(match[0], `<strong>${match[0]}</strong>`);
        }

        /**
         * Using the dangerouslySetInnerHTML assuming that the backend returns a
         * safe string, if it's not returned it'll need to sanitize the string before
         */
        return (
          <div>
            <button
              onClick={() => setSelected({ id, name })}
              className="auto-complete__data__item"
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ListData;
