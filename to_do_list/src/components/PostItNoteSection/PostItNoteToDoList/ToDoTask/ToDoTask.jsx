import SelectToDelete from '../../SelectToDelete/SelectToDelete';
import './ToDoTask.css';
import {useRef, useState, useEffect} from "react";
import useLocalStoredTextarea from '../../../../hooks/useLocalStoredTextarea';

const ToDoTask = ({id, isInEditMode, handleClickDeleteTask}) => {
    const [task, setTask] = useState("");
    const taskRef = useRef();
    const deleteComponentRef = useRef();
    const {handleChangeKeyboardInput, handleChangeComponentHeight} = useLocalStoredTextarea(id, task, setTask, taskRef, '30px', deleteComponentRef);

    useEffect(() => {
        handleChangeComponentHeight(deleteComponentRef);
    }, [isInEditMode])


    return ( 
        <div className="to-do-task-container">
            <div className="bullet-point"/>
            <textarea 
                className="task-name"
                ref={taskRef}
                value={task}
                onChange={(event) => handleChangeKeyboardInput(event)}
            />
            
            {!isInEditMode &&
                <SelectToDelete 
                    type={"task"}
                    id={id}
                    deleteComponentRef={deleteComponentRef}
                    handleClickDeleteItem={handleClickDeleteTask}
                />
            }
        </div>
    );
}
 
export default ToDoTask;