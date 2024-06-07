import {useState, useContext, useRef} from 'react';
import {handleOnClickToDeleteItem} from '../../utils/ModifyArrayUtils';
import './PostItNoteSection.css'
import DoneEditingButton from './Buttons/DoneEditingButton';
import useCursorHover from '../../hooks/useCursorHover';
import {handleOnChangeKeyboardInput, handleOnFocusTextarea, handleOnClickToEnterSection} from '../../utils/SectionUtils';
import {SelectedContext} from '../../providers/SelectedProvider';
import DashBoardButton from './Buttons/DashboardButton';
import IndividualPostItNote from './IndividualPostItNote/IndividualPostItNote';



const PostItNoteSection = ({id, isInDeleteMode, arrayOfSections, setArrayOfSections, oneSectionIsEntered, setOneSectionIsEntered, selectedSection, setSelectedSection}) => {
    const [title, setTitle] = useState();
    const titleRef = useRef();
    const {isHoveringOver, handleCursorHoveringOver, handleCursorNotHoveringOver} = useCursorHover();
    const {selectedItem, setSelectedItem,
           textareaIsSelected, setTextareaIsSelected} = useContext(SelectedContext);
 

    return (             
    (!oneSectionIsEntered || (selectedSection === id)) && 
    (<div className="post-it-note-section-container">
        <div className="front-post-it-note-container">
            <div 
                className={(isHoveringOver && isInDeleteMode) ? "front-post-it-note cursor-enter" : "front-post-it-note cursor-leave"}
                onMouseEnter={handleCursorHoveringOver}
                onMouseLeave={handleCursorNotHoveringOver}>

                {isInDeleteMode &&
                    <div 
                        className="select-to-delete"
                        onClick={() => handleOnClickToDeleteItem(id, isInDeleteMode, arrayOfSections, setArrayOfSections)}/>}

                {((selectedItem !== id) && (selectedItem !== null)) && 
                    <div className="block-from-selecting"/>}

                {((!oneSectionIsEntered && !isInDeleteMode) && 
                    <div 
                        className="select-to-enter-section"
                        onClick={() => handleOnClickToEnterSection(id, setOneSectionIsEntered, setSelectedSection)}/>)}

                <textarea
                    className="title"
                    ref={titleRef}
                    value={title}
                    onChange={(event) => handleOnChangeKeyboardInput(event, titleRef, setTitle)}
                    placeholder="Untitled"
                    onFocus={() => handleOnFocusTextarea(id, selectedItem, setSelectedItem, setTextareaIsSelected)}/>
            </div>

            {(textareaIsSelected && (selectedItem == id)) &&
                <DoneEditingButton 
                    setTextareaIsSelected={setTextareaIsSelected}/>}
        </div>

        {(selectedSection === id) &&
            <div className="section-dashboard">
                {!textareaIsSelected &&
                    <DashBoardButton 
                        setOneSectionIsEntered={setOneSectionIsEntered}
                        setSelectedSection={setSelectedSection}/>
                }
                <IndividualPostItNote />
            </div>}
    </div> )
    );
}
 
export default PostItNoteSection;
