import React, { useRef, useEffect } from 'react';
// import {useRef} from 
import {
    select,
    scaleBand,
    axisBottom,
    stack,
    max,
    scaleLinear,
    axisLeft,
    stackOrderAscending
  } from "d3";

//   import useResizeObserver from "../assets/useResizeObserver";
  

function Barchart({data,keys, colors}) {

   console.log(data)
   const svgRef = useRef();
    const wrapperRef = useRef();
   
    //    const dimensions = useResizeObserver({wrapperRef,box: "border-box"});

    useEffect(() => {
        const svg = select(svgRef.current)

     const {width,height} = select(wrapperRef.current).node().getBoundingClientRect()


     const stackGenerator = stack().keys(keys); 
     const layers = stackGenerator(data);
     

     const extent =[0, 12]
     console.log(stackGenerator(data))
     console.log(extent)
        

        // const { width, height } = dimensions || wrapperRef.current.getBoundingClientRect();
        

        const xScale= scaleBand()
                      .domain(data.map(d=>d.day))
                      .range([0, width])

        const yScale = scaleLinear()
        .domain(extent)
        .range([height,0])


        svg
      .selectAll(".layer")
      .data(layers)
      .join("g")
      .attr("class", "layer")
      .attr("fill", layer => colors[layer.key])
      .selectAll("rect")
      .data(layer => layer)
      .join("rect")
      .attr("x", sequence => xScale(sequence.data.year))
      .attr("width", xScale.bandwidth()/5)
      .attr("y", sequence => yScale(sequence[1]))
      .attr("height", sequence => yScale(sequence[0]) - yScale(sequence[1]));



        const xAxis = axisBottom(xScale);

        svg.select(".x-axis")
           .attr("transform", `translate(8,${height - 20})`)
           .call(xAxis);

        const yAxis= axisLeft(yScale);
        svg.select(".y-axis")
        .attr("transform", `translate(20,-20)`)
        .call(yAxis);

    },[data, keys] )


   

    
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