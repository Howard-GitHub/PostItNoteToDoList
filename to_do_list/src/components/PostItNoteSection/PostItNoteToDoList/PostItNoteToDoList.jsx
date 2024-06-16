import './PostItNoteToDoList.css';
import {handleOnClickAddNewItem} from '../../../utils/ModifyArrayUtils';
import ToDoTask from './ToDoTask/ToDoTask';
import {useState} from 'react';
import SelectToDelete from '../SelectToDelete/SelectToDelete';

const PostItNoteToDoList = ({id, isInDeleteMode, arrayOfPostItNoteToDoLists, setArrayOfPostItNoteToDoLists, oneSectionIsEntered, isInEditMode}) => {
    const [arrayOfTasks, setArrayOfTasks] = useState([]);
    
    return ( 
        <div className="to-do-list-container">
            <div 
                className="to-do-list">
                <div className="checkboxes-container">
                    {arrayOfTasks.map((task) => (
                        <ToDoTask
                            key={task.id}
                            id={task.id}
                            arrayOfTasks={arrayOfTasks}
                            setArrayOfTasks={setArrayOfTasks}
                            isInEditMode={isInEditMode}
                        />
                    ))}
                    {(isInEditMode && !isInDeleteMode) &&
                        <button
                            className="add-task-button"
                            onClick={() => handleOnClickAddNewItem(arrayOfTasks, setArrayOfTasks)}
                        >
                            Add Task
                        </button>
                    }
                </div> 
                {(isInDeleteMode && oneSectionIsEntered) &&
                    <SelectToDelete
                        id={id}
                        arrayOfItems={arrayOfPostItNoteToDoLists}
                        setArrayOfItems={setArrayOfPostItNoteToDoLists}
                    />
                }
            </div>
        </div>
    );
}
 
export default PostItNoteToDoList;