import ExitDeleteItemModeButton from "../ExitDeleteItemModeButton/ExitDeleteItemModeButton";
import DashBoardButton from "./Buttons/DashboardButton";
import ItemsButtonBar from "../ItemsButtonBar/ItemsButtonBar";

const SectionButtons = ({id, textareaIsSelected, selectedSection, setSelectedSection, isInDeleteMode, setIsInDeleteMode, 
                        setOneSectionIsEntered, arrayOfPostItNoteToDoLists, setArrayOfPostItNoteToDoLists}) => {
    return ( 
        <div className="section-buttons-container">
            {((selectedSection === id) && !textareaIsSelected) &&
                <div>
                    {isInDeleteMode &&
                        <ExitDeleteItemModeButton 
                            setIsInDeleteMode={setIsInDeleteMode}
                        />
                    }
                            
                    {!isInDeleteMode && 
                        <div>
                            <DashBoardButton 
                                setOneSectionIsEntered={setOneSectionIsEntered}
                                setSelectedSection={setSelectedSection}
                            />
                                    
                            <ItemsButtonBar 
                                arrayOfItems={arrayOfPostItNoteToDoLists}
                                setArrayOfItems={setArrayOfPostItNoteToDoLists}
                                isInDeleteMode={isInDeleteMode}
                                setIsInDeleteMode={setIsInDeleteMode}
                            />
                        </div>
                    }
                </div>
            }
        </div>
     );
}
 
export default SectionButtons;