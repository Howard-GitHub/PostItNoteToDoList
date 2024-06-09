import {useState, useContext, useRef} from 'react';
import './PostItNoteSection.css'
import DoneEditingButton from './Buttons/DoneEditingButton';
import {SelectedContext} from '../../providers/SelectedProvider';
import IndividualPostItNote from './IndividualPostItNote/IndividualPostItNote';
import SectionButtons from './SectionButtons';
import PostItNoteTitle from './PostItNoteTitle/PostItNoteTitle';



const PostItNoteSection = ({id, isInDeleteMode, setIsInDeleteMode, arrayOfSections, setArrayOfSections, oneSectionIsEntered, setOneSectionIsEntered, selectedSection, setSelectedSection}) => {
    const [title, setTitle] = useState();
    const titleRef = useRef();
    const [arrayOfIndividualPostItNotes, setArrayOfIndividualPostItNotes] = useState([]);
    const {selectedItem, setSelectedItem,
           textareaIsSelected, setTextareaIsSelected} = useContext(SelectedContext);
 

    return (             
    (!oneSectionIsEntered || (selectedSection === id)) && 
    (<div className="post-it-note-section-container">
        <div className="front-post-it-note-container">

            <PostItNoteTitle
                id={id}
                titleRef={titleRef}
                isInDeleteMode={isInDeleteMode}
                oneSectionIsEntered={oneSectionIsEntered}
                arrayOfSections={arrayOfSections}
                setArrayOfSections={setArrayOfSections}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                setOneSectionIsEntered={setOneSectionIsEntered}
                setSelectedSection={setSelectedSection}
                setTextareaIsSelected={setTextareaIsSelected}
                title={title}
                setTitle={setTitle}
            />    
                
            {(textareaIsSelected && (selectedItem === id)) &&
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
