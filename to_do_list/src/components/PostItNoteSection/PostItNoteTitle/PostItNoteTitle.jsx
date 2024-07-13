import {handleKeyDownEnter, handleOnClickToEnterSection} from '../../../utils/SectionUtils';
import './PostItNoteTitle.css';
import SelectToDelete from '../SelectToDelete/SelectToDelete';
import useAdjustTextareaHeight from '../../../hooks/useAdjustTextareaHeight';
import pinImage from '../../../assets/pushpin-147918_1280.png';

const PostItNoteTitle = ({id, titleRef, isInDeleteMode, oneSectionIsEntered, setOneSectionIsEntered, setSelectedSection, 
                        title, isInEditMode, handleClickDeleteSection, handleChangeKeyboardInput, arrayOfPostItNoteToDoLists}) => {

    useAdjustTextareaHeight(titleRef, oneSectionIsEntered, -7);

    return ( 
        <div className="title-container">
            <div className="post-it-note-container">
                <img 
                    className="pin-image"
                    src={pinImage}
                />
                <div className="text-height-limit">
                    <textarea
                        className="title"
                        ref={titleRef}
                        value={title}
                        onKeyDown={(event) => handleKeyDownEnter(event)}
                        onChange={(event) => handleChangeKeyboardInput(event)}
                        placeholder="Untitled"
                    />
                </div>
                {((oneSectionIsEntered && (isInDeleteMode || !isInEditMode))) && 
                    <div className="block-from-selecting"/>
                }
                {((!oneSectionIsEntered && !isInDeleteMode) && 
                    <div 
                        className="select-to-enter-section"
                        onClick={() => handleOnClickToEnterSection(id, setOneSectionIsEntered, setSelectedSection)}
                    />
                )}
                {(isInDeleteMode && !oneSectionIsEntered) &&
                    <SelectToDelete 
                        type={"post-it-note"}
                        id={id}
                        handleClickDeleteItem={handleClickDeleteSection}
                        itemToDelete={"section"}
                        arrayOfPostItNoteToDoLists={arrayOfPostItNoteToDoLists}
                    />
                }
            </div>
        </div>

    );
}
 
export default PostItNoteTitle;