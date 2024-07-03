import './ItemsButtonBar.css';
import AddItemButton from "./Buttons/AddItemButton/AddItemButton";
import DeleteItemButton from "./Buttons/DeleteItemButton/DeleteItemButton";

const ItemsButtonBar = ({handleClickAddItem, handleClickEnterDeleteMode, setIsInDeleteMode}) => {
    return ( 
        <div className="button-bar-container">
            <div 
                className="button-bar">
                <AddItemButton 
                    handleClickAddItem={handleClickAddItem}
                />
                <DeleteItemButton 
                    handleClickEnterDeleteMode={handleClickEnterDeleteMode}
                    setIsInDeleteMode={setIsInDeleteMode}
                />
            </div>
        </div>
     );
}
 
export default ItemsButtonBar;