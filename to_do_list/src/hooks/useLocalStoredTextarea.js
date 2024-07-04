import {useEffect, useState} from 'react';

const useLocalStoredTextarea = (id, text, setText, textareaRef) => {

    const [textIsLoaded, setTextIsLoaded] = useState(false);

    // Retrieves data from the local storage when the program first runs
    useEffect(() => {
        const locallyStoredText = localStorage.getItem("text:" + id);
        if (locallyStoredText !== null) {
            setText(locallyStoredText);
        }

        setTextIsLoaded(true);
    }, [])

    useEffect(() => {
        if (textIsLoaded) {
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
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