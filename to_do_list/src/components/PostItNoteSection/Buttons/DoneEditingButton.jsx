import {useContext} from 'react';
import useCursorHover from '../../../hooks/useCursorHover';
import './DoneEditingButton.css';
import {SelectedContext} from '../../../providers/SelectedProvider';
import {handleOnClickDoneButton} from '../../../utils/SectionTitleUtils';

const DoneEditingButton = ({setTextareaIsSelected}) => {
    const {currentlySelectedSection, setCurrentlySelectedSection} = useContext(SelectedContext);
    const {isHoveringOver, handleCursorHoveringOver, handleCursorNotHoveringOver} = useCursorHover();

    return ( 
        <div className="done-button-container">
            <button 
                className={isHoveringOver ? "done-button cursor-enter" : "done-button cursor-leave"}
                onMouseEnter={handleCursorHoveringOver}
                onMouseLeave={handleCursorNotHoveringOver}
                onClick={() => handleOnClickDoneButton(setCurrentlySelectedSection, setTextareaIsSelected)}>
                <label className="done-editing-label">
                    Done Editing
                </label>
            </button>
        </div>
    );
}
 
export default DoneEditingButton;