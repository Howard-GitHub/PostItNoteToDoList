import {useState} from "react";

const useDetectOnFocus = () => {
    const [isOnFocus, setIsOnFocus] = useState(false);

    const handleOnFocusTextarea = () => {
        setIsOnFocus(true);
    }

    const handleOnBlurTextarea = () => {
        setIsOnFocus(false);
    }

    return {
        isOnFocus, 
        handleOnFocusTextarea, 
        handleOnBlurTextarea
    };
}
 
export default useDetectOnFocus;