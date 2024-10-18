import React from 'react';
import Cvhead from './Cvhead';

function Render() {
    return (
        <div>
            <Cvhead />
            <embed src="/CV_Jessim.pdf" type="application/pdf" width="100%" height="1200px" />
        </div>
    );
}

export default Render;
