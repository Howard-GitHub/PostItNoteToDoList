import {useEffect, useState} from 'react';

const useLocalStoredTextarea = (id, text, setText, textareaRef, deleteComponentRef) => {

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
        if (textIsLoaded) {
            let stringTextareaHeight;
            let numericalTextareaHeight;
            
            if (textareaRef.current) {
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
                stringTextareaHeight = textareaRef.current.style.height;
                numericalTextareaHeight = parseInt(stringTextareaHeight.replace("px", ""));

                // Runs only if the clickable component, which allows the user to delete the item, needs to resize in correspondence with the textarea
                if (deleteComponentRef && deleteComponentRef.current) {
                    deleteComponentRef.current.style.height = `${stringTextareaHeight}`;
                }
            }
        }
    }, [textIsLoaded])

    // Saves changes to textarea in the local storage every time the text is modified
    useEffect(() => {
        if (textIsLoaded) { 
            localStorage.setItem("text:" + id, text);
        }
    }, [text])



    return {

    };
}
 
export default useLocalStoredTextarea;