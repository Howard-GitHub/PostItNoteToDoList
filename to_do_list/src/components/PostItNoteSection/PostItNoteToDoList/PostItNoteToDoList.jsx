import './PostItNoteToDoList.css';
import ToDoTask from './ToDoTask/ToDoTask';
import {useState} from 'react';
import SelectToDelete from '../SelectToDelete/SelectToDelete';
import AddItemButton from '../../ItemsButtonBar/Buttons/AddItemButton/AddItemButton';
import useLocalStoredArray from '../../../hooks/useLocalStoredArray';

const PostItNoteToDoList = ({id, isInDeleteMode, oneSectionIsEntered, isInEditMode, handleClickDeleteToDoList}) => {
    const [arrayOfTasks, setArrayOfTasks] = useState([]);
    const {handleOnClickAddNewItem, handleClickDeleteItem} = useLocalStoredArray(id, arrayOfTasks, setArrayOfTasks);
    
    return ( 
        <div className="to-do-list-container">
            <div 
                className="to-do-list">
                <div className="tasks-container">
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
                            handleOnClickAddNewItem={handleOnClickAddNewItem}
                        />
                    }
                </div> 
                {(isInDeleteMode && oneSectionIsEntered) &&
                    <SelectToDelete
                        type={"post-it-note"}
                        id={id}
                        handleClickDeleteItem={handleClickDeleteToDoList}
                    />
                }
            </div>
        </div>
    );
}
 
export default PostItNoteToDoList;