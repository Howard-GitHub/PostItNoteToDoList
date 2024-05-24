import {useEffect, useState} from 'react';
import './ExitDeleteStackModeButton.css'

const ExitDeleteStackModeButton = ({setIsInDeleteMode}) => {
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
        <div className="exit-delete-stack-mode-button-container">
            <div 
                className="exit-delete-stack-mode-button"
                onClick={handleOnClickExitDeleteMode}
                style={{
                    top: topSideCoordinate,
                    left: leftSideCoordinate
                }}>

            </div>
        </div>
    );
}
 
export default ExitDeleteStackModeButton;