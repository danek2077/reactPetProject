import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
// без обработки ошибки
const DetailTodo = () => {

  const { numid } = useParams();
  const [data, setData] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const axiosRequestDetail = React.useCallback(async () => {
    setLoading(true);
    let rez = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      params: {
        id: numid,
      },
    });
    setData(rez.data[0]);
    setLoading(false);
  }, [numid]);
  React.useEffect(() => {
    axiosRequestDetail();
  }, [axiosRequestDetail]);
  return (
    <div>
      <h1>Full information:</h1>
      {loading ? (
        <h1>Идет загрузка...</h1>
      ) : (
        <div>
          <div>PostId: {data.id}</div>
          <div>
            title: <strong className="text-red-500">{data.title}</strong>
          </div>
          <div>body: </div>
          <div className="mb-5">{data.body}</div>
        </div>
      )}
      <Link to={"/lists"}>COMEBACK</Link>
    </div>
  );
};

export default DetailTodo;
