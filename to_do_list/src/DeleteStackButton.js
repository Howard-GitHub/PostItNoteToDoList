import {useState} from 'react';
import './DeleteStackButton.css';

const DeleteStackButton = () => {
    const [isHoveringOver, setIsHoveringOver] = useState(); 

    const handleMouseEnter = () => {
        setIsHoveringOver(true);
    }

    const handleMouseLeave = () => {
        setIsHoveringOver(false);
    }

    return ( 
        <div className="delete-stack-button-container">
            <div className="delete-stack-button"></div>
        </div>
    );
}
 
export default DeleteStackButton;