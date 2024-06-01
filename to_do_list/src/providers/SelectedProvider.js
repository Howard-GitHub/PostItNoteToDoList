import {createContext, useState} from 'react';

const SelectedContext = createContext();

const SelectedProvider = ({children}) => {
const [currentlySelectedSection, setCurrentlySelectedSection] = useState(null);
const [textareaIsSelected, setTextareaIsSelected] = useState(false);
    return ( 
        <SelectedContext.Provider 
            value={{currentlySelectedSection, setCurrentlySelectedSection,
                    textareaIsSelected, setTextareaIsSelected}}>

            {children}
        </SelectedContext.Provider>
    );
}
 
export {SelectedProvider, SelectedContext};
