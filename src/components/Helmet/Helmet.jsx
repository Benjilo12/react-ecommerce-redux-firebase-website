import PropTypes from "prop-types";

function Helmet({ title, children }) {
  // Update the document title
  document.title = `Yoomart - | ${title}`;

  return <div className="w-100">{children}</div>;
}

Helmet.propTypes = {
  title: PropTypes.string.isRequired, // Ensures title is a string and required
  children: PropTypes.node, // Ensures children can be any renderable node
};

export default Helmet;
