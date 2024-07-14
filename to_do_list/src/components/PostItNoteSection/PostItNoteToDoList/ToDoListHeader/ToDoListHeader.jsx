import {useRef, useState} from 'react';
import useLocalStoredTextarea from '../../../../hooks/useLocalStoredTextarea';
import './ToDoListHeader.css';
import useAdjustTextareaHeight from '../../../../hooks/useAdjustTextareaHeight';
import useAdjustDisplayHeight from '../../../../hooks/useAdjustDisplayHeight';
import {handleKeyDownEnter} from '../../../../utils/SectionUtils';

const ToDoListHeader = ({toDoListId, isInEditMode}) => {
    const [header, setHeader] = useState("");
    const headerInputRef = useRef(null);
    const headerDisplayRef = useRef(null);
    const {handleChangeKeyboardInput} = useLocalStoredTextarea(toDoListId, header, setHeader, headerInputRef);
    useAdjustTextareaHeight(headerInputRef, header, isInEditMode, -3);
    useAdjustDisplayHeight(headerDisplayRef, header, isInEditMode, "41px", 0);
    
    return (  
        <div className="header-container">
            {isInEditMode ? (
            <textarea 
                className="header--input"
                ref={headerInputRef}
                value={header}
                onKeyDown={(event) => handleKeyDownEnter(event)}
                onChange={handleChangeKeyboardInput}
            />
            ) : (
            <div 
                className="header--display"
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