
import ListItem from "./ListItem";

const NoteList = ({ notes }) => {
  return (
    <div className="notelist-container">
      {notes.map((note, index) => (
        <ListItem key={note.id} note={note} index={index} />
      ))}

    </div>
  );
};

export default NoteList;
