import {handleOnClickExitDeleteMode} from '../../utils/ModifyArrayUtils';
import './ExitDeleteItemModeButton.css'

const ExitDeleteItemModeButton = ({setIsInDeleteMode}) => {
    return ( 
        <div className="exit-delete-section-mode-button-container">
            <div 
                className="exit-delete-section-mode-button"
                onClick={() => handleOnClickExitDeleteMode(setIsInDeleteMode)}>
            </div>
        </div>
    );
}
 
export default ExitDeleteItemModeButton;