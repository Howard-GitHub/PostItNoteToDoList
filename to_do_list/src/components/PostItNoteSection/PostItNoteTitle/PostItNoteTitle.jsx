import {handleOnChangeKeyboardInput, handleOnClickToEnterSection} from '../../../utils/SectionUtils';
import './PostItNoteTitle.css';
import SelectToDelete from '../SelectToDelete/SelectToDelete';

const PostItNoteTitle = ({id, titleRef, isInDeleteMode, oneSectionIsEntered, arrayOfSections, setArrayOfSections,
                        setOneSectionIsEntered, setSelectedSection, title, setTitle, isInEditMode}) => {

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
                    arrayOfItems={arrayOfSections}
                    setArrayOfItems={setArrayOfSections}
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