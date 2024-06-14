// Changes the height of the textarea everytime a new line is added
export const handleChangeTextareaHeight = (textareaRef) => {
    if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
}

// Tracks and saves user input for the title of a post it note section
export const handleOnChangeKeyboardInput = (event, textareaRef, setText) => {
    setText(event.target.value);
    handleChangeTextareaHeight(textareaRef);
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