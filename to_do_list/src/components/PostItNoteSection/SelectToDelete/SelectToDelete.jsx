import useDetectMouseHoverOver from "../../../hooks/useDetectMouseHoverOver";
import {handleOnClickToDeleteItem} from "../../../utils/ModifyArrayUtils";

const SelectToDelete = ({id, deleteComponentRef, arrayOfItems, setArrayOfItems}) => {
    const {isHoveringOver, handleMouseEnterItem, handleMouseLeaveItem} = useDetectMouseHoverOver();

    return (  
        <div 
            className={isHoveringOver ? "select-to-delete cursor-enter" : "select-to-delete cursor-leave"}
            ref={deleteComponentRef}
            onMouseEnter={handleMouseEnterItem}
            onMouseLeave={handleMouseLeaveItem}
            onClick={() => handleOnClickToDeleteItem(id, arrayOfItems, setArrayOfItems)}
        />
    );
}
 
export default SelectToDelete;