import useCursorHover from '../../../hooks/useCursorHover';
import {handleOnClickAddNewItem} from '../../../utils/ModifyArrayUtils';
import './AddNewItemButton.css';

const AddNewItemButton = ({arrayOfItems, setArrayOfItems}) => {
    const {isHoveringOver, handleCursorHoveringOver, handleCursorNotHoveringOver} = useCursorHover();

    return ( 
        <div className="add-new-item-container">
            <div 
                className={isHoveringOver ? "add-new-item-button cursor-enter" : "add-new-item-button cursor-leave"}
                onClick={() => handleOnClickAddNewItem(arrayOfItems, setArrayOfItems)}
                onMouseEnter={handleCursorHoveringOver}
                onMouseLeave={handleCursorNotHoveringOver}>
                +
            </div>
        </div>
    );
}
 
export default AddNewItemButton;