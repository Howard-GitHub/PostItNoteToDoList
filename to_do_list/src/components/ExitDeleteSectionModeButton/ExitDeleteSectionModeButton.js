import './ExitDeleteSectionModeButton.css'

const ExitDeleteSectionModeButton = ({setIsInDeleteMode}) => {
    const handleOnClickExitDeleteMode = () => {
        setIsInDeleteMode(false);
    }

    return ( 
        <div className="exit-delete-section-mode-button-container">
            <div 
                className="exit-delete-section-mode-button"
                onClick={handleOnClickExitDeleteMode}>

            </div>
        </div>
    );
}
 
export default ExitDeleteSectionModeButton;