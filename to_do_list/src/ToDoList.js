import {useState} from 'react';
import './ToDoList.css'
import PostItNoteStack from './PostItNoteStack';
import AddNewStackButton from './AddNewStackButton';

const ToDoList = () => {
    const [arrayOfStacks, setArrayOfStacks] = useState([]);

    return ( 
        <div className="dashboard-container">

            {arrayOfStacks.map(() => (
                <PostItNoteStack />
            ))}


            <AddNewStackButton arrayOfStacks={arrayOfStacks} setArrayOfStacks={setArrayOfStacks}/>
            
        </div>
    );
}
 
export default ToDoList;