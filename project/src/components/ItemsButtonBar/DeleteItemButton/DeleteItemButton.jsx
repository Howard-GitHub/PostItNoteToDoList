import './DeleteItemButton.css';

// Image by Clker-Free-Vector-Images - link: https://pixabay.com/vectors/trashcan-trash-bin-garbage-293989/ - from Pixabay
import trashCanImage from '../../../assets/trashCan.png';

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