import useDetectMouseHoverOver from '../../../../hooks/useDetectMouseHoverOver';
import useDetectOnFocus from '../../../../hooks/useDetectOnFocus';
import {handleOnChangeKeyboardInput} from '../../../../utils/SectionUtils';
import SelectToDelete from '../../SelectToDelete/SelectToDelete';
import './ToDoTask.css';
import {useRef, useState, useEffect} from "react";
import {handleChangeComponentHeight} from '../../../../utils/SectionUtils';

const ToDoTask = ({id, arrayOfTasks, setArrayOfTasks, isInEditMode}) => {
    const {isHoveringOver, handleMouseEnterItem, handleMouseLeaveItem} = useDetectMouseHoverOver();
    const {isOnFocus, handleOnFocusTextarea, handleOnBlurTextarea} = useDetectOnFocus();
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
                className={(isHoveringOver || isOnFocus) ? "task-name cursor-enter" : "task-name cursor-leave"}
                ref={taskRef}
                value={task}
                onChange={(event) => handleOnChangeKeyboardInput(event, taskRef, setTask, '30px')}
                onMouseEnter={handleMouseEnterItem}
                onMouseLeave={handleMouseLeaveItem}
                onFocus={handleOnFocusTextarea}
                onBlur={handleOnBlurTextarea}
            />
            
            {!isInEditMode &&
                <SelectToDelete 
                    id={id}
                    deleteComponentRef={deleteComponentRef}
                    arrayOfItems={arrayOfTasks}
                    setArrayOfItems={setArrayOfTasks}
                />
            }
        </div>
    );
}
 
export default ToDoTask;