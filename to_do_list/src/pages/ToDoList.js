import {useState, useContext, createContext} from 'react';
import PostItNoteSection from '../components/PostItNoteSection/PostItNoteSection';
import ButtonBar from '../components/ButtonBar/ButtonBar';
import {v4 as uuidv4} from 'uuid';
import ExitDeleteSectionModeButton from '../components/ExitDeleteSectionModeButton/ExitDeleteSectionModeButton';
import './ToDoList.css'

const SelectedContext = createContext();

const ToDoList = () => {
    
    const initialSection = () => {
        id: uuidv4()
    }

    // Contains the post it note section. A post it note section contains multiple post it notes or "a section of post it notes" and is supposed to
    // contain one or more individual post it notes
    const [arrayOfSections, setArrayOfSections] = useState([initialSection]);
    const [isInDeleteMode, setIsInDeleteMode] = useState(false);
    const [identifySelectedSection, setIdentifySelectedSection] = useState(null);
    

    return ( 
        <SelectedContext.Provider value={{identifySelectedSection, setIdentifySelectedSection}}>
            <div className="dashboard-container">
            {isInDeleteMode && 
                <ExitDeleteSectionModeButton 
                    setIsInDeleteMode={setIsInDeleteMode}
                    arrayOfSections={arrayOfSections}
                    setArrayOfSections={setArrayOfSections}/>
            }

            {arrayOfSections.map((singlePostItNoteSection) => (
                <PostItNoteSection 
                    key={singlePostItNoteSection.id}
                    id={singlePostItNoteSection.id}
                    isInDeleteMode={isInDeleteMode}
                    arrayOfSections={arrayOfSections}
                    setArrayOfSections={setArrayOfSections}/>
            ))}

            {!isInDeleteMode &&
                <ButtonBar 
                    arrayOfSections={arrayOfSections} 
                    setArrayOfSections={setArrayOfSections}
                    isInDeleteMode={isInDeleteMode}
                    setIsInDeleteMode={setIsInDeleteMode}/>
            }
        </div>
        </SelectedContext.Provider>
    );
}
 
export default ToDoList;
export const useSelected = () => useContext(SelectedContext);