import React, { useState } from "react";
import TodoInput from "./TodoInput";

function Test() {
  const [click, setClick] = useState("");

  // function handleClick(event) {
  //   setClick(event.target.value);
  //   <TodoInput />;
  // }

  return (
    <div>
      <div className="border pl-2 py-4 text-2xl ">XTodo</div>
      <div className="flex flex-col items-start pl-10 space-y-5 mt-4">
        <h1 className="font-bold text-3xl">Things to get done</h1>
        <button className="px-2 py-1 border border-black bg-yellow-500 text-white rounded-md">
          Refresh
        </button>
        <h2 className="font-bold text-xl">Things to do</h2>
        <form>
          <div className="flex flex-col space-y-2">
            <div className="flex gap-4 ">
              <input type="checkbox" id="todo1" name="todo1" value="text" />
              <label htmlFor="todo1">Clean my computer</label>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" id="todo2" name="todo2" value="text" />
              <label htmlFor="todo2">Buy a keyboard</label>
            </div>

            <div>
              {/* <div>{todolist}</div> */}
              <button
                // value={click}
                className="px-2 py-1 border border-black bg-yellow-500 text-white rounded-full mt-2"
                onClick={<TodoInput />}
              >
                + Add a todo
              </button>
              <TodoInput />
            </div>
            <div>
              <h1 className="font-bold text-xl">Things done</h1>
              <div className="flex gap-4">
                <input type="checkbox" id="done1" name="done1" value="text" />
                <label htmlFor="done1">
                  Write an article about @xstate/test
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Test;
