import {useContext} from 'react';
import {SelectedContext} from '../../providers/SelectedProvider';
import './ButtonBar.css';
import AddNewSectionButton from "./Buttons/AddNewSectionButton";
import DeleteSectionButton from "./Buttons/DeleteSectionButton";

const ButtonBar = ({arrayOfSections, setArrayOfSections, isInDeleteMode, setIsInDeleteMode}) => {

    const {textareaIsSelected, oneSectionIsEntered} = useContext(SelectedContext);

    return ( 
        <div className="button-bar-container">
            {(!textareaIsSelected && !oneSectionIsEntered) && 
            <div 
                className="button-bar">
                <AddNewSectionButton 
                    arrayOfSections={arrayOfSections} 
                    setArrayOfSections={setArrayOfSections}/>
                <DeleteSectionButton 
                    isInDeleteMode={isInDeleteMode}
                    setIsInDeleteMode={setIsInDeleteMode}/>
            </div>
            }
        </div>
     );
}
 
export default ButtonBar;