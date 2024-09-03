import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SingleNote = ({ GetNotes, notes }) => {
  const { id } = useParams();

  const [note, setNote] = useState("");
  let navigate = useNavigate();
  const getNote = async () => {
    if (id === "new") {
      setNote({ body: "" });
      return;
    }
    let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/`);
    let data = await response.json();
    setNote(data);
  };
  const updateNote = async () => {
    await fetch(`http://127.0.0.1:8000/api/notes/${id}/update/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
    await GetNotes();
  };

  const createNote = async () => {
    await fetch(`http://127.0.0.1:8000/api/notes/create/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
    await GetNotes();
    navigate(`/notes/${notes[notes.length - 1].id}`, { replace: true });
  };
  const deleteNote = async () => {
    await fetch(`http://127.0.0.1:8000/api/notes/${id}/delete/`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    await GetNotes();
    navigate("/notes/");
  };

  const handlenote = async () => {
    if (id === "new" && note.body !== "") {
      await createNote();
    } else if (id !== "new" && note.body !== "") {
      await updateNote();
    } else if (id !== "new" && note.body === "") {
      await deleteNote();
    }
  };

  useEffect(() => {
    getNote();
  }, [id]);
  return (
    <div className="note-container">
      <textarea
        spellCheck="false"
        className="textarea"
        value={note.body}
        onChange={(e) => setNote({ ...note, body: e.target.value })}
        placeholder="Enter Title (first line) and Note (remaining lines)"
      ></textarea>
      <button className="done-button" onClick={() => handlenote()}>
        DONE
      </button>
      <button className="delete-button" onClick={() => deleteNote()}>
        <i class="bi bi-trash3-fill"></i>
      </button>
    </div>
  );
};

export default SingleNote;
