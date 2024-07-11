import {useEffect} from 'react';
import {handleOnClickToEnterSection} from '../../../utils/SectionUtils';
import './PostItNoteTitle.css';
import SelectToDelete from '../SelectToDelete/SelectToDelete';
import useAdjustTextareaHeight from '../../../hooks/useAdjustTextareaHeight';

const PostItNoteTitle = ({id, titleRef, isInDeleteMode, oneSectionIsEntered, setOneSectionIsEntered, setSelectedSection, 
                        title, isInEditMode, handleClickDeleteSection, handleChangeKeyboardInput, arrayOfPostItNoteToDoLists}) => {

    useAdjustTextareaHeight(titleRef, oneSectionIsEntered, -7);

    return ( 
        <div className="title-container">
            <div className="manage-section-container">
                {((oneSectionIsEntered && (isInDeleteMode || !isInEditMode))) && 
                    <div className="block-from-selecting"/>
                }
                {(isInDeleteMode && !oneSectionIsEntered) &&
                <SelectToDelete 
                    type={"post-it-note"}
                    id={id}
                    handleClickDeleteItem={handleClickDeleteSection}
                    itemToDelete={"section"}
                    arrayOfPostItNoteToDoLists={arrayOfPostItNoteToDoLists}
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
                    onChange={(event) => handleChangeKeyboardInput(event)}
                    placeholder="Untitled"
                />
            </div>
        </div>

    );
}
 
export default PostItNoteTitle;