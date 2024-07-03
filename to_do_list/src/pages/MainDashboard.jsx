import {useState} from 'react';
import PostItNoteSection from '../components/PostItNoteSection/PostItNoteSection';
import ItemsButtonBar from '../components/ItemsButtonBar/ItemsButtonBar';
import ExitDeleteItemModeButton from '../components/ExitDeleteItemModeButton/ExitDeleteItemModeButton';
import './MainDashboard.css';
import useLocalStoredArray from '../hooks/useLocalStoredArray';
import {handleClickEnterDeleteMode, handleClickExitDeleteMode} from '../utils/DeleteModeUtils';

const MainDashboard = () => {

    // Contains the post it note section. A post it note section contains multiple post it notes or "a section of post it notes" and is supposed to
    // contain one or more individual post it notes
    const [arrayOfSections, setArrayOfSections] = useState([]);
    const [isInDeleteMode, setIsInDeleteMode] = useState(false);
    const [oneSectionIsEntered, setOneSectionIsEntered] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);
    const {handleClickAddItem, handleClickDeleteItem} = useLocalStoredArray("mainDashboard", arrayOfSections, setArrayOfSections);


    return ( 
            <div className="main-dashboard-container">
                {isInDeleteMode && 
                    <ExitDeleteItemModeButton 
                        setIsInDeleteMode={setIsInDeleteMode}
                        handleClickExitDeleteMode={handleClickExitDeleteMode}
                    />
                }

                {arrayOfSections.map((singlePostItNoteSection) => (
                    <PostItNoteSection 
                        key={singlePostItNoteSection.id}
                        id={singlePostItNoteSection.id}
                        isInDeleteMode={isInDeleteMode}
                        setIsInDeleteMode={setIsInDeleteMode}
                        arrayOfSections={arrayOfSections}
                        setArrayOfSections={setArrayOfSections}
                        oneSectionIsEntered={oneSectionIsEntered}
                        setOneSectionIsEntered={setOneSectionIsEntered}
                        selectedSection={selectedSection}
                        setSelectedSection={setSelectedSection}
                        handleClickDeleteSection={handleClickDeleteItem}
                    />
                ))}

                {(!isInDeleteMode && !oneSectionIsEntered) && 
                    <ItemsButtonBar
                        isInDeleteMode={isInDeleteMode}
                        setIsInDeleteMode={setIsInDeleteMode}
                        handleClickAddItem={handleClickAddItem}
                        handleClickEnterDeleteMode={handleClickEnterDeleteMode}
                    />
                }
            </div>
    );
}
 
export default MainDashboard;