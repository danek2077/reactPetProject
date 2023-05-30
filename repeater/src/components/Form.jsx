import React from "react";
import MyInput from "./UI/MyInput";
import MyButton from "./UI/MyButton";
import { useMyAddPostHook } from "../MCE/useMyAddPostHook";

const Form = ({ list, setList }) => {
  const { post, setPost, handleAddPost } = useMyAddPostHook(list, setList); 
  return (
    <div>
      <MyInput
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        value={post.name}
        placeholder="title"
      />
      <MyInput
        placeholder="body"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        value={post.disc}
      />
      <MyButton onClick={handleAddPost} children="добавить" />
    </div>
  );
};

export default Form;
