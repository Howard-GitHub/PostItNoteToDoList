// Enters a mode that allows user to delete post it note items on the dashboard
export const handleClickEnterDeleteMode = (setIsInDeleteMode) => {
    setIsInDeleteMode(true);
}

// Exits delete mode
export const handleClickExitDeleteMode = (setIsInDeleteMode) => {
    setIsInDeleteMode(false);
}