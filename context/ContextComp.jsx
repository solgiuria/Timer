import {useState} from 'react';
import { SettingsContext } from './settingsContext';

const ContextComp = ({children}) => {
    const [workMinutes, setWorkMinutes]= useState(45)
    const [breakMinutes, setBreakMinutes]= useState(15)
    const [showSettings, setShowSettings]=useState(false)
console.log('esto es'+ showSettings)
    return(
        <SettingsContext.Provider 
        value={{
            workMinutes,
            setWorkMinutes,
            //podria poner: y el estado workMinutes pero son lo mismo,es al pedo,lo defino directamente con el nombre del estado
            breakMinutes,
            setBreakMinutes,
            showSettings,
            setShowSettings
        }}>
            {children}
        </SettingsContext.Provider>
    )
}

export { ContextComp }