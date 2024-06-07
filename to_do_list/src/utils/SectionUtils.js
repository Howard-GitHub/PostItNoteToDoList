// Changes the height of the textarea everytime a new line is added
export const handleChangeTextareaHeight = (titleRef) => {
    if (titleRef.current) {
        titleRef.current.style.height = 'auto';
        titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
    }
}

// Tracks and saves user input for the title of a post it note section
export const handleOnChangeKeyboardInput = (event, titleRef, setTitle) => {
    setTitle(event.target.value);
    handleChangeTextareaHeight(titleRef);
}

// Identifies which post it note section textarea has been selected to be edited and prevents other post it note section textareas from becoming selected
export const handleOnFocusTextarea = (id, selectedItem, setSelectedItem, setTextareaIsSelected) => {
    if (selectedItem === null) {
        setSelectedItem(id);
        setTextareaIsSelected(true);
    }
}

// Exits edit mode for the selected post it note title section
export const handleOnClickDoneButton = (setSelectedItem, setTextareaIsSelected) => {
    setSelectedItem(null);
    setTextareaIsSelected(false);
}

// Enters selected post it note section
export const handleOnClickToEnterSection = (id, setOneSectionIsEntered, setSelectedSection) => {
    setOneSectionIsEntered(true);
    setSelectedSection(id);
}

// Returns to dashboard
export const handleOnClickToDashboard = (setOneSectionIsEntered, setSelectedSection) => {
    setOneSectionIsEntered(false);
    setSelectedSection(null);
}