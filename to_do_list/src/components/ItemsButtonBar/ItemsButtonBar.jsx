import './ItemsButtonBar.css';
import AddItemButton from "../AddItemButton/AddItemButton";
import DeleteItemButton from "./DeleteItemButton/DeleteItemButton";

const ItemsButtonBar = ({handleClickAddItem, handleClickEnterDeleteMode, setIsInDeleteMode}) => {
    return ( 
        <div className="button-bar-container">
            <div 
                className="button-bar">
                <AddItemButton 
                    handleClickAddItem={handleClickAddItem}
                    type={"post-it-note"}
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