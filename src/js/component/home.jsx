import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";

//create your first component



const TrafficLight = () => {
	const [ color, setColor] = useState("");
	console.log(color)
		if (color == "red"){
			return(
			<div>
			<div className="circle red selected" onClick={()=> setColor("")}>
			</div>
			<div className="circle yellow "onClick={()=> setColor("yellow")}>
			</div>
			<div className="circle green"onClick={()=> setColor("green")}>
			</div>
    	</div>)
		}
		if (color == "yellow"){
			return(
			<div>
			<div className="circle red" onClick={()=> setColor("red")}>

			</div>
			<div className="circle yellow selected"onClick={()=> setColor("")}>

			</div>
			<div className="circle green"onClick={()=> setColor("green")}>

			</div>
      
    	</div>)
		}
		if (color == "green"){
			return(
			<div>
			<div className="circle red" onClick={()=> setColor("red")}>

			</div>
			<div className="circle yellow "onClick={()=> setColor("yellow")}>

			</div>
			<div className="circle green selected"onClick={()=> setColor("")}>

			</div>
      
    	</div>)
		}
	return (
		<div>
			<div className="circle red" onClick={()=> setColor("red")}>

			</div>
			<div className="circle yellow "onClick={()=> setColor("yellow")}>

			</div>
			<div className="circle green"onClick={()=> setColor("green")}>

			</div>
      
    	</div>
	);
};

export default TrafficLight;
