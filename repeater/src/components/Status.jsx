import React, { useContext } from "react";
import { Context } from "../App";
import { Link } from "react-router-dom";
const StatusLogin = () => {
  const [setLogStatus] = useContext(Context);
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    setUser(JSON.parse(userInfo));
  }, []);
  const clearStorage = () => {
    localStorage.clear();
    setLogStatus(false);
  };
  return (
    <div className="ml-40">
      {user ? (
        <div>
          <div>Твое имя: {user.name}</div>
          <div>Возраст: {user.age}</div>
          <Link onClick={clearStorage} href={"http://localhost:3000/lists"}>
            Выйти
          </Link>
        </div>
      ) : (
        <h1>Загрузка...</h1>
      )}
    </div>
  );
};

export default StatusLogin;
