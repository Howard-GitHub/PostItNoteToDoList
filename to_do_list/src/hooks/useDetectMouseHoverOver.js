import {useState} from 'react';

const useDetectMouseHoverOver = () => {
    const [isHoveringOver, setIsHoveringOver] = useState();

    const handleMouseEnterItem = () => {
        setIsHoveringOver(true);
    }

    const handleMouseLeaveItem = () => {
        setIsHoveringOver(false);
    }

    return {
        isHoveringOver,
        handleMouseEnterItem,
        handleMouseLeaveItem
    };
}
 
export default useDetectMouseHoverOver;