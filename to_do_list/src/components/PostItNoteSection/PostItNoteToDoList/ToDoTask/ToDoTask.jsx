import SelectToDelete from '../../SelectToDelete/SelectToDelete';
import './ToDoTask.css';
import {useRef, useState, useEffect} from "react";
import useLocalStoredTextarea from '../../../../hooks/useLocalStoredTextarea';
import {handleKeyDownEnter} from '../../../../utils/SectionUtils';

const ToDoTask = ({id, isInEditMode, handleClickDeleteTask}) => {
    const [task, setTask] = useState(null);
    const taskRef = useRef();
    const {handleChangeKeyboardInput} = useLocalStoredTextarea(id, task, setTask, taskRef);

    // Sets the height of the textarea containing the task to its proper height when entering edit mode
    useEffect(() => {
        if (taskRef.current) {
            taskRef.current.style.height = `${taskRef.current.scrollHeight}px`;
        }
    }, [isInEditMode])

    return ( 
        <div className="task-container">
            <div className="bullet-point"/>
                {isInEditMode ? (
                    <textarea 
                        className="task-input"
                        ref={taskRef}
                        value={task}
                        onKeyDown={(event) => handleKeyDownEnter(event)}
                        onChange={(event) => handleChangeKeyboardInput(event)}
                    />
                ) : (
                    <SelectToDelete 
                        type={"task"}
                        itemToDelete={"task"}
                        id={id}
                        handleClickDeleteItem={handleClickDeleteTask}
                        task={task}
                    />
                )}
        </div>
    );
}
 
export default ToDoTask;