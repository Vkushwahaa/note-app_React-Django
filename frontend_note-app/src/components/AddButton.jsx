import React from "react";
import { Link } from "react-router-dom";
const AddButton = () => {
  return (
    <Link to="/notes/new/">
      <button className="addbutton">
        <i className="bi bi-plus-lg"></i>
      </button>
    </Link>
  );
};

export default AddButton;
