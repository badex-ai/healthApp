import React,{useEffect, useRef} from 'react';
import * as d3 from 'd3';

function DonutChart({color, data}) {
    const donutRef = useRef();
    const svg1Ref = useRef();

    console.log(color)

useEffect(() => {
    const  svg1= d3.select(svg1Ref.current).node();

   const width = svg1.getBoundingClientRect().width;
    console.log(width)

    // svg1.append("g")
    //     .attr("transform","translate(" + Math.min(width,height) / 2 + "," + Math.min(width,height) / 2 + ")")
    const backgroundCl= "#505151"
        const circle1 = d3.select('.outer1')
         circle1         // attach a circle
         .attr("cx", 80)             // position the x-centre
         .attr("cy", 80)             // position the y-centre
         .attr("r", 75)               // set the radius
         .style("stroke-width",10)    // set the stroke width
         .style("stroke",backgroundCl)      // set the line colour
         .style("fill", "none");

        const circle2 = d3.select('.outer2')
         circle2         // attach a circle
         .attr("cx", 80)             // position the x-centre
         .attr("cy", 80)             // position the y-centre
         .attr("r", 55)               // set the radius
         .style("stroke-width",10)    // set the stroke width
         .style("stroke", backgroundCl)      // set the line colour
         .style("fill", "none");

        const circle3 = d3.select('.outer3')
         circle3         // attach a circle
         .attr("cx", 80)             // position the x-centre
         .attr("cy", 80)             // position the y-centre
         .attr("r", 30)               // set the radius
         .style("stroke-width",10)    // set the stroke width
         .style("stroke", backgroundCl)      // set the line colour
         .style("fill", "none");

         
        //  props.percentage
        const radian=(arg) => Math.PI *  (arg / 180);

         const arc1 = d3.arc()
                        .innerRadius(70)
                        .outerRadius(80)
                        .startAngle(0)
                        .endAngle(radian(45));

         const arc2 = d3.arc()
                        .innerRadius(50)
                        .outerRadius(60)
                        .startAngle(0)
                        .endAngle(radian(145));

         const arc3 = d3.arc()
                        .innerRadius(25)
                        .outerRadius(35)
                        .startAngle(0)
                        .endAngle(radian(75));
                        
                        

        // circle1.append("path")
        d3.select(".arc1")
                .attr("d",arc1)
                .attr("fill", color.steps )
                .attr("transform", `translate(80,80)`)

        d3.select(".arc2")
                .attr("d",arc2)
                .attr("fill",  color.actTime )
                .attr("transform", `translate(80,80)`)

        d3.select(".arc3")
                .attr("d",arc3)
                .attr("fill", color.actCal )
                .attr("transform", `translate(80,80)`)

        
           
}, [])

   
   
    return (
        <React.Fragment>
            <svg ref={svg1Ref} width="100%" height="100%">
                <circle class="outer1"/>
                <path class="arc1"/>
                
                <circle class="outer2"/>
                <path class="arc2"/>
             
                <circle class="outer3"/>
                <path class="arc3"/>
               

            </svg>
            
            
        </React.Fragment>
    )
}

export default DonutChart
