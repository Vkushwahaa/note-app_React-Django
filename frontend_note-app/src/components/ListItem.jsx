import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  const handleNoteTitle = () => {
    let noteTitle = note.title.slice(0, 20);
    console.log(note);
    return noteTitle;
  };
  const handleNoteUpdatedDate = () => {
    let noteTitle = note.updated.split("T");
    noteTitle = noteTitle[0];
    return noteTitle;
  };

  const handleNoteBody = () => {
    let noteBody = note.body;
    if (noteBody.length > 30) {
      return noteBody.slice(0, 30).trim()+ "...";
    } else {
      return noteBody;
    }
  };

  return (
    <Link to={`/notes/${note?.id}/`}>
      <div className="list-item">
        <h2 key={note.id}>{handleNoteTitle()}</h2>
        <p>{handleNoteBody()}</p>
        <span>{handleNoteUpdatedDate()}</span>
      </div>
    </Link>
  );

};

export default ListItem;
