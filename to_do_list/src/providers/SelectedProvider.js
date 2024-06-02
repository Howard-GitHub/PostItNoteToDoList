import {createContext, useState} from 'react';

const SelectedContext = createContext();

const SelectedProvider = ({children}) => {
const [selectedItem, setSelectedItem] = useState(null);
const [oneSectionIsEntered, setOneSectionIsEntered] = useState(false);
const [selectedSection, setSelectedSection] = useState(null);
const [textareaIsSelected, setTextareaIsSelected] = useState(false);
    return ( 
        <SelectedContext.Provider 
            value={{selectedItem, setSelectedItem,
                    oneSectionIsEntered, setOneSectionIsEntered,
                    selectedSection, setSelectedSection,
                    textareaIsSelected, setTextareaIsSelected}}>
            {children}
        </SelectedContext.Provider>
    );
}
 
export {SelectedProvider, SelectedContext};
