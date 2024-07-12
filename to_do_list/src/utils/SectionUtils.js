// Enters selected post it note section
export const handleOnClickToEnterSection = (id, setOneSectionIsEntered, setSelectedSection) => {
    setOneSectionIsEntered(true);
    setSelectedSection(id);
}

// Returns to dashboard
export const handleClickToDashboard = (setOneSectionIsEntered, setSelectedSection) => {
    setOneSectionIsEntered(false);
    setSelectedSection(null);
}

// Allows user to edit post it note section
export const handleClickEdit = (isInEditMode, setIsInEditMode) => {
    if (isInEditMode) {
        setIsInEditMode(false);
    }
    else {
        setIsInEditMode(true);
    }
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