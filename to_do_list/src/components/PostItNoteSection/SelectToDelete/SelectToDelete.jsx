import {useRef, useEffect, useState} from 'react';
import './SelectToDelete.css';

const SelectToDelete = ({type, id, handleClickDeleteItem, task, itemToDelete, arrayOfPostItNoteToDoLists}) => {
    const taskDisplayRef = useRef(null);

    
    useEffect(() => {
        if (taskDisplayRef.current && (taskDisplayRef.current.scrollHeight < 37)) {
            taskDisplayRef.current.style.height = "27px";
        }
    }, [taskDisplayRef])

    return (  
        <div className={`select-to-delete-container--${type}`}>
            {(type === "post-it-note") ? (
                <div 
                    className={`select-to-delete--${type}`}
                    onClick={() => handleClickDeleteItem(id, itemToDelete, arrayOfPostItNoteToDoLists)}
                />
            ) : (
                <div 
                    ref={taskDisplayRef}
                    className={`select-to-delete--${type}`}
                    onClick={() => handleClickDeleteItem(id, itemToDelete)}
                >
                    {task}
                </div>
            )}
        </div>
    );
}
 
export default SelectToDelete;