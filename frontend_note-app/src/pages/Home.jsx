import React, { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import NotesList from "../components/NotesList";
import SingleNote from "../components/SingleNote";
import AddButton from "../components/AddButton";

const Home = () => {
  let { authTokens } = useContext(AuthContext);
  const [notes, setNotes] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [isAddingNote, setIsAddingNote] = useState(false);

  const GetNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/notes/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();
    setNotes(data);
  };

  const handleSelectNote = (noteId) => {
    setSelectedNoteId(noteId);
    setIsAddingNote(false); // Ensure we are viewing an existing note
  };

  const handleAddNote = () => {
    setSelectedNoteId("new"); // Set to "new" to handle note creation
    setIsAddingNote(true);
  };

  useEffect(() => {
    GetNotes();
  }, []);

  return (
    <div>
      <p>Home</p>
      <AddButton onAddNote={handleAddNote} />
      <div className="home-container">
        <NotesList notes={notes} onSelectNote={handleSelectNote} />
        {/* Ensure selectedNoteId is truthy to display the note */}
        {(isAddingNote || selectedNoteId) && (
          <SingleNote
            noteId={selectedNoteId}
            GetNotes={GetNotes}
            authTokens={authTokens}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
