import React from "react";
import { Link } from "react-router-dom";
const AddButton = () => {
  return (
    <div>
      <Link to="/notes/new/">
        <button className="floating-button">
          <i className="bi bi-plus-lg"></i>
        </button>
      </Link>
    </div>
  );
};

export default AddButton;
