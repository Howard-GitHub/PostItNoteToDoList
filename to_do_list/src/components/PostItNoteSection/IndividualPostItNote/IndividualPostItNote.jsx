import './IndividualPostItNote.css';
import {handleOnClickToDeleteItem} from '../../../utils/ModifyArrayUtils';
import useCursorHover from '../../../hooks/useCursorHover';

const IndividualPostItNote = ({id, isInDeleteMode, arrayOfIndividualPostItNotes, setArrayOfIndividualPostItNotes}) => {
    const {isHoveringOver, handleCursorHoveringOver, handleCursorNotHoveringOver} = useCursorHover();
    
    return ( 
        <div className="individual-post-it-note-container">
            <div 
                className={(isHoveringOver && isInDeleteMode) ? "individual-post-it-note cursor-enter" : "individual-post-it-note cursor-leave"}
                onMouseEnter={handleCursorHoveringOver}
                onMouseLeave={handleCursorNotHoveringOver}>
                {isInDeleteMode &&
                    <div 
                        className="select-to-delete"
                        onClick={() => handleOnClickToDeleteItem(id, isInDeleteMode, arrayOfIndividualPostItNotes, setArrayOfIndividualPostItNotes)}/>}
            </div>
        </div>
    );
}
 
export default IndividualPostItNote;