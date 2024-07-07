import {useEffect, useState} from 'react';

const useLocalStoredTextarea = (id, text, setText, textareaRef, height) => {

    const [textIsLoaded, setTextIsLoaded] = useState(false);

    // Retrieves data from the local storage when the program first runs
    useEffect(() => {
        const locallyStoredText = localStorage.getItem("text:" + id);
        if (locallyStoredText !== null) {
            setText(locallyStoredText);
        }

        setTextIsLoaded(true);
    }, [])

    // Sets the initial height of the textarea based on the amount of content it contains
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight - 5}px`;
        }
    }, [])

    // Saves changes to textarea in the local storage every time the text is modified
    useEffect(() => {
        if (textIsLoaded) { 
            localStorage.setItem("text:" + id, text);
        }
    }, [text])

    // Changes the height of the textarea everytime a new line is added
    const handleChangeTextareaHeight = (textareaRef, height) => {
        if (textareaRef.current) {
            textareaRef.current.style.height = height;
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }

    // Tracks and saves user input for a textarea
    const handleChangeKeyboardInput = (event) => {
        setText(event.target.value);
        handleChangeTextareaHeight(textareaRef, height);
    }

    return {
        handleChangeKeyboardInput
    };
}
 
export default useLocalStoredTextarea;