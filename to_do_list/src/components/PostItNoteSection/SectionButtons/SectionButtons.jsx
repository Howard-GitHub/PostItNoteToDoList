import ExitDeleteItemModeButton from "../../ExitDeleteItemModeButton/ExitDeleteItemModeButton";
import DashboardButton from "../Buttons/DashboardButton/DashboardButton";
import ItemsButtonBar from "../../ItemsButtonBar/ItemsButtonBar";
import EditButton from "../Buttons/EditButton/EditButton";

const SectionButtons = ({id, selectedSection, setSelectedSection, isInDeleteMode, setIsInDeleteMode, setOneSectionIsEntered, isInEditMode, setIsInEditMode, 
                        handleClickAddItem, handleClickEnterDeleteMode, handleClickExitDeleteMode}) => {
    return ( 
        <div className="section-buttons-container">
            {(selectedSection === id) &&
                <div>
                    {isInDeleteMode &&
                        <ExitDeleteItemModeButton 
                            setIsInDeleteMode={setIsInDeleteMode}
                            handleClickExitDeleteMode={handleClickExitDeleteMode}
                        />
                    }
                    {!isInDeleteMode &&
                        <EditButton 
                            isInEditMode={isInEditMode}
                            setIsInEditMode={setIsInEditMode}
                        />
                    }
                    {!isInEditMode &&
                        <DashboardButton 
                            setOneSectionIsEntered={setOneSectionIsEntered}
                            setSelectedSection={setSelectedSection}
                        />
                    }
                    {(!isInDeleteMode && isInEditMode) &&
                        <ItemsButtonBar 
                            isInDeleteMode={isInDeleteMode}
                            setIsInDeleteMode={setIsInDeleteMode}
                            handleClickAddItem={handleClickAddItem}
                            handleClickEnterDeleteMode={handleClickEnterDeleteMode}
                        />
                    }
                </div>
            }
        </div>
     );
}
 
export default SectionButtons;