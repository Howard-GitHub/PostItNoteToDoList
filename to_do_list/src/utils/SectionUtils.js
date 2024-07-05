
// Changes height of component to be similar to the height of a textarea
export const handleChangeComponentHeight = (componentRef, textareaRef) => {
    let stringTextareaHeight;
    let numericalTextareaHeight;
    if (textareaRef.current && componentRef.current) {
        stringTextareaHeight = textareaRef.current.style.height;
        numericalTextareaHeight = parseInt(stringTextareaHeight.replace("px", ""));

        if (isNaN(numericalTextareaHeight)) {
            // Default height if the textarea was just created
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
