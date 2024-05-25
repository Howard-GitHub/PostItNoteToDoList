import {useState} from 'react';
import './DeleteSectionButton.css';

const DeleteSectionButton = ({isInDeleteMode, setIsInDeleteMode}) => {
    const [isHoveringOver, setIsHoveringOver] = useState(); 

    const handleMouseEnter = () => {
        setIsHoveringOver(true);
    }

    const handleMouseLeave = () => {
        setIsHoveringOver(false);
    }

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
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleOnClickDeleteMode}>
            </div>

        </div>
    );
}
 
export default DeleteSectionButton;