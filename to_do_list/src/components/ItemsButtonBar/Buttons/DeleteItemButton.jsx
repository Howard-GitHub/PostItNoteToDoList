import {handleOnClickToEnterDeleteMode} from '../../../utils/ModifyArrayUtils';
import useCursorHover from '../../../hooks/useCursorHover';
import './DeleteItemButton.css';

const DeleteItemButton = ({setIsInDeleteMode}) => {
    const {isHoveringOver, handleCursorHoveringOver, handleCursorNotHoveringOver} = useCursorHover();

    return ( 
        <div className="delete-item-button-container">
            <div 
                className={isHoveringOver ? "delete-item-button cursor-enter" : "delete-item-button cursor-leave"}
                onMouseEnter={handleCursorHoveringOver}
                onMouseLeave={handleCursorNotHoveringOver}
                onClick={() => handleOnClickToEnterDeleteMode(setIsInDeleteMode)}>
            </div>

        </div>
    );
}
 
export default DeleteItemButton;