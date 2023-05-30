import axios from "axios";
import React from "react";
import { useErrorHandlerData } from "./MyHandleError";

export default function useFetchData(setList) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [pagNumber, setPagNumber] = React.useState(0);
  const { error, handleError } = useErrorHandlerData();

  React.useEffect(() => {
    async function axiosRequest() {
      try {
        setIsLoading(true);
        let rez = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            params: {
              _start: pagNumber,
              _end: pagNumber + 10,
            },
          }
        );
        let response = rez.data.map((value) => ({
          id: value.id,
          title: value.title.slice(0, 3),
          body: value.body.slice(0, 2),
        }));
        setList(response);
      } catch (error) {
        handleError(error);
      } finally {
        setIsLoading(false);
      }
    }

    axiosRequest();
  }, [pagNumber, setList, handleError]);

  return { isLoading, error, setPagNumber };
}
