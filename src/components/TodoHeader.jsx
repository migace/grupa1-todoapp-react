import PropTypes from "prop-types";

export const TodoHeader = ({ children }) => {
  return <h1>{children}</h1>;
};

TodoHeader.propTypes = {
  children: PropTypes.string,
};
