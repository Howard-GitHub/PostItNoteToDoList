import {handleOnChangeKeyboardInput} from '../../../../utils/SectionUtils';
import SelectToDelete from '../../SelectToDelete/SelectToDelete';
import './ToDoTask.css';
import {useRef, useState, useEffect} from "react";
import {handleChangeComponentHeight} from '../../../../utils/SectionUtils';

const ToDoTask = ({id, isInEditMode, handleClickDeleteTask}) => {
    const [task, setTask] = useState("");
    const taskRef = useRef();
    const deleteComponentRef = useRef();

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
                onChange={(event) => handleOnChangeKeyboardInput(event, taskRef, setTask, '30px')}
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