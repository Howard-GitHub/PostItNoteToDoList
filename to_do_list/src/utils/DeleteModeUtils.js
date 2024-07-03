import {v4 as uuidv4} from 'uuid';

export const initialPostItNoteSection = () => {
    id: uuidv4()
}

// Enters a mode that allows user to delete post it note items on the dashboard
export const handleClickEnterDeleteMode = (setIsInDeleteMode) => {
    setIsInDeleteMode(true);
}

// Exits delete mode
export const handleClickExitDeleteMode = (setIsInDeleteMode) => {
    setIsInDeleteMode(false);
}