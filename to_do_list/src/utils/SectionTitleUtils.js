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
export const handleOnFocusTextarea = (id, identifySelectedSection, setTextareaIsSelected, setIdentifySelectedSection) => {
    if (identifySelectedSection === null) {
        setTextareaIsSelected(true);
        setIdentifySelectedSection(id);
    }
}

// Re-focuses onto the post it note section textarea
export const handleOnBlurTextarea = (titleRef) => {
    titleRef.current.focus();
}