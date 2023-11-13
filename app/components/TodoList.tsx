"use client";

import { useReducer, useState } from "react";
import todoReducer from "../reducers/todoReducer";
import ListItem from "./ListItem";

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, []);
  const [message, setMessage] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <section className=" w-[40rem] bg-white rounded px-6 py-8 ">
      <h1 className="text-slate-950 font-extrabold text-6xl">Todo List</h1>
      <p className="text-slate-950 tracking-wide ml-2 text-lg italic">
        For all your simple errands.
      </p>
      <div className="flex mt-10 gap-7 items-end">
        <div className="grow">
          <label
            className=" pl-4 text-2xl font-bold text-slate-800 "
            htmlFor="addTodo "
          >
            Create a Todo
          </label>

          <input
            id="addTodo"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            className=" mt-4 px-4 w-full border-black border-b outline-none text-xl text-black"
            placeholder="Enter a new todo"
          />
        </div>
        <button
          onClick={() =>
            dispatch({
              type: "ADD",
              todo: {
                id: state.length + 1,
                status: false,
                date: new Date().toLocaleDateString(),
                message: message,
              },
            })
          }
          className=" flex-none font-bold py-3 px-8 bg-teal-800 rounded hover:bg-teal-700"
        >
          ADD
        </button>
      </div>

      {state.map((todo) => (
        <ListItem
          message={todo.message}
          status={todo.status}
          date={todo.date}
          onDelete={() => dispatch({ type: "DELETE", todoId: todo.id })}
          onComplete={() =>
            dispatch({ type: "COMPLETE", status: todo.status, todoId: todo.id })
          }
        ></ListItem>
      ))}
    </section>
  );
};

export default TodoList;
