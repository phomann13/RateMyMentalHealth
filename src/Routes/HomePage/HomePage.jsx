import React from "react";
import Report from "../../Components/Report/Report";
import Schools from '../../Components/Report/Reports.jsx'
import './HomePage.css'
const test = []
const Home = () =>{
    const reports = []

    for (var i = 0; i < Schools.length; i++){
        var rpt = <Report schoolName = {Schools[i].school} rating = {Schools[i].rating} img = {Schools[i].img}  />
        reports.push(rpt)
        
    }
    
return (
    <div className="pageContainer">
        
            
        {reports}

        
    </div>
   

);
}
export default Home;