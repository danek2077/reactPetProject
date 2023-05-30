import React from "react";
import MyInput from "./UI/MyInput";
import { useFilterHook } from "../MCE/MyFilterHook";

const RfcSearch = ({ setSearch, list }) => {
  const { inputsearch, setInputsearch } = useFilterHook(list, setSearch);
  return (
    <MyInput
      value={inputsearch}
      onChange={(e) => setInputsearch(e.target.value)}
      className="block mt-5 mb-3"
      placeholder="Поиск по title..."
    />
  );
};

export default React.memo(RfcSearch);
