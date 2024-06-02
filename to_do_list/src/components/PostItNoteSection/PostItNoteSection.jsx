import {useState, useContext, useRef} from 'react';
import {handleOnClickToDeleteSection} from '../../utils/ModifyArrayUtils';
import './PostItNoteSection.css'
import DoneEditingButton from './Buttons/DoneEditingButton';
import useCursorHover from '../../hooks/useCursorHover';
import {handleOnChangeKeyboardInput, handleOnFocusTextarea, handleOnClickToEnterSection} from '../../utils/SectionTitleUtils';
import {SelectedContext} from '../../providers/SelectedProvider';



const PostItNoteSection = ({id, isInDeleteMode, arrayOfSections, setArrayOfSections}) => {
    const [title, setTitle] = useState();
    const titleRef = useRef();
    const {isHoveringOver, handleCursorHoveringOver, handleCursorNotHoveringOver} = useCursorHover();
    const {selectedItem, setSelectedItem, 
           oneSectionIsEntered, setOneSectionIsEntered,
           selectedSection, setSelectedSection,
           textareaIsSelected, setTextareaIsSelected} = useContext(SelectedContext);
 

    return (             
    (!oneSectionIsEntered || (selectedSection === id)) && 
    (<div className="post-it-note-section-container">
        <div 
            className={(isHoveringOver && isInDeleteMode) ? "front-post-it-note cursor-enter" : "front-post-it-note cursor-leave"}
            onMouseEnter={handleCursorHoveringOver}
            onMouseLeave={handleCursorNotHoveringOver}
            onClick={() => handleOnClickToDeleteSection(id, isInDeleteMode, arrayOfSections, setArrayOfSections)}>


            {((selectedItem !== id) && (selectedItem !== null)) && 
                <div className="block-from-selecting"/>}

            {(!oneSectionIsEntered && 
                <div 
                    className="select-to-enter-section"
                    onClick={() => handleOnClickToEnterSection(id, setOneSectionIsEntered, setSelectedSection)}
                />)}

            <textarea
                className="title"
                ref={titleRef}
                value={title}
                onChange={(event) => handleOnChangeKeyboardInput(event, titleRef, setTitle)}
                placeholder="Untitled"
                onFocus={() => handleOnFocusTextarea(id, selectedItem, setSelectedItem, setTextareaIsSelected)}
            />


        </div>
        {(textareaIsSelected && (selectedItem == id)) &&
            <DoneEditingButton 
                setTextareaIsSelected={setTextareaIsSelected}/>
        }
    </div> )
    );
}
 
export default PostItNoteSection;
