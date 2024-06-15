// Changes the height of the textarea everytime a new line is added
export const handleChangeTextareaHeight = (textareaRef, height) => {
    if (textareaRef.current) {
        textareaRef.current.style.height = height;
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
}

// Tracks and saves user input for the title of a post it note section
export const handleOnChangeKeyboardInput = (event, textareaRef, setText, height) => {
    setText(event.target.value);
    handleChangeTextareaHeight(textareaRef, height);
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

// Allows user to edit post it note section
export const handleOnClickEditButton = (isInEditMode, setIsInEditMode) => {
    if (isInEditMode) {
        setIsInEditMode(false);
    }
    else {
        setIsInEditMode(true);
    }
}
