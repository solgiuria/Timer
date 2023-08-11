import React, { useContext} from 'react';
import ReactSlider from 'react-slider';
import './Slider.css'
import { SettingsContext } from '../../../context/settingsContext';
import { BackButton } from '../BackButton/BackButton';

const SettingsComp = () => {

    const{workMinutes,setWorkMinutes, breakMinutes,setBreakMinutes,showSettings,setShowSettings}=useContext(SettingsContext)

    return(
        <div style={{textAlign:'left'}}>
            <label>work minutes {workMinutes}:00</label>
            <ReactSlider
            className={'slider'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={workMinutes}
            onChange={newValue=>setWorkMinutes(newValue)}
            min={1}
            max={120}
            />
            <label>break minutes {breakMinutes}:00</label>
            <ReactSlider
            className={'slider green'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={breakMinutes}
            onChange={newValue=>setBreakMinutes(newValue)}
            min={1}
            max={120}
            />
            <div style={{textAlign:'center', marginTop: '20px'}}>
                <BackButton onClick={()=> setShowSettings(false)}/>
            </div>
            
        </div>
    )
}

export { SettingsComp }