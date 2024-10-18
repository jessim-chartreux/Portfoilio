import React from 'react';
import Cvhead from './Cvhead';

function Render() {
    return (
        <div>
            <Cvhead />
            <iframe
                src="/CV_Jessim.pdf"
                title="CV"
                width="100%"
                height="1200px"
            ></iframe>
        </div>
    );
}

export default Render;
