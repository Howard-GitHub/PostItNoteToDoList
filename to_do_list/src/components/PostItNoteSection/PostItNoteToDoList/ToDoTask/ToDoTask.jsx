import SelectToDelete from '../../SelectToDelete/SelectToDelete';
import './ToDoTask.css';
import {useRef, useState, useEffect} from "react";
import useLocalStoredTextarea from '../../../../hooks/useLocalStoredTextarea';
import {handleKeyDownEnter} from '../../../../utils/SectionUtils';

const ToDoTask = ({id, isInEditMode, handleClickDeleteTask}) => {
    const [task, setTask] = useState("");
    const taskRef = useRef();
    const {handleChangeKeyboardInput} = useLocalStoredTextarea(id, task, setTask, taskRef, '30px');

    useEffect(() => {
        if (taskRef.current) {
            taskRef.current.style.height = `${taskRef.current.scrollHeight}px`;
        }
    }, [isInEditMode])

    return ( 
        <div className="to-do-task-container">
            <div className="bullet-point"/>
                {isInEditMode ? (
                    <textarea 
                        className="task-name"
                        ref={taskRef}
                        value={task}
                        onKeyDown={(event) => handleKeyDownEnter(event)}
                        onChange={(event) => handleChangeKeyboardInput(event)}
                    />
                ) : (
                    <SelectToDelete 
                        type={"task"}
                        id={id}
                        handleClickDeleteItem={handleClickDeleteTask}
                        task={task}
                    />
                )}
        </div>
    );
}
 
export default ToDoTask;