import {useState} from 'react';
import './DoneEditingButton.css'

const DoneEditingButton = () => {
    const [isHoveringOver, setIsHoveringOver] = useState();

    const handleMouseEnter = () => {
        setIsHoveringOver(true);
    }

    const handleMouseLeave = () => {
        setIsHoveringOver(false);
    }

    return ( 
        <div className="done-button-container">
            <label 
                className={isHoveringOver ? "done-button cursor-enter" : "done-button cursor-leave"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                Done Editing
            </label>
        </div>
     );
}
 
export default DoneEditingButton;