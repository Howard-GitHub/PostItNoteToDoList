import {useContext} from 'react';
import {SelectedContext} from '../../providers/SelectedProvider';
import './ItemsButtonBar.css';
import AddNewItemButton from "./Buttons/AddNewItemButton";
import DeleteItemButton from "./Buttons/DeleteItemButton";

const ItemsButtonBar = ({arrayOfItems, setArrayOfItems, isInDeleteMode, setIsInDeleteMode, isNotOnScreen}) => {

    const {textareaIsSelected, oneSectionIsEntered} = useContext(SelectedContext);

    return ( 
        <div className="button-bar-container">
            {(!textareaIsSelected && !oneSectionIsEntered) && 
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