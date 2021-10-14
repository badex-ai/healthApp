import React,{useEffect, useRef} from 'react';
import * as d3 from 'd3';

function DonutChart({sleepCl, stepcl, workoutcl},{data}) {
    const donutRef = useRef();
    const svg1Ref = useRef();

useEffect(() => {
    const  svg1= d3.select(svg1Ref.current).node();

   const width = svg1.getBoundingClientRect().width;
   const height = width;
    console.log(width)

    // svg1.append("g")
    //     .attr("transform","translate(" + Math.min(width,height) / 2 + "," + Math.min(width,height) / 2 + ")")
   
        let circle1 = d3.select('.outer1')
         circle1         // attach a circle
         .attr("cx", 80)             // position the x-centre
         .attr("cy", 80)             // position the y-centre
         .attr("r", 78)               // set the radius
         .style("stroke-width", 5)    // set the stroke width
         .style("stroke", "#505151")      // set the line colour
         .style("fill", "none");
}, [])

   
   
    return (
        <React.Fragment>
            <svg ref={svg1Ref} width="100%" height="100%">
                <circle class="outer1"/>
                
                <path class="outer2"/>
             
                <path class="outer3"/>
               

            </svg>
            
            
        </React.Fragment>
    )
}

export default DonutChart
