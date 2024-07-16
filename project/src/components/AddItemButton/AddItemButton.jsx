import './AddItemButton.css';

// Image by michael-kouassi - link: https://pixabay.com/illustrations/signe-plus-black-1923369/ - from Pixabay
import plusImage from '../../assets/plus.png';

const AddItemButton = ({handleClickAddItem, type}) => {

    return ( 
        <div className={`add-item-container add-item-container--${type}`}>
            {(type === "post-it-note") ? (
                <button 
                    className="add-item-button add-item-button--post-it-note"
                    onClick={handleClickAddItem}
                >
                    <img 
                        className="add-item-button--post-it-note__plus"
                        src={plusImage}
                    />
                </button>
            ) : (
                <button
                    className="add-item-button add-item-button--task"
                    onClick={handleClickAddItem}
                >
                    Add Task
                </button>
            )}   

        </div>
    );
}
 
export default AddItemButton;