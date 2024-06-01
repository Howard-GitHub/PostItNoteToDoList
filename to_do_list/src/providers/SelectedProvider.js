import {createContext, useState} from 'react';

const SelectedContext = createContext();

const SelectedProvider = ({children}) => {
const [currentlySelectedSection, setCurrentlySelectedSection] = useState(null);
    return ( 
        <SelectedContext.Provider value={{currentlySelectedSection, setCurrentlySelectedSection}}>
            {children}
        </SelectedContext.Provider>
    );
}
 
export {SelectedProvider, SelectedContext};
