import ExitDeleteItemModeButton from "../../ExitDeleteItemModeButton/ExitDeleteItemModeButton";
import DashboardButton from "../Buttons/DashboardButton/DashboardButton";
import ItemsButtonBar from "../../ItemsButtonBar/ItemsButtonBar";
import EditButton from "../Buttons/EditButton/EditButton";

const SectionButtons = ({id, selectedSection, setSelectedSection, isInDeleteMode, setIsInDeleteMode, setOneSectionIsEntered, isInEditMode, setIsInEditMode, 
                        handleOnClickAddNewItem, handleClickEnterDeleteMode, handleClickExitDeleteMode}) => {
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
                            isInDeleteMode={isInDeleteMode}
                            setIsInDeleteMode={setIsInDeleteMode}
                            handleOnClickAddNewItem={handleOnClickAddNewItem}
                            handleClickEnterDeleteMode={handleClickEnterDeleteMode}
                        />
                    }
                </div>
            }
        </div>
     );
}
 
export default SectionButtons;