import {useState} from 'react';
import {useSelected} from '../../../pages/ToDoList';
import useCursorHover from '../../../hooks/useCursorHover';
import './DoneEditingButton.css';



const DoneEditingButton = () => {
    const {identifySelectedSection, setIdentifySelectedSection} = useSelected();
    const {isHoveringOver, handleCursorHoveringOver, handleCursorNotHoveringOver} = useCursorHover();

    const handleOnClick = () => {
        setIdentifySelectedSection(null);
    }

    return ( 
        <div className="done-button-container">
            <button 
                className={isHoveringOver ? "done-button cursor-enter" : "done-button cursor-leave"}
                onMouseEnter={handleCursorHoveringOver}
                onMouseLeave={handleCursorNotHoveringOver}
                onClick={handleOnClick}>
                <label className="done-editing-label">
                    Done Editing
                </label>
            </button>
        </div>
    );
}
 
export default DoneEditingButton;