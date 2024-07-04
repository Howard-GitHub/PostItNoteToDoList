import {useEffect, useState} from 'react';

const useLocalStoredTextarea = (id, text, setText, textareaRef) => {

    const [textIsLoaded, setTextIsLoaded] = useState(false);

    useEffect(() => {
        const locallyStoredText = localStorage.getItem("text:" + id);
        if (locallyStoredText !== null) {
            setText(locallyStoredText);
        }

        setTextIsLoaded(true);

        //console.log("first useEffect:", textareaRef.current.scrollHeight);
        //textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 3}px`;

    }, [])

    useEffect(() => {
        console.log("textareaIsLoaded effect:", textareaRef.current.scrollHeight)
        console.log("textAreaIsLoaded:", textIsLoaded)
        if (textIsLoaded) {
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [textIsLoaded])

    useEffect(() => {
        if (text !== "") { 
            localStorage.setItem("text:" + id, text);
        }
        //textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        console.log("second useEffect:", textareaRef.current.scrollHeight);
    }, [text])



    return {

    };
}
 
export default useLocalStoredTextarea;