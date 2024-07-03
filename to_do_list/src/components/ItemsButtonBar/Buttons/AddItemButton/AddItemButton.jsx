import './AddItemButton.css';

const AddItemButton = ({handleClickAddItem}) => {

    return ( 
        <div className="add-new-item-container">
            <button 
                className="add-new-item-button"
                onClick={handleClickAddItem}
            >
                +
            </button>
        </div>
    );
}
 
export default AddItemButton;