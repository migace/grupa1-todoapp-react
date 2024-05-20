import { useState } from "react";
import PropTypes from "prop-types";

export const TodoInput = ({ onClick }) => {
  const [text, setText] = useState("");

  const updateText = (e) => setText(e.currentTarget.value);

  const addTask = () => {
    onClick(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={updateText} />
      <button onClick={addTask}>Add Task</button>
      {/* <input value={text} onChange={(e) => setText(e.currentTarget.value)} />
      <button onClick={() => onClick(text)}>Add Task</button> */}
    </div>
  );
};

TodoInput.propTypes = {
  onClick: PropTypes.func,
};
