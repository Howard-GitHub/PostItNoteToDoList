import useDetectMouseHoverOver from '../../../../hooks/useDetectMouseHoverOver';
import {handleOnClickAddNewItem} from '../../../../utils/ModifyArrayUtils';
import './AddNewItemButton.css';

const AddNewItemButton = ({arrayOfItems, setArrayOfItems}) => {
    const {isHoveringOver, handleMouseEnterItem, handleMouseLeaveItem} = useDetectMouseHoverOver();

    return ( 
        <div className="add-new-item-container">
            <button 
                className={isHoveringOver ? "add-new-item-button cursor-enter" : "add-new-item-button cursor-leave"}
                onClick={() => handleOnClickAddNewItem(arrayOfItems, setArrayOfItems)}
                onMouseEnter={handleMouseEnterItem}
                onMouseLeave={handleMouseLeaveItem}>
                +
            </button>
        </div>
    );
}
 
export default AddNewItemButton;