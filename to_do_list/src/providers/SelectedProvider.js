import {useContext, createContext, useState} from 'react';

const SelectedContext = createContext();

const SelectedProvider = ({children}) => {

const [identifySelectedSection, setIdentifySelectedSection] = useState(null);

    return ( 
        <SelectedContext.Provider value={{identifySelectedSection, setIdentifySelectedSection}}>
            {children}
        </SelectedContext.Provider>
    );
}
 
export {SelectedProvider};
export const useSelected = () => useContext(SelectedContext);