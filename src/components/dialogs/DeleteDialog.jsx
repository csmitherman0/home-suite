import './DeleteDialog.styles.css';

const DeleteDialog = ({ handleClick, target }) => {
    return (
        <div
            className="dialog"
            id='deleteDialog'
        >
            <h2>Are you sure you want to delete this item?</h2>
            <button
                onClick={() => handleClick(target)}
            >
                Yes, delete
            </button>
        </div>
    );
};

export default DeleteDialog;