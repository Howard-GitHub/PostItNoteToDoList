import {useEffect, useState} from 'react';
import './ExitDeleteSectionModeButton.css'

const ExitDeleteSectionModeButton = ({setIsInDeleteMode}) => {
    const [leftSideCoordinate, setLeftSideCoordinate] = useState(window.innerWidth / 2);
    const [topSideCoordinate, setTopSideCoordinate] = useState(window.innerHeight - 120);

    useEffect(() => {
        const handleButtonPlacement = () => {
            setLeftSideCoordinate(window.innerWidth / 2);
            setTopSideCoordinate(window.innerHeight - 120);
        }

        window.addEventListener("resize", handleButtonPlacement);

        return () => {
            window.removeEventListener("resize", handleButtonPlacement);
        }
    }, [])

    const handleOnClickExitDeleteMode = () => {
        setIsInDeleteMode(false);
    }

    return ( 
        <div className="exit-delete-section-mode-button-container">
            <div 
                className="exit-delete-section-mode-button"
                onClick={handleOnClickExitDeleteMode}
                style={{
                    top: topSideCoordinate,
                    left: leftSideCoordinate
                }}>

            </div>
        </div>
    );
}
 
export default ExitDeleteSectionModeButton;