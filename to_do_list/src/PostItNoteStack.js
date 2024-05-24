import {useState, useRef} from 'react';
import './PostItNoteStack.css'
import DoneEditingButton from './DoneEditingButton';


const PostItNoteStack = () => {
    const [title, setTitle] = useState();
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
    

    return (             
    <div className="post-it-note-stack-container">
        <div className="front-post-it-note">
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