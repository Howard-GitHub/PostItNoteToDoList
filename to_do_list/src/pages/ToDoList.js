import {useState} from 'react';
import PostItNoteSection from '../components/PostItNoteSection/PostItNoteSection';
import ButtonBar from '../components/ButtonBar/ButtonBar';
import ExitDeleteSectionModeButton from '../components/ExitDeleteSectionModeButton/ExitDeleteSectionModeButton';
import {initialPostItNoteSection} from '../utils/ModifyArrayUtils';
import {SelectedProvider} from '../providers/SelectedProvider';
import './ToDoList.css';

const ToDoList = () => {

    // Contains the post it note section. A post it note section contains multiple post it notes or "a section of post it notes" and is supposed to
    // contain one or more individual post it notes
    const [arrayOfSections, setArrayOfSections] = useState([initialPostItNoteSection]);
    const [isInDeleteMode, setIsInDeleteMode] = useState(false);
    

    return ( 
        <SelectedProvider>

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
        </SelectedProvider>
    );
}
 
export default ToDoList;