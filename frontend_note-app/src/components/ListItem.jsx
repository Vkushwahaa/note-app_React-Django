import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ note, index }) => {
  const handleNoteTitle = () => {
    let noteTitle = note.body.split("\n")[0];
    console.log(note);
    if (noteTitle.length > 40) {
      return noteTitle.slice(0, 40).trim() + "...";
    } else {
      return noteTitle;
    }

  };
  const handleNoteUpdatedDate = () => {
    let noteTitle = note.updated.split("T");
    noteTitle = noteTitle[0];
    return noteTitle;
  };

  const handleNoteBody = () => {
    let noteBody = note.body;
    if (noteBody.length > 30) {
      return noteBody.slice(0, 30).trim() + "...";
    } else {
      return noteBody;
    }
  };

  return (
    <Link to={`/notes/${note.id}/`}>
      <div className="list-item">
        <div className="text-container">
          <h2>
            {index + 1}.{handleNoteTitle()}
          </h2>
          <p>{handleNoteBody()}</p>
        </div>
        <div className="date-container">
          <span>{handleNoteUpdatedDate()}</span>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
