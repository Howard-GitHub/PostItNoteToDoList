import {useEffect, useState} from "react";
import './ButtonBar.css';
import AddNewStackButton from "./AddNewStackButton";
import DeleteStackButton from "./DeleteStackButton";

const ButtonBar = ({arrayOfStacks, setArrayOfStacks, isInDeleteMode, setIsInDeleteMode}) => {
    const [leftSideCoordinate, setLeftSideCoordinate] = useState((window.innerWidth / 2) - 75)
    const [topSideCoordinate, setTopSideCoordinate] = useState((window.innerHeight) - 120);

    useEffect(() => {
        
        // keeps the button bar at the bottom center of the screen
        const handleBarPlacement = () => {
            setLeftSideCoordinate((window.innerWidth / 2) - 75);
            setTopSideCoordinate((window.innerHeight) - 100);
        }

        window.addEventListener('resize', handleBarPlacement);

        return () => {
            window.removeEventListener('resize', handleBarPlacement);
        }
    }, [])

    return ( 
        <div className="button-bar-container">
            <div 
                className="button-bar"
                style={{
                    left: leftSideCoordinate,
                    top: topSideCoordinate
                }}>
                <AddNewStackButton 
                    arrayOfStacks={arrayOfStacks} 
                    setArrayOfStacks={setArrayOfStacks}/>
                <DeleteStackButton 
                    isInDeleteMode={isInDeleteMode}
                    setIsInDeleteMode={setIsInDeleteMode}/>
                </div>
        </div>
     );
}
 
export default ButtonBar;