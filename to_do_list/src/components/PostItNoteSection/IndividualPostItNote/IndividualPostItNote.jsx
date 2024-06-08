import './IndividualPostItNote.css';
import {handleOnClickToDeleteItem} from '../../../utils/ModifyArrayUtils';
import useCursorHover from '../../../hooks/useCursorHover';

const IndividualPostItNote = ({id, isInDeleteMode, arrayOfIndividualPostItNotes, setArrayOfIndividualPostItNotes, oneSectionIsEntered}) => {
    const {isHoveringOver, handleCursorHoveringOver, handleCursorNotHoveringOver} = useCursorHover();
    
    return ( 
        <div className="individual-post-it-note-container">
            <div 
                className="individual-post-it-note">
                {(isInDeleteMode && oneSectionIsEntered) &&
                    <div 
                        className={isHoveringOver ? "select-to-delete cursor-enter" : "select-to-delete cursor-leave"}
                        onMouseEnter={handleCursorHoveringOver}
                        onMouseLeave={handleCursorNotHoveringOver}
                        onClick={() => handleOnClickToDeleteItem(id, isInDeleteMode, arrayOfIndividualPostItNotes, setArrayOfIndividualPostItNotes)}/>}
            </div>
        </div>
    );
}
 
export default IndividualPostItNote;