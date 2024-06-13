import {handleOnClickToEnterDeleteMode} from '../../../../utils/ModifyArrayUtils';
import useDetectMouseHoverOver from '../../../../hooks/useDetectMouseHoverOver';
import './DeleteItemButton.css';

const DeleteItemButton = ({setIsInDeleteMode}) => {
    const {isHoveringOver, handleMouseEnterItem, handleMouseLeaveItem} = useDetectMouseHoverOver();

    return ( 
        <div className="delete-item-button-container">
            <button 
                className={isHoveringOver ? "delete-item-button cursor-enter" : "delete-item-button cursor-leave"}
                onMouseEnter={handleMouseEnterItem}
                onMouseLeave={handleMouseLeaveItem}
                onClick={() => handleOnClickToEnterDeleteMode(setIsInDeleteMode)}>
            </button>

        </div>
    );
}
 
export default DeleteItemButton;