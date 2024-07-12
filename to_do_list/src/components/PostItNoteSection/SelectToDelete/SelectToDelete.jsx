import {useRef} from 'react';
import './SelectToDelete.css';
import useAdjustDisplayHeight from '../../../hooks/useAdjustDisplayHeight';

const SelectToDelete = ({type, id, handleClickDeleteItem, task, itemToDelete, arrayOfPostItNoteToDoLists, isInEditMode}) => {
    const taskDisplayRef = useRef(null);
    useAdjustDisplayHeight(taskDisplayRef, task, isInEditMode, "27px", 9);

    return (  
        <div className={`select-to-delete-container--${type}`}>
            {(type === "post-it-note") ? (
                <div 
                    className={`select-to-delete--${type}`}
                    onClick={() => handleClickDeleteItem(id, itemToDelete, arrayOfPostItNoteToDoLists)}
                />
            ) : (
                <div 
                    className={`select-to-delete--${type}`}
                    ref={taskDisplayRef}
                    onClick={() => handleClickDeleteItem(id, itemToDelete)}
                >
                    {task}
                </div>
            )}
        </div>
    );
}
 
export default SelectToDelete;