import {useEffect} from 'react';

const useLocalStoredTextarea = (id, text, setText, textareaRef, height) => {
    
    // Retrieves data from the local storage when the program first runs
    useEffect(() => {
        const locallyStoredText = localStorage.getItem("text:" + id);
        if (locallyStoredText !== null) {
            setText(locallyStoredText);
        }
    }, [])

    // Sets the initial height of the textarea based on the amount of content it contains
    /*
    useEffect(() => {
        if (textareaRef.current && text) {
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight - 5}px`;
            //EDIT
            console.log("text", text);
            console.log(textareaRef.current.scrollHeight);
        }
    }, [text])*/

    // Saves changes to textarea in the local storage every time the text is modified
    useEffect(() => {
        if (text) { 
            localStorage.setItem("text:" + id, text);
            handleChangeTextareaHeight(textareaRef, height)
            console.log("run")
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
        //EDIT
        //handleChangeTextareaHeight(textareaRef, height);
    }

    return {
        handleChangeKeyboardInput
    };
}
 
export default useLocalStoredTextarea;