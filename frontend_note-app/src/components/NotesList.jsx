
import ListItem from "./ListItem";
import AddButton from "./AddButton";
const NoteList = ({ notes }) => {
  return (
    <div className="notelist-container">
      {notes.map((note) => (
        <ListItem note={note}  />
      ))}
      <AddButton />
    </div>
  );
};

export default NoteList;
