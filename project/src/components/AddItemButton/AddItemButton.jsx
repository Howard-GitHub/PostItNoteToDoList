import './AddItemButton.css';
import plusImage from '../../assets/signe-1923369_1280.png';

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