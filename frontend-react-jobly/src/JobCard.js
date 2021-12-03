import React from "react";
import './JobCard.css';

function JobCard({job}) {

    return (
        
        <div className="JobCard">
            <div className="JobCard-body">  
                <h6 className="card-title">
                    {job.title}
                </h6>
                <p>{job.companyName}</p>  
                <div>
                    <small>Salary: {job.salary}</small>    
                </div>  
                <div>
                    <small>Equity: {job.equity}</small>    
                </div>  
                <button className="apply">Apply</button>
            </div>            
        </div>         
        
    );
}

export default JobCard;