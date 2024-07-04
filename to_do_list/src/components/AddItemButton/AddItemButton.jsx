import './AddItemButton.css';

const AddItemButton = ({handleClickAddItem, type}) => {

    return ( 
        <div className="add-item-container">
            <button 
                className={`add-item-button add-item-button--${type}`}
                onClick={handleClickAddItem}
            >
                {type === "post-it-note" ? "+" : "Add Item"}
            </button>
        </div>
    );
}
 
export default AddItemButton;