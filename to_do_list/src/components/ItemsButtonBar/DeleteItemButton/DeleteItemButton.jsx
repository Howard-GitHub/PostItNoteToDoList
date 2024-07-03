import './DeleteItemButton.css';

const DeleteItemButton = ({handleClickEnterDeleteMode, setIsInDeleteMode}) => {
    return ( 
        <div className="delete-item-button-container">
            <button 
                className="delete-item-button"
                onClick={() => handleClickEnterDeleteMode(setIsInDeleteMode)}>
            </button>
        </div>
    );
}
 
export default DeleteItemButton;