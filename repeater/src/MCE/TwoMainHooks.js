import React from "react";
export function useMainAppHooks () {
  const [list, setList] = React.useState([]);
  const [search, setSearch] = React.useState("");
  return { list, setList, search, setSearch };
}
