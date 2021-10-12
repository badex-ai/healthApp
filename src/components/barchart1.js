import React, { useRef, useEffect } from 'react';
// import {useRef} from 

function Barchart() {

    

   
    const wrapperRef = useRef();
    const svgRef = useRef()
    useEffect(() => {
        
        
    }, )


   

    
    return (
        <React.Fragment>
            <div ref={wrapperRef}>
                <svg ref={svgRef}>

                </svg>
            </div>

        </React.Fragment>
    )
}

export default Barchart