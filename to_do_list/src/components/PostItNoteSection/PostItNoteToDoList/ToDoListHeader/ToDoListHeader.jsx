import {useRef, useState} from 'react';
import useLocalStoredTextarea from '../../../../hooks/useLocalStoredTextarea';
import './ToDoListHeader.css';
import useAdjustTextareaHeight from '../../../../hooks/useAdjustTextareaHeight';
import useAdjustDisplayHeight from '../../../../hooks/useAdjustDisplayHeight';

const ToDoListHeader = ({toDoListId, isInEditMode}) => {
    const [header, setHeader] = useState(null);
    const headerInputRef = useRef(null);
    const headerDisplayRef = useRef(null);
    const {handleChangeKeyboardInput} = useLocalStoredTextarea(toDoListId, header, setHeader, headerInputRef);
    useAdjustTextareaHeight(headerInputRef, isInEditMode, 0);
    useAdjustDisplayHeight(headerDisplayRef, header, isInEditMode, "41px", 0);
    

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