import {useRef, useEffect} from 'react';
import './SelectToDelete.css';

const SelectToDelete = ({type, id, handleClickDeleteItem, task, itemToDelete, arrayOfPostItNoteToDoLists, isInEditMode}) => {
    const taskDisplayRef = useRef(null);

    // Sets the initial task display height
    useEffect(() => {
        if (taskDisplayRef.current) {
            if (!task) {
                taskDisplayRef.current.style.height = `27px`;
            }
            else {
                taskDisplayRef.current.style.height = `${taskDisplayRef.current.scrollHeight - 9}px`;
            }
        }
    }, [taskDisplayRef, task, isInEditMode])

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