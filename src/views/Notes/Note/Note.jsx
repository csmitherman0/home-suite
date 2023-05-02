import trash from '../../../assets/svg/trash.svg';

const Note = ({ note, setDeleteDialogVisible, setDeletedNote }) => {

    const handleTrashClick = (e) => {
        e.stopPropagation();
        setDeleteDialogVisible(true);
        setDeletedNote(note);
    };

    return (
        <div
            className='note'
            style={{
                width: '100%',
                textAlign: 'center',
                marginTop: 50,
                marginBottom: 50,
                border: '1px solid lightgray',
                position: 'relative',
            }}
        >
            <img
                src={trash}
                onClick={handleTrashClick}
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    cursor: 'pointer',
                }}
            />
            <div>
                <h2>
                    {note.title}
                </h2>
                <p>{note.content}</p>
            </div>

        </div>
    );
};

export default Note;