import {useEffect} from "react";
import {v4 as uuidv4} from 'uuid';

const useLocalStoredArray = (localKey, arrayOfItems, setArrayOfItems) => {

    useEffect(() => {
            const locallyStoredArray = localStorage.getItem(localKey);

            if (locallyStoredArray !== null) {
                setArrayOfItems(JSON.parse(locallyStoredArray));
            }
    }, [])

    
    // Saves changes to array in the local storage every time the array is modified
    useEffect(() => {
        if (arrayOfItems.length !== 0) {
            localStorage.setItem(localKey, JSON.stringify(arrayOfItems));
        }
    }, [arrayOfItems])


    
    // Adds a new item to the array
    const handleOnClickAddNewItem = () => {
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
        handleOnClickAddNewItem,
        handleClickDeleteItem
    };
}
 
export default useLocalStoredArray;