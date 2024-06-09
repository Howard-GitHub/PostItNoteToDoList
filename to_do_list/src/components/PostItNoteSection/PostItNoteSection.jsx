import {useState, useContext, useRef} from 'react';
import {handleOnClickToDeleteItem} from '../../utils/ModifyArrayUtils';
import './PostItNoteSection.css'
import DoneEditingButton from './Buttons/DoneEditingButton';
import useDetectMouseHoverOver from '../../hooks/useDetectMouseHoverOver';
import {handleOnChangeKeyboardInput, handleOnFocusTextarea, handleOnClickToEnterSection} from '../../utils/SectionUtils';
import {SelectedContext} from '../../providers/SelectedProvider';
import IndividualPostItNote from './IndividualPostItNote/IndividualPostItNote';
import SectionButtons from './SectionButtons';



const PostItNoteSection = ({id, isInDeleteMode, setIsInDeleteMode, arrayOfSections, setArrayOfSections, oneSectionIsEntered, setOneSectionIsEntered, selectedSection, setSelectedSection}) => {
    const [title, setTitle] = useState();
    const titleRef = useRef();
    const {isHoveringOver, handleMouseEnterItem, handleMouseLeaveItem} = useDetectMouseHoverOver();
    const [arrayOfIndividualPostItNotes, setArrayOfIndividualPostItNotes] = useState([]);
    const {selectedItem, setSelectedItem,
           textareaIsSelected, setTextareaIsSelected} = useContext(SelectedContext);
 

    return (             
    (!oneSectionIsEntered || (selectedSection === id)) && 
    (<div className="post-it-note-section-container">
        <div className="front-post-it-note-container">
            <div className="front-post-it-note">

                {(isInDeleteMode && !oneSectionIsEntered) &&
                    <div 
                        className={isHoveringOver ? "select-to-delete cursor-enter" : "select-to-delete cursor-leave"}
                        onMouseEnter={handleMouseEnterItem}
                        onMouseLeave={handleMouseLeaveItem}
                        onClick={() => handleOnClickToDeleteItem(id, arrayOfSections, setArrayOfSections)}/>}

                {((selectedItem !== id) && (selectedItem !== null)) && 
                    <div className="block-from-selecting"/>}

                {((!oneSectionIsEntered && !isInDeleteMode) && 
                    <div 
                        className="select-to-enter-section"
                        onClick={() => handleOnClickToEnterSection(id, setOneSectionIsEntered, setSelectedSection)}/>)}

                <textarea
                    className="title"
                    ref={titleRef}
                    value={title}
                    onChange={(event) => handleOnChangeKeyboardInput(event, titleRef, setTitle)}
                    placeholder="Untitled"
                    onFocus={() => handleOnFocusTextarea(id, selectedItem, setSelectedItem, setTextareaIsSelected)}/>
            </div>

            {(textareaIsSelected && (selectedItem == id)) &&
                <DoneEditingButton 
                    setTextareaIsSelected={setTextareaIsSelected}/>}
        </div>

        <SectionButtons 
            id={id}
            textareaIsSelected={textareaIsSelected}
            setTextareaIsSelected={setTextareaIsSelected}
            selectedItem={selectedItem}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
            isInDeleteMode={isInDeleteMode}
            setIsInDeleteMode={setIsInDeleteMode}
            setOneSectionIsEntered={setOneSectionIsEntered}
            arrayOfIndividualPostItNotes={arrayOfIndividualPostItNotes}
            setArrayOfIndividualPostItNotes={setArrayOfIndividualPostItNotes}
        />

        {(selectedSection === id) &&
            <div className="section-dashboard">
                {arrayOfIndividualPostItNotes.map((singlePostItNote) => (
                    <IndividualPostItNote 
                        key={singlePostItNote.id}
                        id={singlePostItNote.id}
                        isInDeleteMode={isInDeleteMode}
                        arrayOfIndividualPostItNotes={arrayOfIndividualPostItNotes}
                        setArrayOfIndividualPostItNotes={setArrayOfIndividualPostItNotes}
                        oneSectionIsEntered={oneSectionIsEntered}/>
                ))}
            </div>}
    </div> )
    );
}
 
export default PostItNoteSection;
