import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  return (
    <div>
      <Link to={`/notes/${note?.id}/`}>
        <div>
          <p>{note?.body}</p>
        </div>
      </Link>
    </div>
  );
  
};

export default ListItem;
