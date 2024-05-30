import {useState} from 'react';

const useCursorHover = () => {
    const [isHoveringOver, setIsHoveringOver] = useState();

    const handleCursorHoveringOver = () => {
        setIsHoveringOver(true);
    }

    const handleCursorNotHoveringOver = () => {
        setIsHoveringOver(false);
    }

    return {
        isHoveringOver,
        handleCursorHoveringOver,
        handleCursorNotHoveringOver
    };
}
 
export default useCursorHover;