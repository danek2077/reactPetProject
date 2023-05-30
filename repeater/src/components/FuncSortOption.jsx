import React from "react";
import { useSortList } from "../MCE/funcs";

const FuncSortOption = ({ list, setList }) => {
  let { count, handleChange } = useSortList(list, setList);
  return (
    <select
      defaultValue={"numeration"}
      className="block mt-5"
      onChange={(e) => handleChange(e)}
    >
      <option value="numeration" disabled={count === 0}>
        По нумерации
      </option>
      <option value="name" disabled={count === 1}>
        По названию
      </option>
      <option value="discription" disabled={count === 2}>
        По описанию
      </option>
    </select>
  );
};

export default React.memo(FuncSortOption);
