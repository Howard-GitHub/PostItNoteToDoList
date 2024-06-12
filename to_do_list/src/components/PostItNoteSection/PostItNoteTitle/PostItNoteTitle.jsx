import {handleOnChangeKeyboardInput, handleOnFocusTextarea, handleOnClickToEnterSection} from '../../../utils/SectionUtils';
import {handleOnClickToDeleteItem} from '../../../utils/ModifyArrayUtils';
import './PostItNoteTitle.css';
import useDetectMouseHoverOver from '../../../hooks/useDetectMouseHoverOver';
import DoneEditingButton from '../Buttons/DoneEditingButton';




const PostItNoteTitle = ({id, titleRef, isInDeleteMode, oneSectionIsEntered, arrayOfSections, setArrayOfSections, selectedItem, setSelectedItem,
                        setOneSectionIsEntered, setSelectedSection, textareaIsSelected, setTextareaIsSelected, title, setTitle}) => {

    const {isHoveringOver, handleMouseEnterItem, handleMouseLeaveItem} = useDetectMouseHoverOver();


    return ( 
        <div className="title-container">
            <div className="manage-section-container">
                {(isInDeleteMode && !oneSectionIsEntered) &&
                    <div 
                        className={isHoveringOver ? "select-to-delete cursor-enter" : "select-to-delete cursor-leave"}
                        onMouseEnter={handleMouseEnterItem}
                        onMouseLeave={handleMouseLeaveItem}
                        onClick={() => handleOnClickToDeleteItem(id, arrayOfSections, setArrayOfSections)}
                    />
                }


                {((selectedItem !== id) && (selectedItem !== null)) && 
                    <div className="block-from-selecting"/>
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
                    onChange={(event) => handleOnChangeKeyboardInput(event, titleRef, setTitle)}
                    placeholder="Untitled"
                    onFocus={() => handleOnFocusTextarea(id, selectedItem, setSelectedItem, setTextareaIsSelected)}
                />
            </div>

            {(textareaIsSelected && (selectedItem === id)) &&
                <DoneEditingButton 
                    setTextareaIsSelected={setTextareaIsSelected}
                />
            }
        </div>

    );
}
 
export default PostItNoteTitle;