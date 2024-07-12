import SelectToDelete from '../../SelectToDelete/SelectToDelete';
import './ToDoTask.css';
import {useRef, useState, useEffect} from "react";
import useLocalStoredTextarea from '../../../../hooks/useLocalStoredTextarea';
import {handleKeyDownEnter} from '../../../../utils/SectionUtils';
import useAdjustTextareaHeight from '../../../../hooks/useAdjustTextareaHeight';

const ToDoTask = ({id, isInEditMode, handleClickDeleteTask}) => {
    const [task, setTask] = useState("");
    const taskRef = useRef();
    const {handleChangeKeyboardInput} = useLocalStoredTextarea(id, task, setTask, taskRef);
    useAdjustTextareaHeight(taskRef, isInEditMode, 0);

    return ( 
        <div className="task-container">
            <div className="bullet-point"/>
                {isInEditMode ? (
                    <textarea 
                        className="task--input"
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
                        isInEditMode={isInEditMode}
                    />
                )}
        </div>
    );
}
 
export default ToDoTask;