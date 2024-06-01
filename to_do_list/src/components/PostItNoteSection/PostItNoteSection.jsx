import {useState, useRef} from 'react';
import {handleOnClickToDeleteSection} from '../../utils/ModifyArrayUtils';
import './PostItNoteSection.css'
import DoneEditingButton from './Buttons/DoneEditingButton';
import useCursorHover from '../../hooks/useCursorHover';
import {handleOnChangeKeyboardInput, handleOnFocusTextarea, handleOnBlurTextarea} from '../../utils/SectionTitleUtils';
import {useSelected} from '../../providers/SelectedProvider';



const PostItNoteSection = ({id, isInDeleteMode, arrayOfSections, setArrayOfSections}) => {
    const [title, setTitle] = useState();
    const [textareaIsSelected, setTextareaIsSelected] = useState(false);
    const titleRef = useRef();

    const {identifySelectedSection, setIdentifySelectedSection} = useSelected();
    const {isHoveringOver, handleCursorHoveringOver, handleCursorNotHoveringOver} = useCursorHover();
 

    return (             
    <div className="post-it-note-section-container">
        <div 
            className={(isHoveringOver && isInDeleteMode) ? "front-post-it-note cursor-enter" : "front-post-it-note cursor-leave"}
            onMouseEnter={handleCursorHoveringOver}
            onMouseLeave={handleCursorNotHoveringOver}
            onClick={() => handleOnClickToDeleteSection(id, isInDeleteMode, arrayOfSections, setArrayOfSections)}>

            {((identifySelectedSection !== id) && identifySelectedSection !== null) && 
                <div className="block-from-selecting"/>}

            <textarea
                className="title"
                ref={titleRef}
                value={title}
                onChange={(event) => handleOnChangeKeyboardInput(event, titleRef, setTitle)}
                placeholder="Enter Title"
                onFocus={() => handleOnFocusTextarea(id, identifySelectedSection, setTextareaIsSelected, setIdentifySelectedSection)}
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
