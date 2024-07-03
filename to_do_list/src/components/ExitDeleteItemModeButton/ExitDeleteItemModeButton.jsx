import './ExitDeleteItemModeButton.css'

const ExitDeleteItemModeButton = ({setIsInDeleteMode, handleClickExitDeleteMode}) => {
    return ( 
        <div className="exit-delete-section-mode-button-container">
            <button 
                className="exit-delete-section-mode-button"
                onClick={() => handleClickExitDeleteMode(setIsInDeleteMode)}>
            </button>
        </div>
    );
}
 
export default ExitDeleteItemModeButton;