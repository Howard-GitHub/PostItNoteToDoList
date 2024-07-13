import {useEffect, useState, useRef} from 'react';
import PostItNoteSection from '../components/PostItNoteSection/PostItNoteSection';
import ItemsButtonBar from '../components/ItemsButtonBar/ItemsButtonBar';
import ExitDeleteItemModeButton from '../components/ExitDeleteItemModeButton/ExitDeleteItemModeButton';
import './MainDashboard.css';
import useLocalStoredArray from '../hooks/useLocalStoredArray';
import {handleClickEnterDeleteMode, handleClickExitDeleteMode} from '../utils/DeleteModeUtils';

const MainDashboard = () => {

    // Contains the post it note section. A post it note section contains multiple post it notes or "a section of post it notes" and is supposed to
    // contain one or more individual post it notes
    const mainDashboardRef = useRef();
    const [arrayOfSections, setArrayOfSections] = useState([]);
    const [isInDeleteMode, setIsInDeleteMode] = useState(false);
    const [oneSectionIsEntered, setOneSectionIsEntered] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);
    const {handleClickAddItem, handleClickDeleteItem} = useLocalStoredArray("mainDashboard", arrayOfSections, setArrayOfSections);

    useEffect(() => {
        // Resizes flex container so the group of post-it-notes stay centered
        const handleResizeFlexContainer = () => {
            // Width of post it note plus its padding
            const postItNoteTotalWidth = 410;
            const multiplyer = Math.floor(window.innerWidth / postItNoteTotalWidth);
            if (mainDashboardRef.current) {
                mainDashboardRef.current.style.width = `${postItNoteTotalWidth * multiplyer}px`;
            }
        }
        window.addEventListener("resize", handleResizeFlexContainer);
        return () => {
            window.removeEventListener("resize", handleResizeFlexContainer);
        }
    }, [])

    return ( 
            <div className="main-dashboard-container">
                <div 
                    className="main-dashboard"
                    ref={mainDashboardRef}
                >
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

                    {isInDeleteMode && 
                        <ExitDeleteItemModeButton 
                            setIsInDeleteMode={setIsInDeleteMode}
                            handleClickExitDeleteMode={handleClickExitDeleteMode}
                        />
                    }

                    {(!isInDeleteMode && !oneSectionIsEntered) && 
                        <ItemsButtonBar
                            isInDeleteMode={isInDeleteMode}
                            setIsInDeleteMode={setIsInDeleteMode}
                            handleClickAddItem={handleClickAddItem}
                            handleClickEnterDeleteMode={handleClickEnterDeleteMode}
                        />
                    }
            </div>
            </div>
    );
}
 
export default MainDashboard;