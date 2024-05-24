import {useState} from 'react';
import './DeleteStackButton.css';

const DeleteStackButton = ({isInDeleteMode, setIsInDeleteMode}) => {
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
        <div className="delete-stack-button-container">
            <div 
                className={isHoveringOver ? "delete-stack-button cursor-enter" : "delete-stack-button cursor-leave"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleOnClickDeleteMode}>
            </div>

        </div>
    );
}
 
export default DeleteStackButton;