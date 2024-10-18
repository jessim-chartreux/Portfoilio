import React from 'react';
// import '../App.css'; 
import CV_Jessim from './CV_Jessim.pdf';
import Cvhead from './Cvhead';

function Render() {
    return(
       <div>
           <Cvhead />
           <a href={CV_Jessim} download="CV_Jessim.pdf">
               <button>Télécharger mon CV</button>
           </a>
       </div>
    );
}

export default Render;
