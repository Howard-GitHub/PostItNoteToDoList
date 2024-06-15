import './ItemsButtonBar.css';
import AddNewItemButton from "./Buttons/AddNewItemButton/AddNewItemButton";
import DeleteItemButton from "./Buttons/DeleteItemButton/DeleteItemButton";

const ItemsButtonBar = ({arrayOfItems, setArrayOfItems, isInDeleteMode, setIsInDeleteMode}) => {
    return ( 
        <div className="button-bar-container">
            <div 
                className="button-bar">
                <AddNewItemButton 
                    arrayOfItems={arrayOfItems} 
                    setArrayOfItems={setArrayOfItems}/>
                <DeleteItemButton 
                    isInDeleteMode={isInDeleteMode}
                    setIsInDeleteMode={setIsInDeleteMode}/>
            </div>
        </div>
     );
}
 
export default ItemsButtonBar;