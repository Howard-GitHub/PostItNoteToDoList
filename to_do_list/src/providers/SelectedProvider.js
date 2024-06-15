import {createContext, useState} from 'react';

const SelectedContext = createContext();

const SelectedProvider = ({children}) => {
const [selectedItem, setSelectedItem] = useState(null);
    return ( 
        <SelectedContext.Provider 
            value={{selectedItem, setSelectedItem}}>
            {children}
        </SelectedContext.Provider>
    );
}
 
export {SelectedProvider, SelectedContext};
