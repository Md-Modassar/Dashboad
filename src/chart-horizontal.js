
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarElement
} from "chart.js"
import {data_json} from "./Data/data.js"
import {Bar} from "react-chartjs-2"
//import { useState } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const options={
    indexAxis:'x',
    elements:{
        bar:{
            borderWidth:2,
        }
    },
    responsive:true,
    plugins:{
        legend:{
            position:"left"
        },
        title:{
            display:true,
            text:"Chart js Horizontal Bar chart"
        }
    }
}


const labels=data_json.map((data)=>data.country)
const data={
    labels,
    datasets:[
        {label:"Intensity",
         data:data_json.map((data)=>data.intensity),
         borderColor:'rgb(255,99,132)' ,
         backgroundColor: 'rgba(255,99,132,0.5)',
        }
        
    ]
}


    
const Horizontalchart=()=>{


    return(
        <>
        
        
    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
    <div className="btn-group me-2" >
    <button type="button" className="btn btn-primary">
       Intensity</button>
    <button type="button" className="btn btn-primary" onClick="">Likelihood</button>
    <button type="button" className="btn btn-primary">Relevance</button>
    <button type="button" className="btn btn-primary">Year</button>
    <button type="button" className="btn btn-primary">Country</button>
    <button type="button" className="btn btn-primary">Topics</button>
    <button type="button" className="btn btn-primary">Region</button>
    <button type="button" className="btn btn-primary">City</button>
    </div>
    </div>

        
         
        
         
        <Bar data={data} options={options}/>
        </>
    
        
    )
}



export default Horizontalchart;
