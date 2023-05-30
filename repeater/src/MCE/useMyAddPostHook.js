import React from "react";

export function useMyAddPostHook(list, setList) {
  const [post, setPost] = React.useState({
    title: "",
    body: "",
    checker: true,
  });

  const createPost = (id) => {
    return { ...post, id };
  };

  function handleAddPost() {
    let newPost;
    if (list.length !== 0) {
      const newPostId = list[list.length - 1].id + 1;
      newPost = createPost(newPostId);
    } else {
      newPost = createPost(1);
    }
    setList((prevList) => [...prevList, newPost]);
    setPost({ title: "", body: "" });
  }

  return { post, setPost, handleAddPost };
}
