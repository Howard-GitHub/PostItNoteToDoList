import {useState, useContext, useRef} from 'react';
import './PostItNoteSection.css'
import {SelectedContext} from '../../providers/SelectedProvider';
import PostItNoteToDoList from './PostItNoteToDoList/PostItNoteToDoList';
import SectionButtons from './SectionButtons/SectionButtons';
import PostItNoteTitle from './PostItNoteTitle/PostItNoteTitle';



const PostItNoteSection = ({id, isInDeleteMode, setIsInDeleteMode, arrayOfSections, setArrayOfSections, oneSectionIsEntered, setOneSectionIsEntered, selectedSection, setSelectedSection}) => {
    const [title, setTitle] = useState("");
    const [isInEditMode, setIsInEditMode] = useState(false);
    const titleRef = useRef();
    const [arrayOfPostItNoteToDoLists, setArrayOfPostItNoteToDoLists] = useState([]);
    const {selectedItem, setSelectedItem} = useContext(SelectedContext);
 

    return (             
    (!oneSectionIsEntered || (selectedSection === id)) && 
    (<div className="post-it-note-section-container">

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
            title={title}
            setTitle={setTitle}
            isInEditMode={isInEditMode}
        />    

        <SectionButtons 
            id={id}
            selectedItem={selectedItem}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
            isInDeleteMode={isInDeleteMode}
            setIsInDeleteMode={setIsInDeleteMode}
            setOneSectionIsEntered={setOneSectionIsEntered}
            arrayOfPostItNoteToDoLists={arrayOfPostItNoteToDoLists}
            setArrayOfPostItNoteToDoLists={setArrayOfPostItNoteToDoLists}
            isInEditMode={isInEditMode}
            setIsInEditMode={setIsInEditMode}
        />

        {(selectedSection === id) &&
            <div className="to-do-list-array-container">
                {arrayOfPostItNoteToDoLists.map((singlePostItNote) => (
                    <PostItNoteToDoList 
                        key={singlePostItNote.id}
                        id={singlePostItNote.id}
                        isInDeleteMode={isInDeleteMode}
                        arrayOfPostItNoteToDoLists={arrayOfPostItNoteToDoLists}
                        setArrayOfPostItNoteToDoLists={setArrayOfPostItNoteToDoLists}
                        oneSectionIsEntered={oneSectionIsEntered}
                        isInEditMode={isInEditMode}
                    />
                ))}
            </div>
        }
    </div> )
    );
}
 
export default PostItNoteSection;
