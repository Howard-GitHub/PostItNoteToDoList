import {useState, useEffect} from 'react';
import './AddNewStackButton.css'

const AddNewStackButton = ({arrayOfStacks, setArrayOfStacks}) => {
    const [leftSideCoordinate, setLeftSideCoordinate] = useState((window.innerWidth / 2) - 30);
    const [topSideCoordinate, setTopSideCoordinate] = useState(window.innerHeight - 120);


    const addNewStack = () => {
        setArrayOfStacks(...arrayOfStacks)
    }

 
    useEffect(() => {
        const handleButtonPlacement = () => {
            setLeftSideCoordinate((window.innerWidth / 2) - 30);
            setTopSideCoordinate(window.innerHeight - 120)
        }

        window.addEventListener('resize', handleButtonPlacement);

        return () => {
            window.removeEventListener('resize', handleButtonPlacement)
        }
    }, [])

    return ( 
        <div className="add-new-stack-container">
            <div 
                className="add-new-stack-button"
                onClick={addNewStack}
                style={{
                    left: leftSideCoordinate,
                    top: topSideCoordinate
                }}>
                +
            </div>
    
        </div>
    );
}
 
export default AddNewStackButton;