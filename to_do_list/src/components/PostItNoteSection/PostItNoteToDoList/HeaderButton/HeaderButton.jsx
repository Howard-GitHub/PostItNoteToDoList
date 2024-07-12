import {handleClickAddHeader, handleClickRemoveHeader} from '../../../../utils/SectionUtils';
import './HeaderButton.css';

const HeaderButton = ({toDoListId, displayHeader, setDisplayHeader}) => {
    return (  
        <div className="header-button-container">
            {displayHeader ? (
                <button 
                    className="header-button header-button--remove-header"
                    onClick={() => handleClickRemoveHeader(toDoListId, setDisplayHeader)}
                >
                    Remove Header
                </button>
            ) : (
                <button
                    className="header-button header-button--add-header"
                    onClick={() => handleClickAddHeader(setDisplayHeader)}
                >
                    Add Header
                </button>
            )}
        </div>
    );
}
 
export default HeaderButton;