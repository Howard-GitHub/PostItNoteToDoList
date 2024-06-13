import {handleOnClickExitDeleteMode} from '../../utils/ModifyArrayUtils';
import './ExitDeleteItemModeButton.css'

const ExitDeleteItemModeButton = ({setIsInDeleteMode}) => {
    return ( 
        <div className="exit-delete-section-mode-button-container">
            <button 
                className="exit-delete-section-mode-button"
                onClick={() => handleOnClickExitDeleteMode(setIsInDeleteMode)}>
            </button>
        </div>
    );
}
 
export default ExitDeleteItemModeButton;