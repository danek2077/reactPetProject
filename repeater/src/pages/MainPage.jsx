import React from "react";
import FuncTodo from "../components/FuncTodo";
import ButtonsRequests from "../components/ButtonsRequests";
import RfcSearch from "../components/RfcSearch";
import FuncSortOption from "../components/FuncSortOption";
import Form from "../components/Form";
import useFetchData from "../MCE/requestData";
import { useMainAppHooks } from "../MCE/TwoMainHooks";
import StatusLogin from "../components/Status";
function MainPage() {
  const { list, setList, search, setSearch } = useMainAppHooks();
  const { error, isLoading, setPagNumber } = useFetchData(setList);
  return (
    <div>
      <Form list={list} setList={setList} />
      <div className="flex">
        <FuncSortOption list={list} setList={setList} />
        <StatusLogin />
      </div>
      <RfcSearch list={list} setSearch={setSearch} />
      {isLoading && <h1>Идет загрузка...</h1>}
      {error ? (
        <div>{error.message}</div>
      ) : (
        <FuncTodo
          list={search.length > 0 ? search : list}
          setList={setList}
          isLoading={isLoading}
        />
      )}
      <ButtonsRequests setPagNumber={setPagNumber} setList={setList} />
    </div>
  );
}

export default MainPage;
