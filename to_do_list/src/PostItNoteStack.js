import {useState} from 'react';
import './PostItNoteStack.css'


const PostItNoteStack = () => {
    const [label, setLabel] = useState();

    const handleKeyboardInput = (event) => {
        setLabel(event.target.value);
    }

    return (             
    <div className="container">
        <div className="front-post-it-note">
            <textarea
                className="label"
                value={label}
                onChange={handleKeyboardInput}
                placeholder="Enter Label"
            />
        </div>
    </div> );
}
 
export default PostItNoteStack;