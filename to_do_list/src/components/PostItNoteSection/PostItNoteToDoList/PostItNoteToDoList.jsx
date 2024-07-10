import './PostItNoteToDoList.css';
import ToDoTask from './ToDoTask/ToDoTask';
import {useState} from 'react';
import SelectToDelete from '../SelectToDelete/SelectToDelete';
import AddItemButton from '../../AddItemButton/AddItemButton';
import useLocalStoredArray from '../../../hooks/useLocalStoredArray';
import ToDoListHeader from './ToDoListHeader/ToDoListHeader';

const PostItNoteToDoList = ({id, isInDeleteMode, oneSectionIsEntered, isInEditMode, handleClickDeleteToDoList}) => {
    const [arrayOfTasks, setArrayOfTasks] = useState([]);
    const {handleClickAddItem, handleClickDeleteItem} = useLocalStoredArray(id, arrayOfTasks, setArrayOfTasks);
    
    return ( 
        <div className="to-do-list-container">
            <div className="to-do-list">
                <div className="tasks-container">
                    <ToDoListHeader 
                        isInEditMode={isInEditMode}
                    />
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