import React from "react";
export const useFilterHook = (list, setSearch) => {
  const [inputsearch, setInputsearch] = React.useState("");
  React.useEffect(() => {
    const filteredList = list.filter((value) =>
      value.title.toLowerCase().includes(inputsearch.toLowerCase())
    );
    return setSearch(filteredList);
  }, [inputsearch, setSearch,list]);
  return { inputsearch, setInputsearch,list };
};
