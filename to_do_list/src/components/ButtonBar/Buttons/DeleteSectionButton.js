import {handleOnClickToEnterDeleteMode} from '../../../utils/ModifyArrayUtils';
import useCursorHover from '../../../hooks/useCursorHover';
import './DeleteSectionButton.css';

const DeleteSectionButton = ({setIsInDeleteMode}) => {
    const {isHoveringOver, handleCursorHoveringOver, handleCursorNotHoveringOver} = useCursorHover();

    return ( 
        <div className="delete-section-button-container">
            <div 
                className={isHoveringOver ? "delete-section-button cursor-enter" : "delete-section-button cursor-leave"}
                onMouseEnter={handleCursorHoveringOver}
                onMouseLeave={handleCursorNotHoveringOver}
                onClick={() => handleOnClickToEnterDeleteMode(setIsInDeleteMode)}>
            </div>

        </div>
    );
}
 
export default DeleteSectionButton;