import useCursorHover from '../../../hooks/useCursorHover';
import './DeleteSectionButton.css';

const DeleteSectionButton = ({isInDeleteMode, setIsInDeleteMode}) => {
    const {isHoveringOver, handleCursorHoveringOver, handleCursorNotHoveringOver} = useCursorHover();

    const handleOnClickDeleteMode = () => {
        if (isInDeleteMode) {
            setIsInDeleteMode(false);
        }
        else {
            setIsInDeleteMode(true);
        }
    }

    return ( 
        <div className="delete-section-button-container">
            <div 
                className={isHoveringOver ? "delete-section-button cursor-enter" : "delete-section-button cursor-leave"}
                onMouseEnter={handleCursorHoveringOver}
                onMouseLeave={handleCursorNotHoveringOver}
                onClick={handleOnClickDeleteMode}>
            </div>

        </div>
    );
}
 
export default DeleteSectionButton;