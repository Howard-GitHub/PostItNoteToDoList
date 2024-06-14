import {handleOnChangeKeyboardInput} from '../../../../utils/SectionUtils';
import './ToDoTask.css';
import {useRef, useState} from "react";

const ToDoTask = () => {
    const [taskIsChecked, setTaskIsChecked] = useState(false);
    const [task, setTask] = useState("");
    const taskRef = useRef();

    const handleOnChangeCheckTask = () => {
        setTaskIsChecked(true);
    }

    return ( 
        <div className="to-do-task-container">
            <div className="bullet-point"/>
            <textarea 
                className="task-name"
                ref={taskRef}
                value={task}
                onChange={(event) => handleOnChangeKeyboardInput(event, taskRef, setTask, '30px')}
            />
        </div>
    );
}
 
export default ToDoTask;