import {useContext} from 'react';
import {SelectedContext} from '../../providers/SelectedProvider';
import './ItemsButtonBar.css';
import AddNewItemButton from "./Buttons/AddNewItemButton/AddNewItemButton";
import DeleteItemButton from "./Buttons/DeleteItemButton/DeleteItemButton";

const ItemsButtonBar = ({arrayOfItems, setArrayOfItems, isInDeleteMode, setIsInDeleteMode}) => {

    const {textareaIsSelected} = useContext(SelectedContext);

    return ( 
        <div className="button-bar-container">
            {!textareaIsSelected && 
            <div 
                className="button-bar">
                <AddNewItemButton 
                    arrayOfItems={arrayOfItems} 
                    setArrayOfItems={setArrayOfItems}/>
                <DeleteItemButton 
                    isInDeleteMode={isInDeleteMode}
                    setIsInDeleteMode={setIsInDeleteMode}/>
            </div>
            }
        </div>
     );
}
 
export default ItemsButtonBar;