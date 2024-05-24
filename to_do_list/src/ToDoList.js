import {useState} from 'react';
import './ToDoList.css'
import PostItNoteStack from './PostItNoteStack';
import AddNewStackButton from './AddNewStackButton';
import ButtonBar from './ButtonBar';

const ToDoList = () => {
    
    // Contains the post it note stack. A post it note stack contains multiple post it notes and is supposed to represent
    // a stack of post it notes that contains one or more post it notes
    const [arrayOfStacks, setArrayOfStacks] = useState([]);

    return ( 
        <div className="dashboard-container">

            {arrayOfStacks.map((singlePostItNoteStack) => (
                <PostItNoteStack 
                    key={singlePostItNoteStack.id}
                />
            ))}






            <ButtonBar arrayOfStacks={arrayOfStacks} setArrayOfStacks={setArrayOfStacks}/>
            
        </div>
    );
}
 
export default ToDoList;