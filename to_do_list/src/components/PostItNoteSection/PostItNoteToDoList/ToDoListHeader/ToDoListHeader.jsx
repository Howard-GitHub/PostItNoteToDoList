import {useRef, useState, useEffect} from 'react';
import useLocalStoredTextarea from '../../../../hooks/useLocalStoredTextarea';
import './ToDoListHeader.css';

const ToDoListHeader = ({toDoListId, isInEditMode}) => {
    const [header, setHeader] = useState(null);
    const headerRef = useRef(null);
    const {handleChangeKeyboardInput} = useLocalStoredTextarea(toDoListId, header, setHeader, headerRef);

    // Sets the height of the textarea containing the task to its proper height when entering edit mode
    useEffect(() => {
        if (headerRef.current) {
            headerRef.current.style.height = `${headerRef.current.scrollHeight}px`;
        }
    }, [isInEditMode])

    return (  
        <div className="header-container">
            {isInEditMode ? (
            <textarea 
                className="header-input"
                ref={headerRef}
                value={header}
                onChange={handleChangeKeyboardInput}
            />
            ) : (
            <div className='header-display'>
                {header}
            </div>
            )}

            <div className="underline"/>
        </div>
    );
}
 
export default ToDoListHeader;