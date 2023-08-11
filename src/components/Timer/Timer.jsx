import {useContext, useState, useEffect, useRef} from 'react';
import './Timer.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PlayButton } from '../PlayButton/PlayButton';
import { PauseButton } from '../PauseButton/PauseButton';
import { SettingsButton } from '../SettingsButton/SettingsButton';
import { SettingsContext } from '../../../context/settingsContext';


const Timer = () => {

    const{showSettings,setShowSettings, workMinutes, breakMinutes}=useContext(SettingsContext)

    const[isPaused, setIsPaused]=useState(true)
    const[mode, setMode]=useState('work') //modo work rojo, modo break verde
    const[secondsLeft, setSecondsLeft]=useState(0) //cuantos segundos quedan
    
    const secondsLeftRef= useRef(secondsLeft) //creo un objeto
    const isPausedRef= useRef(isPaused)
    const modeRef= useRef(mode)

   

    function switchMode(){
        const nextMode= modeRef.current === 'work'? 'break': 'work'
        const nextSeconds= (nextMode==='work'? workMinutes : breakMinutes)*60

        setMode(nextMode)
        modeRef.current= nextMode

        setSecondsLeft(nextSeconds)
        secondsLeftRef.current= nextSeconds
    }

     function tick(){
         secondsLeftRef.current-- //menos uno porq arranca del tiempo que le pones hasta llegar a 0 y cambiar de modo
         setSecondsLeft(secondsLeftRef.current)
     }

    function initTimer() {
        secondsLeftRef.current= workMinutes * 60
       //let secondsState= setSecondsLeft(secondsLeft*60)
      setSecondsLeft(secondsLeftRef.current)
     }

    useEffect(()=> {
        initTimer()

         const interval=  setInterval(() => {
             if(isPausedRef.current){
                 return
             }
             if(secondsLeftRef.current===0){
                 return switchMode()
             }
             tick()
        }, 10);
         return ()=> clearInterval(interval)
    },[SettingsContext])


    const totalSeconds = mode === 'work' 
    ? workMinutes*60 
    : breakMinutes*60

    //console.log('workminutes: '+workMinutes)
   // console.log('totalseconds: '+totalSeconds)

    const percentage= Math.round(secondsLeft / totalSeconds * 100) //no olvida que los valores son por ej 5.5 no 5,5 , sino no funciona, solo redondearia para abajo
    
   // console.log('secondsLeft: '+secondsLeft)
    //console.log('porcentaje: '+percentage)
    
    //hasta aca solo vimos el porcentaje
    //ahora vemos los minutos y segundos que faltan

    const minutes= Math.floor(secondsLeft / 60) //si el resultado es por ej 44.8 queremos 44, sino iria adelantando
    let seconds= secondsLeft % 60
    if(seconds<10) seconds= '0'+ seconds
   
    return(
        <div>
            <CircularProgressbar 
            value={percentage} 
             text={minutes + ':' + seconds} 
            styles={buildStyles({ /*propiedades css que vienen con el npm*/
            textColor:'#fff',
            pathColor: mode === 'work' ? '#f54e4e' : '#4aec8c',
            trailColor:'rgba(255,255,255,.2)',
            })
            } 
            />
            
            <div style={{marginTop: '20px'}}>
               {
                    isPaused
                    ?
                    //<PlayButton/>
                    <PlayButton onClick={()=> {setIsPaused(false), isPausedRef.current=false}}/>
                    :
                    //<PauseButton/>
                    <PauseButton onClick={()=> {setIsPaused(true), isPausedRef.current=true}}/>
                }
                
            </div>
            <div style={{marginTop: '20px'}}>
                <SettingsButton onClick={()=> setShowSettings(true)}/>
            </div>

        </div>
    

    )
}

export { Timer }