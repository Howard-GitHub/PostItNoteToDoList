import './HeaderButton.css';

const HeaderButton = ({toDoListId, displayHeader, setDisplayHeader}) => {

    const handleClickAddHeader = () => {
        setDisplayHeader(true);
    }

    const handleClickRemoveHeader = () => {
        const localKey = "text:" + toDoListId;
        localStorage.removeItem(localKey);
        setDisplayHeader(false);
    }
    return (  
        <div className="header-button-container">
            {displayHeader ? (
                <button 
                    className="header-button header-button--remove-header"
                    onClick={handleClickRemoveHeader}
                >
                    Remove Header
                </button>
            ) : (
                <button
                    className="header-button header-button--add-header"
                    onClick={handleClickAddHeader}
                >
                    Add Header
                </button>
            )}
        </div>
    );
}
 
export default HeaderButton;