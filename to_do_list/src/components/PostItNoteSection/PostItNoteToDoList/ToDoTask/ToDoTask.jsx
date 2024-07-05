import {handleChangeKeyboardInput} from '../../../../utils/SectionUtils';
import SelectToDelete from '../../SelectToDelete/SelectToDelete';
import './ToDoTask.css';
import {useRef, useState, useEffect} from "react";
import {handleChangeComponentHeight} from '../../../../utils/SectionUtils';
import useLocalStoredTextarea from '../../../../hooks/useLocalStoredTextarea';

const ToDoTask = ({id, isInEditMode, handleClickDeleteTask}) => {
    const [task, setTask] = useState("");
    const taskRef = useRef();
    const deleteComponentRef = useRef();
    const {} = useLocalStoredTextarea(id, task, setTask, taskRef, deleteComponentRef);

    useEffect(() => {
        handleChangeComponentHeight(deleteComponentRef, taskRef);
    }, [isInEditMode])


    return ( 
        <div className="to-do-task-container">
            <div className="bullet-point"/>
            <textarea 
                className="task-name"
                ref={taskRef}
                value={task}
                onChange={(event) => handleChangeKeyboardInput(event, taskRef, setTask, '30px')}
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