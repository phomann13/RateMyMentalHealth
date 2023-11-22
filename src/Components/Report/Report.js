import {React, useState} from "react";
import './Report.css';
import Schools from './Reports.jsx'
const Report = (props) => {
    
    //const [school, setSchool] = useState(props.schoolName)
    
    const img = props.img
    const schoolName = props.schoolName
    const rating = props.rating
    
    return (
    <div className="reportContainer">
        <img className='logo'src={img} alt={schoolName}/>
        <div className="schoolName">
            {schoolName}
            
            <div className="rating">
            {rating}
            </div>

        </div>
        
        
        <div className="comments">
            {props.comments}
        </div>

    </div>
    )
}

export default Report