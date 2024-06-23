import {handleOnClickToDeleteItem} from "../../../utils/ModifyArrayUtils";
import './SelectToDelete.css';

const SelectToDelete = ({type, id, deleteComponentRef, arrayOfItems, setArrayOfItems}) => {

    return (  
        <div 
            className={`select-to-delete select-to-delete--${type}`}
            ref={deleteComponentRef}
            onClick={() => handleOnClickToDeleteItem(id, arrayOfItems, setArrayOfItems)}
        />
    );
}
 
export default SelectToDelete;