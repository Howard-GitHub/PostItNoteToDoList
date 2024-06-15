import {handleOnChangeKeyboardInput, handleOnClickToEnterSection} from '../../../utils/SectionUtils';
import {handleOnClickToDeleteItem} from '../../../utils/ModifyArrayUtils';
import './PostItNoteTitle.css';
import useDetectMouseHoverOver from '../../../hooks/useDetectMouseHoverOver';




const PostItNoteTitle = ({id, titleRef, isInDeleteMode, oneSectionIsEntered, arrayOfSections, setArrayOfSections, selectedItem,
                        setOneSectionIsEntered, setSelectedSection, title, setTitle, isInEditMode}) => {

    const {isHoveringOver, handleMouseEnterItem, handleMouseLeaveItem} = useDetectMouseHoverOver();

    return ( 
        <div className="title-container">
            <div className="manage-section-container">
                {(((selectedItem !== id) && (selectedItem !== null)) || (oneSectionIsEntered && (isInDeleteMode || !isInEditMode))) && 
                    <div className="block-from-selecting"/>
                }
                {(isInDeleteMode && !oneSectionIsEntered) &&
                    <div 
                        className={isHoveringOver ? "select-to-delete cursor-enter" : "select-to-delete cursor-leave"}
                        onMouseEnter={handleMouseEnterItem}
                        onMouseLeave={handleMouseLeaveItem}
                        onClick={() => handleOnClickToDeleteItem(id, arrayOfSections, setArrayOfSections)}
                    />
                }
                {((!oneSectionIsEntered && !isInDeleteMode) && 
                    <div 
                        className="select-to-enter-section"
                        onClick={() => handleOnClickToEnterSection(id, setOneSectionIsEntered, setSelectedSection)}
                    />
                )}
                <textarea
                    className="title"
                    ref={titleRef}
                    value={title}
                    onChange={(event) => handleOnChangeKeyboardInput(event, titleRef, setTitle, '35px')}
                    placeholder="Untitled"
                />
            </div>
        </div>

    );
}
 
export default PostItNoteTitle;