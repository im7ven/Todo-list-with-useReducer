import React, { useReducer } from "react";
import todoReducer from "../reducers/todoReducer";

interface Props {
  message: string;
  date: string;
  status: boolean;
  onDelete: () => void;
  onComplete: () => void;
}

const ListItem = ({ message, date, status, onDelete, onComplete }: Props) => {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <div className="flex items-center gap-7">
      <div className="bg-gray-100 w-full py-2 px-6 rounded mt-6 shadow">
        <div className="flex items-start gap-4 justify-between">
          <h2 className="text-slate-950 text-lg ">{message}</h2>
          <p className="text-slate-950 font-bold">{date}</p>
        </div>
        <button
          onClick={() => onDelete()}
          className="text-slate-950 border-teal-950 border py-1 px-5 rounded ml-auto block mt-1"
        >
          Delete
        </button>
      </div>
      <input
        onClick={() => onComplete()}
        type="checkbox"
        className="w-6 h-6 accent-teal-800"
      />
    </div>
  );
};

export default ListItem;
