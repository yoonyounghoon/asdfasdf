import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

function Todos() {
  const {} = useQuery("todoData", () =>
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
  );

  if (isLoading) {
    return <p>"로딩 중..."</p>;
  }

  if (error) {
    return <p>"에러발생!!!"</p>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default Todos;
