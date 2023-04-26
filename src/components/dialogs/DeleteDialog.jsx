const DeleteDialog = ({ handleClick }) => {
    return (
        <div className="dialog">
            <h2>Are you sure you want to delete this item?</h2>
            <button
                style={{
                    backgroundColor: 'red',
                    color: white,
                    border: none,
                    padding: 20
                }}
            >
                Yes, delete
            </button>
        </div>
    );
};

export default DeleteDialog;