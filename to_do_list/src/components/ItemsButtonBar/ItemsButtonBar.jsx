import './ItemsButtonBar.css';
import AddItemButton from "./Buttons/AddItemButton/AddItemButton";
import DeleteItemButton from "./Buttons/DeleteItemButton/DeleteItemButton";

const ItemsButtonBar = ({isInDeleteMode, setIsInDeleteMode, handleOnClickAddNewItem}) => {
    return ( 
        <div className="button-bar-container">
            <div 
                className="button-bar">
                <AddItemButton 
                    handleOnClickAddNewItem={handleOnClickAddNewItem}
                />
                <DeleteItemButton 
                    isInDeleteMode={isInDeleteMode}
                    setIsInDeleteMode={setIsInDeleteMode}
                />
            </div>
        </div>
     );
}
 
export default ItemsButtonBar;