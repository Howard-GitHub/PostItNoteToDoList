import {handleOnClickToEnterDeleteMode} from '../../../../utils/ModifyArrayUtils';
import './DeleteItemButton.css';

const DeleteItemButton = ({setIsInDeleteMode}) => {
    return ( 
        <div className="delete-item-button-container">
            <button 
                className="delete-item-button"
                onClick={() => handleOnClickToEnterDeleteMode(setIsInDeleteMode)}>
            </button>
        </div>
    );
}
 
export default DeleteItemButton;