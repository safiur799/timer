import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Todos() {
  const [todo, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getTodos();
  }, []);

  function getTodos() {
    fetch(`http://localhost:3003/todo?_page=${page}&_limit=3`)
      .then((data) => data.json())
      .then((data) => {
        console.log("todo", data);
        setTodos(data);
        setLoading(false);
      });

    // axios.get("http://localhost:3003/todo").then((res) => {

    //  setTodos(res);
    //  setLoading(false);
    // });
  }

  return loading ? (
    "Loading..."
  ) : (
    <div>
      <input
        placeholder="add todo"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          const data = {
            title: text,
            status: false,
          };
          fetch("http://localhost:3003/todo", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(() => {
            getTodos();
          });
          // axios.post("http://localhost:3003/todo", data);
          // setText("");
        }}
      >
        Add todo
      </button>

      {todo.map((e) => (
        <div>{e.title}</div>
      ))}

      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        prev page
      </button>
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Next page
      </button>
    </div>
  );
}
