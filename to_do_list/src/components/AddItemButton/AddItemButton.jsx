import './AddItemButton.css';

const AddItemButton = ({handleClickAddItem}) => {

    return ( 
        <div className="add-item-container">
            <button 
                className="add-item-button"
                onClick={handleClickAddItem}
            >
                +
            </button>
        </div>
    );
}
 
export default AddItemButton;