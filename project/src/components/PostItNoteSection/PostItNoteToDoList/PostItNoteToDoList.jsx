import './PostItNoteToDoList.css';
import ToDoTask from './ToDoTask/ToDoTask';
import {useState, useEffect} from 'react';
import SelectToDelete from '../SelectToDelete/SelectToDelete';
import AddItemButton from '../../AddItemButton/AddItemButton';
import useLocalStoredArray from '../../../hooks/useLocalStoredArray';
import ToDoListHeader from './ToDoListHeader/ToDoListHeader';
import HeaderButton from './HeaderButton/HeaderButton';

const PostItNoteToDoList = ({id, isInDeleteMode, oneSectionIsEntered, isInEditMode, handleClickDeleteToDoList}) => {
    const [arrayOfTasks, setArrayOfTasks] = useState([]);
    const {handleClickAddItem, handleClickDeleteItem} = useLocalStoredArray(id, arrayOfTasks, setArrayOfTasks);
    const [displayHeader, setDisplayHeader] = useState(null);

    // Determines if the to do list header appears based on the local storage
    useEffect(() => {
        const localKey = "text:" + id;
        const locallyStoredHeader = localStorage.getItem(localKey);
        if (locallyStoredHeader != null) {
            setDisplayHeader(true);
        }
        else {
            setDisplayHeader(false);
        }
    }, [])
    
    return ( 
        <div className="to-do-list-container">
            <div className="to-do-list">
                <div className="to-do-list__tasks-container">
                    {displayHeader &&
                        <ToDoListHeader 
                            toDoListId={id}
                            isInEditMode={isInEditMode}
                        />
                    }
                    {(isInEditMode && !isInDeleteMode) &&
                        <HeaderButton
                            toDoListId={id}
                            displayHeader={displayHeader}
                            setDisplayHeader={setDisplayHeader}
                        />
                    }
                    {(arrayOfTasks !== null) &&
                        arrayOfTasks.map((task) => (
                            <ToDoTask
                                key={task.id}
                                id={task.id}
                                isInEditMode={isInEditMode}
                                handleClickDeleteTask={handleClickDeleteItem}
                            />
                        ))
                    }
                    {(isInEditMode && !isInDeleteMode) &&
                        <AddItemButton
                            handleClickAddItem={handleClickAddItem}
                            type={"task"}
                        />
                    }
                </div> 
                {(isInDeleteMode && oneSectionIsEntered) &&
                    <SelectToDelete
                        type={"post-it-note"}
                        id={id}
                        handleClickDeleteItem={handleClickDeleteToDoList}
                        itemToDelete={"toDoList"}
                    />
                }
            </div>
        </div>
    );
}
 
export default PostItNoteToDoList;