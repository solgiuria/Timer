import {useRef} from 'react';


const Hour = () => {
    const subtitleRef= useRef(null)

    setInterval(()=>{
         let hora = new Date();
        //subtitleRef.current.innerHTML=hora.toLocaleTimeString();
       },1000);

   
    return(
        <h5 className='date' ref={subtitleRef}></h5>
    )


    
}

export { Hour }