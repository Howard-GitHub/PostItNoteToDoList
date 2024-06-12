import {handleOnChangeKeyboardInput, handleOnFocusTextarea, handleOnClickToEnterSection} from '../../../utils/SectionUtils';
import {handleOnClickToDeleteItem} from '../../../utils/ModifyArrayUtils';
import './PostItNoteTitle.css';
import useDetectMouseHoverOver from '../../../hooks/useDetectMouseHoverOver';




const PostItNoteTitle = ({id, titleRef, isInDeleteMode, oneSectionIsEntered, arrayOfSections, setArrayOfSections, selectedItem, setSelectedItem,
                        setOneSectionIsEntered, setSelectedSection, setTextareaIsSelected, title, setTitle}) => {

    const {isHoveringOver, handleMouseEnterItem, handleMouseLeaveItem} = useDetectMouseHoverOver();


    return ( 
        <div className="outer-title-container">
            <div className="inner-title-container">
                {(isInDeleteMode && !oneSectionIsEntered) &&
                    <div 
                        className={isHoveringOver ? "select-to-delete cursor-enter" : "select-to-delete cursor-leave"}
                        onMouseEnter={handleMouseEnterItem}
                        onMouseLeave={handleMouseLeaveItem}
                        onClick={() => handleOnClickToDeleteItem(id, arrayOfSections, setArrayOfSections)}/>}


                {((selectedItem !== id) && (selectedItem !== null)) && 
                    <div className="block-from-selecting"
                    />
                }


                {((!oneSectionIsEntered && !isInDeleteMode) && 
                    <div 
                        className="select-to-enter-section"
                        onClick={() => handleOnClickToEnterSection(id, setOneSectionIsEntered, setSelectedSection)}
                        />
                    )
                }

                <textarea
                    className="title"
                    ref={titleRef}
                    value={title}
                    onChange={(event) => handleOnChangeKeyboardInput(event, titleRef, setTitle)}
                    placeholder="Untitled"
                    onFocus={() => handleOnFocusTextarea(id, selectedItem, setSelectedItem, setTextareaIsSelected)}
                />
            </div>
        </div>

    );
}
 
export default PostItNoteTitle;