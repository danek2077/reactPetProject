import React from "react";

const MyInput = ({ ...props }) => {
  return <input className="block mb-3 w-20" type="text" {...props} />;
};

export default MyInput;
