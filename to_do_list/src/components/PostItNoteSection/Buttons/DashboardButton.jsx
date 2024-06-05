import {useContext} from 'react';
import './DashboardButton.css';
import {SelectedContext} from '../../../providers/SelectedProvider';
import { handleOnClickToDashboard } from '../../../utils/SectionUtils';

const DashBoardButton = () => {

    const {setOneSectionIsEntered, setSelectedSection} = useContext(SelectedContext);

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
 
export default DashBoardButton;