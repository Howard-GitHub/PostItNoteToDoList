import './IndividualPostItNote.css';
import {handleOnClickToDeleteItem} from '../../../utils/ModifyArrayUtils';
import useDetectMouseHoverOver from '../../../hooks/useDetectMouseHoverOver';

const IndividualPostItNote = ({id, isInDeleteMode, arrayOfIndividualPostItNotes, setArrayOfIndividualPostItNotes, oneSectionIsEntered}) => {
    const {isHoveringOver, handleMouseEnterItem, handleMouseLeaveItem} = useDetectMouseHoverOver();
    
    return ( 
        <div className="individual-post-it-note-container">
            <div 
                className="individual-post-it-note">
                {(isInDeleteMode && oneSectionIsEntered) &&
                    <div 
                        className={isHoveringOver ? "select-to-delete cursor-enter" : "select-to-delete cursor-leave"}
                        onMouseEnter={handleMouseEnterItem}
                        onMouseLeave={handleMouseLeaveItem}
                        onClick={() => handleOnClickToDeleteItem(id, arrayOfIndividualPostItNotes, setArrayOfIndividualPostItNotes)}/>}
            </div>
        </div>
    );
}
 
export default IndividualPostItNote;