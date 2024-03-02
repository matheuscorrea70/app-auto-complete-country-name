import { ListDataProps } from "../../autoComplete.types";

import './listData.css'

const ListData = ({ data, selected, setSelected }: ListDataProps) => {
  /**
   * Using this regex to match the text not considering uppercase and lowercase
   */
  const regex = new RegExp(selected.name, "i");

  return (
    <div className="list-data">
      {data.map(({ name, id }) => {
        let html = name;
        const match = name.match(regex);

        if (match) {
          /**
           * Using the original text in match[0] to replace properly the uppercase
           * and lowercase characters
           */
          html = name.replace(match[0], `<b>${match[0]}</b>`);
        }

        /**
         * Using the dangerouslySetInnerHTML assuming that the backend returns a
         * safe string, if it's not returned it'll need to sanitize the string before
         */
        return (
          <div className="list-data__item">
            <button
              onClick={() => setSelected({ id, name })}
              className="list-data__button"
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
