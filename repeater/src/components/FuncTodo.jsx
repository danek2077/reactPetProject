import React from "react";
import TodoList from "./TodoList";

const FuncTodo = React.memo(({ list, setList, isLoading }) => {
  return (
    <div className="mb-5">
      {!isLoading ? (
        list.length !== 0 ? (
          list.map(function (_, ind) {
            if (ind % 2 === 0) {
              return (
                <TodoList
                  setList={setList}
                  key={list[ind].id}
                  elem1={list[ind]}
                  elem2={list[ind + 1]}
                />
              );
            }
            return undefined;
          })
        ) : (
          <h1>ПУСТЕНЬКО</h1>
        )
      ) : (
        ""
      )}
    </div>
  );
});

export default FuncTodo;
