import {useEffect} from 'react';

const useLocalStoredTextarea = (id, text, setText, textareaRef) => {
    
    // Retrieves data from the local storage when the program first runs
    useEffect(() => {
        const locallyStoredText = localStorage.getItem("text:" + id);
        if (locallyStoredText) {
            setText(locallyStoredText);
        }
    }, [])

    // Saves changes to textarea in the local storage every time the text is modified and updates the size of the textarea to reflect the content it contains
    useEffect(() => {
        const localKey = "text:" + id
        localStorage.setItem(localKey, text);
        handleChangeTextareaHeight(textareaRef);
    }, [text])

    // Changes the height of the textarea everytime a new line is added
    const handleChangeTextareaHeight = (textareaRef) => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "0px";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }

    // Tracks and saves user input for a textarea
    const handleChangeKeyboardInput = (event) => {
        setText(event.target.value);
    }

    return {
        handleChangeKeyboardInput
    };
}
 
export default useLocalStoredTextarea;