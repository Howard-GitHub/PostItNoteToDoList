import './DashboardButton.css';
import {handleOnClickToDashboard} from '../../../../utils/SectionUtils';

const DashboardButton = ({setOneSectionIsEntered, setSelectedSection}) => {

    return ( 
        <div className="dashboard-button-container">
            <div 
                className="dashboard-button"
                onClick={() => handleOnClickToDashboard(setOneSectionIsEntered, setSelectedSection)}>
                <label className="dashboard-label">
                    {"< Dashboard"}
                </label>
            </div>
        </div>
    );
}
 
export default DashboardButton;