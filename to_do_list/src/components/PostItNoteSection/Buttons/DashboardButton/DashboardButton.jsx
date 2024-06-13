import './DashboardButton.css';
import {handleOnClickToDashboard} from '../../../../utils/SectionUtils';

const DashboardButton = ({setOneSectionIsEntered, setSelectedSection}) => {

    return ( 
        <div className="dashboard-button-container">
            <button 
                className="dashboard-button"
                onClick={() => handleOnClickToDashboard(setOneSectionIsEntered, setSelectedSection)}>
                {"< Dashboard"}
            </button>
        </div>
    );
}
 
export default DashboardButton;