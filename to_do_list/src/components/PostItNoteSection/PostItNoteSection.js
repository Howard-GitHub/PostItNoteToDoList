import {useState, useRef} from 'react';
import {useSelected} from '../../pages/ToDoList';
import {handleOnClickToDeleteSection} from '../../utils/ModifyArrayUtils';
import './PostItNoteSection.css'
import DoneEditingButton from './Buttons/DoneEditingButton';


const PostItNoteSection = ({id, isInDeleteMode, arrayOfSections, setArrayOfSections}) => {
    const [title, setTitle] = useState();
    const [isHoveringOver, setIsHoveringOver] = useState();
    const [textAreaIsSelected, setTextAreaIsSelected] = useState(false);
    const titleRef = useRef();

    const {identifySelectedSection, setIdentifySelectedSection} = useSelected();


    const handleChangeTextareaHeight = () => {
        if (titleRef.current) {
            titleRef.current.style.height = 'auto';
            titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
        }
    }

    const handleKeyboardInput = (event) => {
        setTitle(event.target.value);
        handleChangeTextareaHeight();
    }

    const handleMouseEnter = () => {
        if (isInDeleteMode) {
            setIsHoveringOver(true);
        }
    }

    const handleMouseLeave = () => {
        if (isInDeleteMode) {
            setIsHoveringOver(false);
        }
    }

    const handleSelectTextarea = () => {
        if (identifySelectedSection === null) {
            setTextAreaIsSelected(true);
            setIdentifySelectedSection(id);
        }
    }

    const handleTextareaOnBlur = () => {
        titleRef.current.focus();
    }
 
    

    return (             
    <div className="post-it-note-section-container">
        <div 
            className={isHoveringOver ? "front-post-it-note cursor-enter" : "front-post-it-note cursor-leave"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleOnClickToDeleteSection(id, isInDeleteMode, arrayOfSections, setArrayOfSections)}>

            {((identifySelectedSection !== id) && identifySelectedSection !== null) && 
                <div className="block-from-selecting"/>}

            <textarea
                className="title"
                ref={titleRef}
                value={title}
                onChange={handleKeyboardInput}
                placeholder="Enter Title"
                onFocus={handleSelectTextarea}
                onBlur={handleTextareaOnBlur}
            />
        </div>
        {textAreaIsSelected &&
            <DoneEditingButton />
        }
    </div> 
    );
}
 
export default PostItNoteSection;
