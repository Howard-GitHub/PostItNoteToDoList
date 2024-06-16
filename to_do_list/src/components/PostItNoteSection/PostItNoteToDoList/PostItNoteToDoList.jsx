import './PostItNoteToDoList.css';
import {handleOnClickAddNewItem, handleOnClickToDeleteItem} from '../../../utils/ModifyArrayUtils';
import useDetectMouseHoverOver from '../../../hooks/useDetectMouseHoverOver';
import ToDoTask from './ToDoTask/ToDoTask';
import {useState} from 'react';

const PostItNoteToDoList = ({id, isInDeleteMode, arrayOfPostItNoteToDoLists, setArrayOfPostItNoteToDoLists, oneSectionIsEntered, isInEditMode}) => {
    const {isHoveringOver, handleMouseEnterItem, handleMouseLeaveItem} = useDetectMouseHoverOver();
    const [arrayOfTasks, setArrayOfTasks] = useState([]);
    
    return ( 
        <div className="to-do-list-container">
            <div 
                className="to-do-list">
                {(isInDeleteMode && oneSectionIsEntered) &&
                    <div 
                        className={isHoveringOver ? "select-to-delete cursor-enter" : "select-to-delete cursor-leave"}
                        onMouseEnter={handleMouseEnterItem}
                        onMouseLeave={handleMouseLeaveItem}
                        onClick={() => handleOnClickToDeleteItem(id, arrayOfPostItNoteToDoLists, setArrayOfPostItNoteToDoLists)}
                    />
                }
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
            </div>
        </div>
    );
}
 
export default PostItNoteToDoList;