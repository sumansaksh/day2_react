import React from "react";

export function Task() {
  const [query, setQuery] = React.useState("");
  const [Tasks, setTask] = React.useState([]);
  const handleChange = (e) => {
    const { value } = e.target;

    setQuery(value);
  };
  const handleAdd = (e) => {
    const payload = {
      Title: query,
      status: "not Done"
    };
    let newTask = [...Tasks, payload];
    setTask(newTask);
    console.log(Tasks);
  };
  return (
    <>
      <div>
        <h1>Task</h1>
        <input onChange={handleChange} value={query} placeholder="type..." />
        <button onClick={handleAdd}>done</button>
      </div>
      <div>
        {Tasks.map((items) => {
          return (
            <>
              <div>{items.Title}</div>
              <div>{items.status}</div>
            </>
          );
        })}
      </div>
    </>
  );
}
