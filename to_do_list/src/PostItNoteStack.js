import {useState, useRef} from 'react';
import './PostItNoteStack.css'
import DoneEditingButton from './DoneEditingButton';


const PostItNoteStack = ({id, isInDeleteMode, arrayOfStacks, setArrayOfStacks}) => {
    const [title, setTitle] = useState();
    const [isHoveringOver, setIsHoveringOver] = useState();
    const titleRef = useRef();

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

    const handleOnClickToDelete = () => {
        if (isInDeleteMode) {
            const newArray = arrayOfStacks.filter((arrayOfStacks) => arrayOfStacks.id !== id)
            setArrayOfStacks(newArray);
        }
    }
 
    

    return (             
    <div className="post-it-note-stack-container">
        <div 
            className={isHoveringOver ? "front-post-it-note cursor-enter" : "front-post-it-note cursor-leave"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleOnClickToDelete}>
            <textarea
                className="title"
                ref={titleRef}
                value={title}
                onChange={handleKeyboardInput}
                placeholder="Enter Title"
            />
        </div>
        <DoneEditingButton />
    </div> );
}
 
export default PostItNoteStack;