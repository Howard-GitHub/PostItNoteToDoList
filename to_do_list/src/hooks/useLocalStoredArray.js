import {useEffect} from "react";
import {v4 as uuidv4} from 'uuid';

const useLocalStoredArray = (localKey, arrayOfItems, setArrayOfItems) => {

    useEffect(() => {
        const locallyStoredArray = localStorage.getItem(localKey);

        // Retrieves array from local storage if the array from the local storage is not empty
        if ((locallyStoredArray !== "[null]") && (locallyStoredArray !== "[]") && (locallyStoredArray !== "null")) {
            setArrayOfItems(JSON.parse(locallyStoredArray));
        }
    }, [])

    // Saves changes to array in the local storage every time the array is modified
    useEffect(() => {
        localStorage.setItem(localKey, JSON.stringify(arrayOfItems));
    }, [arrayOfItems])

    // Adds a new item to the array
    const handleOnClickAddNewItem = (arrayOfItems, setArrayOfItems) => {
        const uniqueIdentifier = {
            id: uuidv4()
        }
        setArrayOfItems([...arrayOfItems, uniqueIdentifier]);
    }

    /*
    // Deletes the item the user clicks on
    const handleOnClickToDeleteItem = (id, arrayOfItems, setArrayOfItems) => {
        const newArray = arrayOfItems.filter((arrayOfItems) => arrayOfItems.id !== id)
        setArrayOfItems(newArray);
    }
    */

    return {
        handleOnClickAddNewItem,
        //handleOnClickToDeleteItem
    };
}
 
export default useLocalStoredArray;