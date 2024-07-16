import './ExitDeleteItemModeButton.css'

const ExitDeleteItemModeButton = ({setIsInDeleteMode, handleClickExitDeleteMode}) => {
    return ( 
        <div className="exit-delete-mode-button-container">
            <button 
                className="exit-delete-mode-button"
                onClick={() => handleClickExitDeleteMode(setIsInDeleteMode)}>
                    {"< Back"}
            </button>
        </div>
    );
}
 
export default ExitDeleteItemModeButton;