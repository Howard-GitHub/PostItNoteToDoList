import useCursorHover from '../../../hooks/useCursorHover';
import {v4 as uuidv4} from 'uuid';
import './AddNewSectionButton.css';

const AddNewSectionButton = ({arrayOfSections, setArrayOfSections}) => {
    const {isHoveringOver, handleCursorHoveringOver, handleCursorNotHoveringOver} = useCursorHover();

    const addNewSection = () => {
        const uniqueIdentifier = {
            id: uuidv4()
        }
        setArrayOfSections([...arrayOfSections, uniqueIdentifier])
    }


    return ( 
        <div className="add-new-section-container">
            <div 
                className={isHoveringOver ? "add-new-section-button cursor-enter" : "add-new-section-button cursor-leave"}
                onClick={addNewSection}
                onMouseEnter={handleCursorHoveringOver}
                onMouseLeave={handleCursorNotHoveringOver}>
                +
            </div>
        </div>
    );
}
 
export default AddNewSectionButton;