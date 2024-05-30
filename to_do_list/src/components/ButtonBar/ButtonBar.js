import './ButtonBar.css';
import AddNewSectionButton from "./Buttons/AddNewSectionButton";
import DeleteSectionButton from "./Buttons/DeleteSectionButton";

const ButtonBar = ({arrayOfSections, setArrayOfSections, isInDeleteMode, setIsInDeleteMode}) => {

    return ( 
        <div className="button-bar-container">
            <div 
                className="button-bar">
                <AddNewSectionButton 
                    arrayOfSections={arrayOfSections} 
                    setArrayOfSections={setArrayOfSections}/>
                <DeleteSectionButton 
                    isInDeleteMode={isInDeleteMode}
                    setIsInDeleteMode={setIsInDeleteMode}/>
                </div>
        </div>
     );
}
 
export default ButtonBar;