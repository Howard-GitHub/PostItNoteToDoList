import './SelectToDelete.css';

const SelectToDelete = ({type, id, deleteComponentRef, handleClickDeleteItem}) => {

    return (  
        <div 
            className={`select-to-delete select-to-delete--${type}`}
            ref={deleteComponentRef}
            onClick={() => handleClickDeleteItem(id)}
        />
    );
}
 
export default SelectToDelete;