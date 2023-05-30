import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";
const Login = () => {
  const [setLogStatus] = useContext(Context);
  let [nameInput, setNameInput] = React.useState("");
  let [ageInput, setAgeInput] = React.useState("");

  const localSet = () => {
    const forset = {
      name: nameInput,
      age: ageInput,
    };
    localStorage.setItem("userInfo", JSON.stringify(forset));
    setLogStatus(true);
  };
  return (
    <div>
      <input
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        className="block mt-5"
        type="text"
        placeholder="name"
      />
      <input
        value={ageInput}
        onChange={(e) => setAgeInput(e.target.value)}
        className="block mt-5 mb-5"
        type="text"
        placeholder="age"
      />
      {nameInput && ageInput ? (
        <Link onClick={localSet} to="/lists">
          Войти
        </Link>
      ) : (
        <h1>Введите что-то в оба поля</h1>
      )}
    </div>
  );
};

export default Login;
