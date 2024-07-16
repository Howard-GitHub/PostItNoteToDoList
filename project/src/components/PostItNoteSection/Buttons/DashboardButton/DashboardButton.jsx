import './DashboardButton.css';
import {handleClickToDashboard} from '../../../../utils/SectionUtils';

const DashboardButton = ({setOneSectionIsEntered, setSelectedSection}) => {

    return ( 
        <div className="dashboard-button-container">
            <button 
                className="dashboard-button"
                onClick={() => handleClickToDashboard(setOneSectionIsEntered, setSelectedSection)}>
                {"< Dashboard"}
            </button>
        </div>
    );
}
 
export default DashboardButton;