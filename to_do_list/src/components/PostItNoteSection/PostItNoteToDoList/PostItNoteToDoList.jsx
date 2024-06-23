import './PostItNoteToDoList.css';
import ToDoTask from './ToDoTask/ToDoTask';
import {useState} from 'react';
import SelectToDelete from '../SelectToDelete/SelectToDelete';
import AddNewItemButton from '../../ItemsButtonBar/Buttons/AddNewItemButton/AddNewItemButton';
import useLocalStoredArray from '../../../hooks/useLocalStoredArray';

const PostItNoteToDoList = ({id, isInDeleteMode, arrayOfPostItNoteToDoLists, setArrayOfPostItNoteToDoLists, oneSectionIsEntered, isInEditMode}) => {
    const [arrayOfTasks, setArrayOfTasks] = useState([]);
    const {handleOnClickAddNewItem} = useLocalStoredArray(id, arrayOfTasks, setArrayOfTasks);
    
    return ( 
        <div className="to-do-list-container">
            <div 
                className="to-do-list">
                <div className="checkboxes-container">
                    {arrayOfTasks.map((task) => (
                        <ToDoTask
                            key={task.id}
                            id={task.id}
                            arrayOfTasks={arrayOfTasks}
                            setArrayOfTasks={setArrayOfTasks}
                            isInEditMode={isInEditMode}
                        />
                    ))}
                    {(isInEditMode && !isInDeleteMode) &&
                        <AddNewItemButton
                            arrayOfItems={arrayOfTasks}
                            setArrayOfItems={setArrayOfTasks}
                            handleOnClickAddNewItem={handleOnClickAddNewItem}
                        />
                    }
                </div> 
                {(isInDeleteMode && oneSectionIsEntered) &&
                    <SelectToDelete
                        type={"post-it-note"}
                        id={id}
                        arrayOfItems={arrayOfPostItNoteToDoLists}
                        setArrayOfItems={setArrayOfPostItNoteToDoLists}
                    />
                }
            </div>
        </div>
    );
}
 
export default PostItNoteToDoList;