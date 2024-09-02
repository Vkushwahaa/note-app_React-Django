import "./App.css";

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SingleNote from "./components/SingleNote";
import NoteList from "./components/NotesList";
function App() {
  const GetNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/notes/");
    let data = await response.json();
    setNotes(data);
  };
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    GetNotes();
  }, []);
  return (
    <Router>
      <Header />
      <NoteList notes={notes} />
      <Routes>
        <Route
          path="/notes/:id"
          element={<SingleNote GetNotes={GetNotes} notes={notes} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
