import useDetectMouseHoverOver from '../../../../hooks/useDetectMouseHoverOver';
import {handleOnChangeKeyboardInput} from '../../../../utils/SectionUtils';
import './ToDoTask.css';
import {useRef, useState} from "react";

const ToDoTask = () => {
    const {isHoveringOver, handleMouseEnterItem, handleMouseLeaveItem} = useDetectMouseHoverOver();
    const [taskIsChecked, setTaskIsChecked] = useState(false);
    const [task, setTask] = useState("");
    const [isOnFocus, setIsOnFocus] = useState(false);
    const taskRef = useRef();

    const handleOnChangeCheckTask = () => {
        setTaskIsChecked(true);
    }

    const handleOnFocusTextarea = () => {
        setIsOnFocus(true);
    }

    const handleOnBlurTextarea = () => {
        setIsOnFocus(false);
    }

    return ( 
        <div className="to-do-task-container">
            <div className="bullet-point"/>
            <textarea 
                className={(isHoveringOver || isOnFocus) ? "task-name cursor-enter" : "task-name cursor-leave"}
                ref={taskRef}
                value={task}
                onChange={(event) => handleOnChangeKeyboardInput(event, taskRef, setTask, '30px')}
                onMouseEnter={handleMouseEnterItem}
                onMouseLeave={handleMouseLeaveItem}
                onFocus={handleOnFocusTextarea}
                onBlur={handleOnBlurTextarea}
            />
        </div>
    );
}
 
export default ToDoTask;