import React from "react";
export function useSortList(list, setList) {
  let [count, setCount] = React.useState(0);
  const handleChange = (e) => {
    if (e.target.value === "numeration") {
      setCount(0);
      let rez = [...list].sort((a, b) => a.id - b.id);
      setList(rez);
    }
    if (e.target.value === "name") {
      setCount(1);
      let rez = [...list].sort((a, b) => a.title.localeCompare(b.title));
      setList(rez);
    }
    if (e.target.value === "discription") {
      setCount(2);
      let rez = [...list].sort((a, b) => a.body.localeCompare(b.body));
      setList(rez);
    }
  };
  return { handleChange, count };
}
