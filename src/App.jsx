import {Timer} from './components/Timer/Timer'
import { SettingsComp } from './components/SettingsComp/SettingsComp';
import { SettingsContext } from '../context/settingsContext';
import { useContext } from 'react';
import {DateComp} from './components/Date/Date'
import './App.css'
import { Hour } from './components/Hour/Hour';

function App() {
  
  const{showSettings}=useContext(SettingsContext)

  return (
    <>
      <DateComp/>
      <Hour/>
       <div className='father'>
        <main>   
        {
        showSettings 
        ? 
        <SettingsComp/>
        : 
        <Timer/>
        }      
        </main>
    </div>
    </>
 
       
    //</div>
   
  )
}

export default App