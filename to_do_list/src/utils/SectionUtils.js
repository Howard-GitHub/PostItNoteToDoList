// Resets scroll position to prevent the window from showing outside the webpage, which appears as a black screen
const handleResetWindowView = () => {
    window.scrollTo({top: 0})
}

// Enters selected post it note section
export const handleClickToEnterSection = (id, setOneSectionIsEntered, setSelectedSection) => {
    setOneSectionIsEntered(true);
    setSelectedSection(id);
    handleResetWindowView();
}

// Returns to dashboard
export const handleClickToDashboard = (setOneSectionIsEntered, setSelectedSection) => {
    setOneSectionIsEntered(false);
    setSelectedSection(null);
}

// Sets section in edit mode
export const handleClickEdit = (setIsInEditMode) => {
    setIsInEditMode(true);
}

// Leaves edit mode in section
export const handleClickDoneEdit = (setIsInEditMode) => {
    setIsInEditMode(false);
}

// Prevents the user from creating a new line
export const handleKeyDownEnter = (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
    }
}

// Adds a header to the to do list
export const handleClickAddHeader = (setDisplayHeader) => {
    setDisplayHeader(true);
}

// Removes the header from the to do list
export const handleClickRemoveHeader = (toDoListId, setDisplayHeader) => {
    const localKey = "text:" + toDoListId;
    localStorage.removeItem(localKey);
    setDisplayHeader(false);
}