import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import DetailTodo from "./components/DetailTodo";
export const Context = React.createContext();

function App() {
  const [logStatus, setLogStatus] = React.useState(Boolean(localStorage.getItem("userInfo")))
  return (
    <Context.Provider value={[setLogStatus]}>
      {!logStatus && (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to={"/login"} replace />} />
          <Route path="*" element={<Navigate to={"/login"} />} />
        </Routes>
      )}
      {logStatus && (
        <Routes>
          <Route path="/" element={<Navigate to={"/lists"} replace />} />
          <Route path="/lists" element={<MainPage />} />
          <Route path="/lists/:numid" element={<DetailTodo />} />
          <Route path="*" element={<Navigate to={"/lists"} />} />
        </Routes>
      )}
    </Context.Provider>
  );
}

export default App;
