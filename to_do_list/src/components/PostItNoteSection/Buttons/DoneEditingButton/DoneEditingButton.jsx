import {useContext} from 'react';
import useDetectMouseHoverOver from '../../../../hooks/useDetectMouseHoverOver';
import './DoneEditingButton.css';
import {SelectedContext} from '../../../../providers/SelectedProvider';
import {handleOnClickDoneButton} from '../../../../utils/SectionUtils';

const DoneEditingButton = ({setTextareaIsSelected}) => {
    const {setSelectedItem} = useContext(SelectedContext);
    const {isHoveringOver, handleMouseEnterItem, handleMouseLeaveItem} = useDetectMouseHoverOver();

    return ( 
        <div className="done-button-container">
            <button 
                className={isHoveringOver ? "done-button cursor-enter" : "done-button cursor-leave"}
                onMouseEnter={handleMouseEnterItem}
                onMouseLeave={handleMouseLeaveItem}
                onClick={() => handleOnClickDoneButton(setSelectedItem, setTextareaIsSelected)}>
                <label className="done-editing-label">
                    Done Editing
                </label>
            </button>
        </div>
    );
}
 
export default DoneEditingButton;