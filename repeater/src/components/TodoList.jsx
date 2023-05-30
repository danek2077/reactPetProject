import React from "react";
import TodoElemItem from "./TodoElemItem";
const TodoList = ({ elem1, elem2, setList }) => {
  function deletePost(btnid) {
    setList((prev) => prev.filter((value) => value.id !== btnid));
  }
  return (
    <div className="border-2 border-green-700 flex">
      {elem1 && <TodoElemItem elem={elem1} deletePost={deletePost} />}
      {elem2 && <TodoElemItem elem={elem2} deletePost={deletePost} />}
    </div>
  );
};

export default TodoList;
