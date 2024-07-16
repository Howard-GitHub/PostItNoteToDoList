import './DeleteItemButton.css';
import trashCanImage from '../../../assets/trashcan-293989_1280.png';

const DeleteItemButton = ({handleClickEnterDeleteMode, setIsInDeleteMode}) => {
    return ( 
        <div className="delete-item-button-container">
            <button 
                className="delete-item-button"
                onClick={() => handleClickEnterDeleteMode(setIsInDeleteMode)}>
                    <img
                        className="delete-item-button__trash-can-image"
                        src={trashCanImage}
                    />
            </button>
        </div>
    );
}
 
export default DeleteItemButton;