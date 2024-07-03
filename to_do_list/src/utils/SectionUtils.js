// Changes the height of the textarea everytime a new line is added
export const handleChangeTextareaHeight = (textareaRef, height) => {
    if (textareaRef.current) {
        textareaRef.current.style.height = height;
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
}

// Tracks and saves user input for the title of a post it note section
export const handleChangeKeyboardInput = (event, textareaRef, setText, height) => {
    setText(event.target.value);
    handleChangeTextareaHeight(textareaRef, height);
}

// Changes height of component to be similar to the height of a textarea
export const handleChangeComponentHeight = (componentRef, textareaRef) => {
    let stringTextareaHeight;
    let numericalTextareaHeight;
    if (textareaRef.current && componentRef.current) {
        stringTextareaHeight = textareaRef.current.style.height;
        numericalTextareaHeight = parseInt(stringTextareaHeight.replace("px", ""));

        if (isNaN(numericalTextareaHeight)) {
            // Default height if the user has not typed anything yet
            componentRef.current.style.height = '35px';
        }
        else {
            componentRef.current.style.height = `${numericalTextareaHeight + 5}px`;
        }
    }

}

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
