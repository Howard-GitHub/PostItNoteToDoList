import {useEffect} from "react";

const useAdjustDisplayHeight = (displayRef, text, isInEditMode, defaultHeight, offset) => {
    
    // Sets the height of the display height whenever the display appears on screen
    useEffect(() => {
        if (displayRef.current) {
            if (text === "") {
                displayRef.current.style.height = defaultHeight;
            }
            else {
                displayRef.current.style.height = `${displayRef.current.scrollHeight - offset}px`
            }
        }
    }, [displayRef, text, isInEditMode])
}
 
export default useAdjustDisplayHeight;