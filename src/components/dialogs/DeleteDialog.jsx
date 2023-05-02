const DeleteDialog = ({ handleClick, target }) => {
    return (
        <div
            className="dialog"
            style={{
                position: 'absolute',
                backgroundColor: 'lightblue',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 500,
                height: 300,
                padding: 20,
                borderRadius: 20,
            }}
        >
            <h2>Are you sure you want to delete this item?</h2>
            <button
                style={{
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    padding: 20,
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    fontSize: 20,
                    position: 'absolute',
                    bottom: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}
                onClick={() => handleClick(target)}
            >
                Yes, delete
            </button>
        </div>
    );
};

export default DeleteDialog;