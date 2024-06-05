import {v4 as uuidv4} from 'uuid';


export const initialPostItNoteSection = () => {
    id: uuidv4()
}

// Adds a new post it note section
export const handleOnClickAddNewItem = (arrayOfItems, setArrayOfItems) => {
    const uniqueIdentifier = {
        id: uuidv4()
    }
    setArrayOfItems([...arrayOfItems, uniqueIdentifier]);
}

// Enters a mode that allows user to delete post it note items on the dashboard
export const handleOnClickToEnterDeleteMode = (setIsInDeleteMode) => {
    setIsInDeleteMode(true);
}

// Deletes the post it note section the user clicks on
export const handleOnClickToDeleteItem = (id, isInDeleteMode, arrayOfItems, setArrayOfItems) => {
    if (isInDeleteMode) {
        const newArray = arrayOfItems.filter((arrayOfItems) => arrayOfItems.id !== id)
        setArrayOfItems(newArray);
    }
}

// Exits delete mode
export const handleOnClickExitDeleteMode = (setIsInDeleteMode) => {
    setIsInDeleteMode(false);
}