import {useContext} from 'react';
import useCursorHover from '../../../hooks/useCursorHover';
import './DoneEditingButton.css';
import {SelectedContext} from '../../../providers/SelectedProvider';

const DoneEditingButton = () => {
    const {identifySelectedSection, setIdentifySelectedSection} = useContext(SelectedContext);
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