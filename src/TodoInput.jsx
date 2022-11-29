import React, { useState } from "react";

function TodoInput() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState("");
  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold ">Create A todo</h1>
      <input
        className="border m-2 pl-2 pr-5 py-1 "
        placeholder="Todo List "
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <div className="flex gap-2">
        <button
          className="px-2 py-1 border border-black bg-yellow-500 text-white rounded-md"
          onClick={todo}
        >
          Save
        </button>
        <button
          className="px-2 py-1 border border-black bg-white text-black rounded-md"
          onClick={(e) => {
            setList(todo);
          }}
        >
          Cancel
        </button>
      </div>
      <h2>{list}</h2>
    </div>
  );
}

export default TodoInput;
