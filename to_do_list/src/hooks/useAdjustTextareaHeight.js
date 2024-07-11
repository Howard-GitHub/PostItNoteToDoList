import {useEffect} from 'react';

const useAdjustTextareaHeight = (textareaRef, dependency, offSet) => {

    // Sets the textarea height whenever the textarea appears on screen
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height =`${textareaRef.current.scrollHeight + offSet}px`;
        }
    }, [dependency])

}
 
export default useAdjustTextareaHeight;