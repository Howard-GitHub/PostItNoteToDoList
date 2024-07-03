import {handleClickEdit} from '../../../../utils/SectionUtils';
import './EditButton.css';

const EditButton = ({isInEditMode, setIsInEditMode}) => {
    return (  
        <div className="edit-button-container">
            <button 
                className="edit-button"
                onClick={() => handleClickEdit(isInEditMode, setIsInEditMode)}>
                {isInEditMode ? (
                    <label className="edit-label">
                        Done
                    </label>
                ):(
                    <label className="edit-label">
                        Edit
                    </label>
                )
                }
            </button>
        </div>
    );
}
 
export default EditButton;