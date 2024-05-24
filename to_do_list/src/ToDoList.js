import {useState} from 'react';
import PostItNoteStack from './PostItNoteStack';
import ButtonBar from './ButtonBar';
import {v4 as uuidv4} from 'uuid';
import ExitDeleteStackModeButton from './ExitDeleteStackModeButton';
import './ToDoList.css'



const ToDoList = () => {
    
    const initialStack = () => {
        id: uuidv4()
    }

    // Contains the post it note stack. A post it note stack contains multiple post it notes or "a stack of post it notes" and is supposed to
    // contain one or more individual post it notes
    const [arrayOfStacks, setArrayOfStacks] = useState([initialStack]);
    const [isInDeleteMode, setIsInDeleteMode] = useState(false);

    return ( 
        <div className="dashboard-container">
            {isInDeleteMode && 
                <ExitDeleteStackModeButton 
                    setIsInDeleteMode={setIsInDeleteMode}
                    arrayOfStacks={arrayOfStacks}
                    setArrayOfStacks={setArrayOfStacks}/>
            }

            {arrayOfStacks.map((singlePostItNoteStack) => (
                <PostItNoteStack 
                    key={singlePostItNoteStack.id}
                    id={singlePostItNoteStack.id}
                    isInDeleteMode={isInDeleteMode}
                    arrayOfStacks={arrayOfStacks}
                    setArrayOfStacks={setArrayOfStacks}/>
            ))}

            {!isInDeleteMode &&
                <ButtonBar 
                    arrayOfStacks={arrayOfStacks} 
                    setArrayOfStacks={setArrayOfStacks}
                    isInDeleteMode={isInDeleteMode}
                    setIsInDeleteMode={setIsInDeleteMode}/>
            }
            
        </div>
    );
}
 
export default ToDoList;