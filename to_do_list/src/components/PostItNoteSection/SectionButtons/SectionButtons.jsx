import ExitDeleteItemModeButton from "../../ExitDeleteItemModeButton/ExitDeleteItemModeButton";
import DashboardButton from "../Buttons/DashboardButton/DashboardButton";
import ItemsButtonBar from "../../ItemsButtonBar/ItemsButtonBar";
import EditButton from "../Buttons/EditButton/EditButton";

const SectionButtons = ({id, selectedSection, setSelectedSection, isInDeleteMode, setIsInDeleteMode, setOneSectionIsEntered, arrayOfPostItNoteToDoLists, 
                        setArrayOfPostItNoteToDoLists, isInEditMode, setIsInEditMode, handleOnClickAddNewItem}) => {
    return ( 
        <div className="section-buttons-container">
            {(selectedSection === id) &&
                <div>
                    {isInDeleteMode &&
                        <ExitDeleteItemModeButton 
                            setIsInDeleteMode={setIsInDeleteMode}
                        />
                    }
                    <EditButton 
                        isInEditMode={isInEditMode}
                        setIsInEditMode={setIsInEditMode}
                    />
                            
                    {!isInEditMode &&
                        <DashboardButton 
                            setOneSectionIsEntered={setOneSectionIsEntered}
                            setSelectedSection={setSelectedSection}
                        />
                    }
                    {(!isInDeleteMode && isInEditMode) &&
                        <ItemsButtonBar 
                            arrayOfItems={arrayOfPostItNoteToDoLists}
                            setArrayOfItems={setArrayOfPostItNoteToDoLists}
                            isInDeleteMode={isInDeleteMode}
                            setIsInDeleteMode={setIsInDeleteMode}
                            handleOnClickAddNewItem={handleOnClickAddNewItem}
                        />
                    }
                </div>
            }
        </div>
     );
}
 
export default SectionButtons;