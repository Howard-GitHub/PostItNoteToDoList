import './SelectToDelete.css';

const SelectToDelete = ({type, id, deleteComponentRef, handleClickDeleteItem, task}) => {

    return (  
        <div className={`select-to-delete-container--${type}`}>
            {(type === "post-it-note") ? (
                <div 
                    className={`select-to-delete--${type}`}
                    ref={deleteComponentRef}
                    onClick={() => handleClickDeleteItem(id)}
                />
            ) : (
                <div 
                    className={`select-to-delete--${type}`}
                    onClick={() => handleClickDeleteItem(id)}
                >
                    {task}
                </div>
            )}
        </div>
    );
}
 
export default SelectToDelete;