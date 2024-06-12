import ExitDeleteItemModeButton from "../../ExitDeleteItemModeButton/ExitDeleteItemModeButton";
import DashboardButton from "../Buttons/DashboardButton/DashboardButton";
import ItemsButtonBar from "../../ItemsButtonBar/ItemsButtonBar";

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
                            <DashboardButton 
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