import {handleClickEdit, handleClickDoneEdit} from '../../../../utils/SectionUtils';
import './EditButton.css';

const EditButton = ({isInEditMode, setIsInEditMode}) => {
    return (  
        <div className="edit-button-container">
            {isInEditMode ? (
                <button className="edit-button edit-button--done"
                onClick={() => handleClickDoneEdit(setIsInEditMode)}>
                    Done
                </button>
            ):(
                <button className="edit-button edit-button--edit"
                onClick={() => handleClickEdit(setIsInEditMode)}>
                    Edit
                </button>
            )}
        </div>
    );
}
 
export default EditButton;