import './AddItemButton.css';

const AddItemButton = ({handleClickAddItem, type}) => {

    return ( 
        <div className={`add-item-container add-item-container--${type}`}>
            <button 
                className={`add-item-button add-item-button--${type}`}
                onClick={handleClickAddItem}
            >
                {type === "post-it-note" ? "+" : "Add Task"}
            </button>
        </div>
    );
}
 
export default AddItemButton;