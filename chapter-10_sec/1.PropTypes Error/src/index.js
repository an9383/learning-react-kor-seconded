import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function App({ name }) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.bool
};

ReactDOM.render(<App name="React" />, document.getElementById("root"));
