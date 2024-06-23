import './AddItemButton.css';

const AddItemButton = ({arrayOfItems, setArrayOfItems, handleOnClickAddNewItem}) => {

    return ( 
        <div className="add-new-item-container">
            <button 
                className="add-new-item-button"
                onClick={() => handleOnClickAddNewItem(arrayOfItems, setArrayOfItems)}
            >
                +
            </button>
        </div>
    );
}
 
export default AddItemButton;