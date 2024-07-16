import {useEffect} from 'react';

const useAdjustTextareaHeight = (textareaRef, text, dependency, offset) => {

    // Sets the textarea height whenever the textarea appears on screen
    useEffect(() => {
        if (textareaRef.current) {
            if (text === "") {
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight + offset}px`;
            }
            else {
                textareaRef.current.style.height = "0px";
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            }
        }
    }, [dependency])

}
 
export default useAdjustTextareaHeight;