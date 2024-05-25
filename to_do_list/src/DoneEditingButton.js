import {useState} from 'react';
import './DoneEditingButton.css'
import { useSelected } from './ToDoList';

const DoneEditingButton = () => {
    const [isHoveringOver, setIsHoveringOver] = useState();
    const {identifySelectedSection, setIdentifySelectedSection} = useSelected();

    const handleMouseEnter = () => {
        setIsHoveringOver(true);
    }

    const handleMouseLeave = () => {
        setIsHoveringOver(false);
    }

    const handleOnClick = () => {
        setIdentifySelectedSection(null);
    }

    return ( 
        <div className="done-button-container">
            <label 
                className={isHoveringOver ? "done-button cursor-enter" : "done-button cursor-leave"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleOnClick}>
                Done Editing
            </label>
        </div>
     );
}
 
export default DoneEditingButton;