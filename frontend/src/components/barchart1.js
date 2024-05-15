import React, { useRef, useEffect } from 'react';
import {
    select,
    scaleBand,
    axisBottom,
    stack,
    scaleLinear,
    axisLeft,
    stackOrderAscending
  } from "d3";

  

function Barchart({data,keys, colors}) {

   const svgRef = useRef();
    const wrapperRef = useRef();
   

    useEffect(() => {
        const svg = select(svgRef.current)

     const {width,height} = select(wrapperRef.current).node().getBoundingClientRect()
     svg.attr('viewBox', '0 0 ' + width + ' ' + height )


     const stackGenerator = stack().keys(keys).order(stackOrderAscending); 
     const layers = stackGenerator(data);
     

     const extent =[0, 20]
        

        // const { width, height } = dimensions || wrapperRef.current.getBoundingClientRect();
        

        const xScale= scaleBand()
                      .domain(data.map(d=>d.day))
                      .range([0, width])

        const yScale = scaleLinear()
                        .domain(extent)
                        .range([height,0])

        // console.log(layers, colors);

    svg
      .selectAll(".layer")
      .data(layers)
      .join("g")
      .attr("className", "layer")
      .attr("fill", layer => colors[layer.key])
      .selectAll("rect")
      .data(layer => layer)
      .join("rect")
      .attr("x", sequence => xScale(sequence.data.day)+35)
      .attr("width", Math.floor(xScale.bandwidth()/5))
      .attr("y", sequence => yScale(sequence[1])- 20)
      .attr("height", sequence => yScale(sequence[0]) - yScale(sequence[1]));



        const xAxis = axisBottom(xScale);

        svg.select(".x-axis")
           .attr("transform", `translate(8,${height-20})`)
           .call(xAxis);

        const yAxis= axisLeft(yScale);
        svg.select(".y-axis")
        .attr("transform", `translate(20,-20)`)
        .call(yAxis);

    },[colors, data, keys] )


   

    
    return (
        <React.Fragment>
            <div ref={wrapperRef}   >
                <svg ref={svgRef} width="100%" height="100%">
                    <g className="x-axis"/>
                    <g className="y-axis"/>

                </svg>
            </div>

        </React.Fragment>
    )
}

export default Barchart