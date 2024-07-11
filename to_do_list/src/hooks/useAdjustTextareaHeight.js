import {useEffect} from 'react';

const useAdjustTextareaHeight = (textareaRef, dependency, offSet) => {

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height =`${textareaRef.current.scrollHeight + offSet}px`;
        }
    }, [dependency])

}
 
export default useAdjustTextareaHeight;