import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './AddNewSectionButton.css';

const AddNewSectionButton = ({arrayOfSections, setArrayOfSections}) => {
    const [isHoveringOver, setIsHoveringOver] = useState();

    const addNewSection = () => {
        const uniqueIdentifier = {
            id: uuidv4()
        }
        setArrayOfSections([...arrayOfSections, uniqueIdentifier])
    }

    const handleMouseEnter = () => {
        setIsHoveringOver(true);
    }

    const handleMouseLeave = () => {
        setIsHoveringOver(false);
    }

    return ( 
        <div className="add-new-section-container">
            <div 
                className={isHoveringOver ? "add-new-section-button cursor-enter" : "add-new-section-button cursor-leave"}
                onClick={addNewSection}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                +
            </div>
    
        </div>
    );
}
 
export default AddNewSectionButton;