import './PostItNoteToDoList.css';
import {handleOnClickToDeleteItem} from '../../../utils/ModifyArrayUtils';
import useDetectMouseHoverOver from '../../../hooks/useDetectMouseHoverOver';

const PostItNoteToDoList = ({id, isInDeleteMode, arrayOfPostItNoteToDoLists, setArrayOfPostItNoteToDoLists, oneSectionIsEntered}) => {
    const {isHoveringOver, handleMouseEnterItem, handleMouseLeaveItem} = useDetectMouseHoverOver();
    
    return ( 
        <div className="to-do-list-container">
            <div 
                className="to-do-list">
                {(isInDeleteMode && oneSectionIsEntered) &&
                    <div 
                        className={isHoveringOver ? "select-to-delete cursor-enter" : "select-to-delete cursor-leave"}
                        onMouseEnter={handleMouseEnterItem}
                        onMouseLeave={handleMouseLeaveItem}
                        onClick={() => handleOnClickToDeleteItem(id, arrayOfPostItNoteToDoLists, setArrayOfPostItNoteToDoLists)}/>}
            </div>
        </div>
    );
}
 
export default PostItNoteToDoList;