import {v4 as uuidv4} from 'uuid';


export const initialPostItNoteSection = () => {
    id: uuidv4()
}

// Adds a new post it note section
export const handleOnClickAddNewSection = (arrayOfSections, setArrayOfSections) => {
    const uniqueIdentifier = {
        id: uuidv4()
    }
    setArrayOfSections([...arrayOfSections, uniqueIdentifier]);
}

// Enters a mode that allows user to delete post it note sections on the dashboard
export const handleOnClickToEnterDeleteMode = (setIsInDeleteMode) => {
    setIsInDeleteMode(true);
}

// Deletes the post it note section the user clicks on
export const handleOnClickToDeleteSection = (id, isInDeleteMode, arrayOfSections, setArrayOfSections) => {
    if (isInDeleteMode) {
        const newArray = arrayOfSections.filter((arrayOfSections) => arrayOfSections.id !== id)
        setArrayOfSections(newArray);
    }
}

export const handleOnClickExitDeleteMode = (setIsInDeleteMode) => {
    setIsInDeleteMode(false);
}