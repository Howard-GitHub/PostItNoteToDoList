import {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';

const useLocalStoredArray = (localKey, arrayOfItems, setArrayOfItems) => {
    const [initialArrayIsUpdated, setInitialArrayIsUpdated] = useState(false); 

    // Retrieves data from the local storage when the program first runs
    useEffect(() => {
        const locallyStoredArray = localStorage.getItem(localKey);

        if (locallyStoredArray !== null) {
            setArrayOfItems(JSON.parse(locallyStoredArray));
        }

        setInitialArrayIsUpdated(true);
    }, [])

    
    // Saves changes to array in the local storage every time the array is modified
    useEffect(() => {
        if (initialArrayIsUpdated) {
            localStorage.setItem(localKey, JSON.stringify(arrayOfItems));
        }
    }, [arrayOfItems])


    
    // Adds a new item to the array
    const handleClickAddItem = () => {
        const uniqueIdentifier = {
            id: uuidv4()
        }
        setArrayOfItems([...arrayOfItems, uniqueIdentifier]);
    }

    // Deletes the post it note section the user clicks on
    const handleClickDeleteItem = (id) => {
        const newArray = arrayOfItems.filter((arrayOfItems) => arrayOfItems.id !== id)
        setArrayOfItems(newArray);
    }


    return {
        handleClickAddItem,
        handleClickDeleteItem
    };
}
 
export default useLocalStoredArray;