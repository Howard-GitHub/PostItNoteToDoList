import './AddItemButton.css';

const AddItemButton = ({handleClickAddItem, type}) => {

    return ( 
        <div className={`add-item-container add-item-container--${type}`}>
            {(type === "post-it-note") ? (
                <button 
                    className="add-item-button add-item-button--post-it-note"
                    onClick={handleClickAddItem}
                >
                    <label className="add-item-button--post-it-note__symbol">
                        +
                    </label>
                </button>
            ) : (
                <button
                    className="add-item-button add-item-button--task"
                    onClick={handleClickAddItem}
                >
                    Add Task
                </button>
            )}   

        </div>
    );
}
 
export default AddItemButton;