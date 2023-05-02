import { useState } from "react";

import Note from "./Note/Note";
import DeleteDialog from '../../components/dialogs/DeleteDialog.jsx';

import { useSelector, useDispatch } from "react-redux";

import { addNote, removeNote } from '../../store/notes/notes.actions.js';

const Notes = () => {
    const notes = useSelector(state => state.notes);
    const dispatch = useDispatch();

    const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
    // Because the <DeleteDialog /> component has no way of knowing which todo to delete. That data must come from the <Note /> component.
    const [deletedNote, setDeletedNote] = useState({});
    const [showForm, setShowForm] = useState(false);

    const handleContainerClick = () => {
        setDeleteDialogVisible(false);
    };

    const handleDeleteButtonClick = (note) => {
        dispatch(removeNote(note));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote({ title: e.target.elements.title.value, content: e.target.elements.content.value }));
        e.target.elements.title.value = '';
        e.target.elements.content.value = '';
        setShowForm(false);
    };

    return (
        <div id='notes' onClick={handleContainerClick}>
            {showForm || <button onClick={() => setShowForm(true)}>New Note</button>}
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text" placeholder='Note Title' name='title'
                        required
                        style={{
                            marginTop: 20,
                            marginBottom: 20,
                            padding: '10px 20px'
                        }}
                    /><br />
                    <textarea name='content' placeholder="Note Content" rows={20} cols={90} required /><br />
                    <button type='submit'>Add Note</button>
                </form>
            )}

            <h1>Notes</h1>
            {notes.map((n, index) => <Note note={n} key={index} setDeleteDialogVisible={setDeleteDialogVisible} setDeletedNote={setDeletedNote} />)}
            {deleteDialogVisible && <DeleteDialog target={deletedNote} handleClick={handleDeleteButtonClick} />}
        </div>
    );
};

export default Notes;