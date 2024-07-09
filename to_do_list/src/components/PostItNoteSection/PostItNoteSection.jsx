import {useState, useRef, useEffect} from 'react';
import './PostItNoteSection.css'
import PostItNoteToDoList from './PostItNoteToDoList/PostItNoteToDoList';
import SectionButtons from './SectionButtons/SectionButtons';
import PostItNoteTitle from './PostItNoteTitle/PostItNoteTitle';
import useLocalStoredArray from '../../hooks/useLocalStoredArray';
import {handleClickEnterDeleteMode, handleClickExitDeleteMode} from '../../utils/DeleteModeUtils';
import useLocalStoredTextarea from '../../hooks/useLocalStoredTextarea';

const PostItNoteSection = ({id, isInDeleteMode, setIsInDeleteMode, arrayOfSections, setArrayOfSections, oneSectionIsEntered, setOneSectionIsEntered, 
                            selectedSection, setSelectedSection, handleClickDeleteSection}) => {
    const [title, setTitle] = useState(null);
    const [isInEditMode, setIsInEditMode] = useState(false);
    const titleRef = useRef();
    const [arrayOfPostItNoteToDoLists, setArrayOfPostItNoteToDoLists] = useState([]);
    const [deleteSectionFromLocal, setDeleteSectionFromLocal] = useState(false);
    const {handleClickAddItem, handleClickDeleteItem} = useLocalStoredArray(id, arrayOfPostItNoteToDoLists, setArrayOfPostItNoteToDoLists);
    const {handleChangeKeyboardInput} = useLocalStoredTextarea(id, title, setTitle, titleRef, '35px');

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
            setOneSectionIsEntered={setOneSectionIsEntered}
            setSelectedSection={setSelectedSection}
            title={title}
            isInEditMode={isInEditMode}
            handleClickDeleteSection={handleClickDeleteSection}
            handleChangeKeyboardInput={handleChangeKeyboardInput}
            setDeleteSectionFromLocal={setDeleteSectionFromLocal}
            arrayOfPostItNoteToDoLists={arrayOfPostItNoteToDoLists}
        />    

        <SectionButtons 
            id={id}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
            isInDeleteMode={isInDeleteMode}
            setIsInDeleteMode={setIsInDeleteMode}
            setOneSectionIsEntered={setOneSectionIsEntered}
            arrayOfPostItNoteToDoLists={arrayOfPostItNoteToDoLists}
            setArrayOfPostItNoteToDoLists={setArrayOfPostItNoteToDoLists}
            isInEditMode={isInEditMode}
            setIsInEditMode={setIsInEditMode}
            handleClickAddItem={handleClickAddItem}
            handleClickEnterDeleteMode={handleClickEnterDeleteMode}
            handleClickExitDeleteMode={handleClickExitDeleteMode}
        />

        {((selectedSection === id) && (arrayOfPostItNoteToDoLists !== null)) &&
            <div className="to-do-list-array-container">
                {arrayOfPostItNoteToDoLists.map((singlePostItNote) => (
                    <PostItNoteToDoList 
                        key={singlePostItNote.id}
                        id={singlePostItNote.id}
                        isInDeleteMode={isInDeleteMode}
                        oneSectionIsEntered={oneSectionIsEntered}
                        isInEditMode={isInEditMode}
                        handleClickDeleteToDoList={handleClickDeleteItem}
                    />
                ))}
            </div>
        }
    </div> )
    );
}
 
export default PostItNoteSection;
