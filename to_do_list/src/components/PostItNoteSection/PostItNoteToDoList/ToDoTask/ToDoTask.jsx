import SelectToDelete from '../../SelectToDelete/SelectToDelete';
import './ToDoTask.css';
import {useRef, useState, useEffect} from "react";
import useLocalStoredTextarea from '../../../../hooks/useLocalStoredTextarea';
import {handleKeyDownEnter} from '../../../../utils/SectionUtils';

const ToDoTask = ({id, isInEditMode, handleClickDeleteTask}) => {
    const [task, setTask] = useState(null);
    const taskRef = useRef();
    const [taskInputHeight, setTaskInputHeight] = useState(null);
    const {handleChangeKeyboardInput} = useLocalStoredTextarea(id, task, setTask, taskRef, '30px');

    useEffect(() => {
        if (taskRef.current) {
            taskRef.current.style.height = `${taskRef.current.scrollHeight}px`;
        }
    }, [isInEditMode])

    /*
    useEffect(() => {
        if (taskRef.current) {
            setTaskInputHeight(taskRef.current.scrollHeight);
            console.log(taskInputHeight);
        }
    }, [task])*/

    return ( 
        <div className="to-do-task-container">
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
                        taskInputHeight={taskInputHeight}
                    />
                )}
        </div>
    );
}
 
export default ToDoTask;