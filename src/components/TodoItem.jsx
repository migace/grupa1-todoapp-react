import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./TodoItem.module.css";

export const TodoItem = ({
  id,
  name,
  isCompleted,
  onTodoCompleted,
  onTodoDeleted,
}) => {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.isCompleted]: isCompleted,
      })}
    >
      <p>{name}</p>
      <p>
        <button onClick={() => onTodoCompleted(id)} disabled={isCompleted}>
          Complete
        </button>
        <button onClick={() => onTodoDeleted(id)}>Remove</button>
      </p>
    </div>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  isCompleted: PropTypes.bool,
  onTodoCompleted: PropTypes.func,
  onTodoDeleted: PropTypes.func,
};
