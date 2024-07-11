import {useRef, useState, useEffect} from 'react';
import useLocalStoredTextarea from '../../../../hooks/useLocalStoredTextarea';
import './ToDoListHeader.css';
import useAdjustTextareaHeight from '../../../../hooks/useAdjustTextareaHeight';

const ToDoListHeader = ({toDoListId, isInEditMode}) => {
    const [header, setHeader] = useState(null);
    const headerInputRef = useRef(null);
    const headerDisplayRef = useRef(null);
    const {handleChangeKeyboardInput} = useLocalStoredTextarea(toDoListId, header, setHeader, headerInputRef);
    useAdjustTextareaHeight(headerInputRef, isInEditMode, 0);
    
    // Adjusts the height of the task display to its proper height if it has not been edited yet
    useEffect(() => {
        if (headerDisplayRef.current) {
            if (!header) {
                headerDisplayRef.current.style.height = "41px";
            }
            else {
                headerDisplayRef.current.style.height =`${headerDisplayRef.current.scrollHeight}px`;
            }
        }
    }, [headerDisplayRef, header, isInEditMode])

    return (  
        <div className="header-container">
            {isInEditMode ? (
            <textarea 
                className="header-input"
                ref={headerInputRef}
                value={header}
                onChange={handleChangeKeyboardInput}
            />
            ) : (
            <div 
                className="header-display"
                ref={headerDisplayRef}
            >
                {header}
            </div>
            )}

            <div className="underline"/>
        </div>
    );
}
 
export default ToDoListHeader;