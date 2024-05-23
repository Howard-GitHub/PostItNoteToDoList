import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './AddNewStackButton.css';

const AddNewStackButton = ({arrayOfStacks, setArrayOfStacks}) => {
    const [isHoveringOver, setIsHoveringOver] = useState();

    const addNewStack = () => {
        const uniqueIdentifier = {
            id: uuidv4()
        }
        setArrayOfStacks([...arrayOfStacks, uniqueIdentifier])
    }

    const handleMouseEnter = () => {
        setIsHoveringOver(true);
    }

    const handleMouseLeave = () => {
        setIsHoveringOver(false);
    }

    return ( 
        <div className="add-new-stack-container">
            <div 
                className={isHoveringOver ? "add-new-stack-button cursor-enter" : "add-new-stack-button cursor-leave"}
                onClick={addNewStack}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                +
            </div>
    
        </div>
    );
}
 
export default AddNewStackButton;