import useCursorHover from '../../../hooks/useCursorHover';
import {handleOnClickAddNewItem} from '../../../utils/ModifyArrayUtils';
import './AddNewSectionButton.css';

const AddNewSectionButton = ({arrayOfSections, setArrayOfSections}) => {
    const {isHoveringOver, handleCursorHoveringOver, handleCursorNotHoveringOver} = useCursorHover();

    return ( 
        <div className="add-new-section-container">
            <div 
                className={isHoveringOver ? "add-new-section-button cursor-enter" : "add-new-section-button cursor-leave"}
                onClick={() => handleOnClickAddNewItem(arrayOfSections, setArrayOfSections)}
                onMouseEnter={handleCursorHoveringOver}
                onMouseLeave={handleCursorNotHoveringOver}>
                +
            </div>
        </div>
    );
}
 
export default AddNewSectionButton;