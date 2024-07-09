import './SelectToDelete.css';

const SelectToDelete = ({type, id, deleteComponentRef, handleClickDeleteItem, task, itemToDelete, arrayOfPostItNoteToDoLists}) => {

    return (  
        <div className={`select-to-delete-container--${type}`}>
            {(type === "post-it-note") ? (
                <div 
                    className={`select-to-delete--${type}`}
                    ref={deleteComponentRef}
                    onClick={() => handleClickDeleteItem(id, itemToDelete, arrayOfPostItNoteToDoLists)}
                />
            ) : (
                <div 
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