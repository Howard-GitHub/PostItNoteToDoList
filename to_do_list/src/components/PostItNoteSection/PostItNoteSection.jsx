import {useState, useContext, useRef} from 'react';
import {handleOnClickToDeleteSection} from '../../utils/ModifyArrayUtils';
import './PostItNoteSection.css'
import DoneEditingButton from './Buttons/DoneEditingButton';
import useCursorHover from '../../hooks/useCursorHover';
import {handleOnChangeKeyboardInput, handleOnFocusTextarea, handleOnBlurTextarea} from '../../utils/SectionTitleUtils';
import {SelectedContext} from '../../providers/SelectedProvider';



const PostItNoteSection = ({id, isInDeleteMode, arrayOfSections, setArrayOfSections}) => {
    const [title, setTitle] = useState();
    const [textareaIsSelected, setTextareaIsSelected] = useState(false);
    const titleRef = useRef();

    const {currentlySelectedSection, setCurrentlySelectedSection} = useContext(SelectedContext);
    const {isHoveringOver, handleCursorHoveringOver, handleCursorNotHoveringOver} = useCursorHover();
 

    return (             
    <div className="post-it-note-section-container">
        <div 
            className={(isHoveringOver && isInDeleteMode) ? "front-post-it-note cursor-enter" : "front-post-it-note cursor-leave"}
            onMouseEnter={handleCursorHoveringOver}
            onMouseLeave={handleCursorNotHoveringOver}
            onClick={() => handleOnClickToDeleteSection(id, isInDeleteMode, arrayOfSections, setArrayOfSections)}>

            {((currentlySelectedSection !== id) && currentlySelectedSection !== null) && 
                <div className="block-from-selecting"/>}

            <textarea
                className="title"
                ref={titleRef}
                value={title}
                onChange={(event) => handleOnChangeKeyboardInput(event, titleRef, setTitle)}
                placeholder="Enter Title"
                onFocus={() => handleOnFocusTextarea(id, currentlySelectedSection, setCurrentlySelectedSection, setTextareaIsSelected)}
                onBlur={() => handleOnBlurTextarea(titleRef)}
            />
        </div>
        {textareaIsSelected &&
            <DoneEditingButton />
        }
    </div> 
    );
}
 
export default PostItNoteSection;
