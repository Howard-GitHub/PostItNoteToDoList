import {useEffect, useState} from "react";
import './ButtonBar.css';
import AddNewSectionButton from "./AddNewSectionButton";
import DeleteSectionButton from "./DeleteSectionButton";

const ButtonBar = ({arrayOfSections, setArrayOfSections, isInDeleteMode, setIsInDeleteMode}) => {
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
                <AddNewSectionButton 
                    arrayOfSections={arrayOfSections} 
                    setArrayOfSections={setArrayOfSections}/>
                <DeleteSectionButton 
                    isInDeleteMode={isInDeleteMode}
                    setIsInDeleteMode={setIsInDeleteMode}/>
                </div>
        </div>
     );
}
 
export default ButtonBar;