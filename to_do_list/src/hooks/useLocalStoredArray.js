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

    // Removes all the tasks in a particular to do list from the local storage
    const handleRemoveLocalTaskNames = (toDoListId) => {
        const arrayOfTasksAsStrings = localStorage.getItem(toDoListId);
        const arrayOfTasks = JSON.parse(arrayOfTasksAsStrings);
        arrayOfTasks.forEach((task) => {
            const textTaskLocalKey = "text:" + task.id
            localStorage.removeItem(textTaskLocalKey);
        })
    }

    // Removes all the content in a section from the local storage
    const handleRemoveLocalSectonContent = (arrayOfPostItNoteToDoLists) => {
        arrayOfPostItNoteToDoLists.forEach((toDoList) => {
            handleRemoveLocalTaskNames(toDoList.id);
            localStorage.removeItem(toDoList.id);
        })
    }

    // Removes all the content in a to do list form the local storage
    const handleRemoveLocalToDoListContent = () => {
        const toDoListId = localKey
        handleRemoveLocalTaskNames(toDoListId);
        localStorage.removeItem(localKey);
    }

    // Deletes the post it note section the user clicks on
    const handleClickDeleteItem = (id, itemToDelete, arrayOfSubItems) => {
        if (itemToDelete === "section") {
            handleRemoveLocalSectonContent(arrayOfSubItems);
        }
        else if (itemToDelete == "toDoList") {
            handleRemoveLocalToDoListContent();
        }
        const newArray = arrayOfItems.filter((arrayOfItems) => arrayOfItems.id !== id)
        setArrayOfItems(newArray);
    }


    return {
        handleClickAddItem,
        handleClickDeleteItem
    };
}
 
export default useLocalStoredArray;